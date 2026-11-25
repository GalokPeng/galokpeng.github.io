#!/usr/bin/env python3
"""Select a reproducible monthly quota from verified JSON Lines records."""

import argparse
from calendar import monthrange
from collections import defaultdict
from datetime import date, datetime
import json
from pathlib import Path


def month_arg(value):
    try:
        if len(value) != 7:
            raise ValueError
        return date.fromisoformat(value + '-01')
    except ValueError:
        raise argparse.ArgumentTypeError('use YYYY-MM') from None


def positive_integer(value):
    number = int(value)
    if number < 1:
        raise argparse.ArgumentTypeError('must be a positive integer')
    return number


def months_between(first, last):
    current = first
    while current <= last:
        yield current
        if current == last:
            break
        year, month = current.year, current.month
        current = date(year + (month == 12), month % 12 + 1, 1)


def read_string(record, field):
    value = record.get(field)
    if not isinstance(value, str) or not value.strip():
        raise ValueError(f'{field!r} must be a nonempty string')
    return value.strip()


def read_candidates(args):
    buckets = defaultdict(list)
    outside_scope = 0
    groups = set(args.group)
    with args.input.open(encoding='utf-8-sig') as source:
        for line_number, line in enumerate(source, 1):
            if not line.strip():
                continue
            try:
                record = json.loads(line)
                if not isinstance(record, dict):
                    raise ValueError('expected a JSON object')
                group = read_string(record, args.group_field)
                timestamp = read_string(record, args.date_field)
                if timestamp.endswith('Z'):
                    timestamp = timestamp[:-1] + '+00:00'
                day = datetime.fromisoformat(timestamp).date()
                key = read_string(record, args.key_field)
            except ValueError as error:
                raise ValueError(f'{args.input}:{line_number}: {error}') from error

            month = day.replace(day=1)
            if group in groups and args.first <= month <= args.through:
                buckets[group, month].append((day, key, line_number, record))
            else:
                outside_scope += 1

    return buckets, outside_scope


def select_candidates(candidates, month, quota):
    days_in_month = monthrange(month.year, month.month)[1]
    available = {candidate[1] for candidate in candidates}
    chosen_keys = set()
    chosen_days = set()
    selected = []

    for slot in range(min(quota, len(available))):
        center = 0.5 + (slot + 0.5) * days_in_month / quota

        def priority(candidate):
            day, key, line_number, _ = candidate
            return (abs(day.day - center) + (day in chosen_days), day, key, line_number)

        picked = min((row for row in candidates if row[1] not in chosen_keys), key=priority)
        day, key, _, _ = picked
        selected.append(picked)
        chosen_days.add(day)
        chosen_keys.add(key)

    selected.sort(key=lambda row: row[:3])
    return [row[3] for row in selected], len(available)


def sample(args):
    buckets, outside_scope = read_candidates(args)
    details = []
    selected_records = []
    for group in dict.fromkeys(args.group):
        for month in months_between(args.first, args.through):
            candidates = buckets[group, month]
            selected, distinct = select_candidates(candidates, month, args.per_month)
            selected_records.extend(selected)
            details.append({
                'group': group,
                'month': month.isoformat()[:7],
                'candidates': len(candidates),
                'unique_candidates': distinct,
                'selected': len(selected),
                'missing': args.per_month - len(selected),
            })

    expected = len(details) * args.per_month
    coverage = {
        'expected': expected,
        'selected': len(selected_records),
        'missing': expected - len(selected_records),
        'outside_scope': outside_scope,
        'groups': details,
    }
    return selected_records, coverage


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('input', type=Path, help='Verified UTF-8 JSON Lines candidates')
    parser.add_argument('--group-field', required=True)
    parser.add_argument('--date-field', required=True, help='Calendar date or ISO timestamp in the task timezone')
    parser.add_argument('--key-field', required=True, help='Nonempty, canonical string key')
    parser.add_argument('--group', required=True, action='append', help='Expected group, repeatable')
    parser.add_argument('--from', dest='first', required=True, type=month_arg)
    parser.add_argument('--through', required=True, type=month_arg)
    parser.add_argument('--per-month', required=True, type=positive_integer)
    parser.add_argument('--samples', required=True, type=Path)
    parser.add_argument('--coverage', required=True, type=Path)
    args = parser.parse_args()

    args.group = [value.strip() for value in args.group]
    if any(not value for value in args.group) or args.first > args.through:
        parser.error('provide nonempty groups and a starting month up to the ending month')

    paths = [args.input, args.samples, args.coverage]
    if len({path.resolve() for path in paths}) != len(paths):
        parser.error('input, samples, and coverage must be different files')

    try:
        selected, coverage = sample(args)
        with args.samples.open('w', encoding='utf-8', newline='\n') as destination:
            for record in selected:
                destination.write(json.dumps(record, ensure_ascii=False) + '\n')
        args.coverage.write_text(json.dumps(coverage, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    except (OSError, ValueError) as error:
        parser.error(str(error))

    return int(coverage['missing'] > 0)


if __name__ == '__main__':
    raise SystemExit(main())
