const budget = document.getElementById('ladder-budget');
const budgetRung = document.getElementById('budget-rung');
const share = document.getElementById('budget-share');
const shareValue = document.getElementById('share-value');
const budgetContext = document.getElementById('budget-context');
const total = document.getElementById('budget-total');
const reserve = document.getElementById('budget-reserve');
const sources = budget.querySelectorAll('[data-fraction]');

function updateBudget() {
  const consumed = Number(budgetRung.value) * share.valueAsNumber / 100;
  const percentage = share.value + '%';
  shareValue.value = percentage;
  share.setAttribute('aria-valuetext', percentage);
  budgetContext.textContent = budgetRung.selectedOptions[0].text + ' 档，' + percentage + ' 实验语料';
  for (const row of sources) {
    row.cells[2].textContent = (consumed * Number(row.dataset.fraction)).toFixed(4);
  }
  total.textContent = consumed.toFixed(3);
  reserve.textContent = (consumed * Number(budget.dataset.buffer)).toFixed(3);
}

share.addEventListener('input', updateBudget);
budgetRung.addEventListener('change', updateBudget);
updateBudget();
budget.querySelector('.ladder-controls').hidden = false;

const history = document.getElementById('ladder-history');
const historyRung = document.getElementById('history-rung');
const chart = history.querySelector('img');
const context = document.getElementById('history-context');

function updateHistory() {
  const rung = historyRung.value;
  chart.src = '/articles/ladder/history-' + rung + '.webp';
  chart.alt = rung + ' 档三套配方相对基准的 ICL 综合分和技术文档 BPC 差值曲线';
  context.textContent = rung + ' 档';
}

historyRung.addEventListener('change', updateHistory);
updateHistory();
history.querySelector('.ladder-controls').hidden = false;
document.getElementById('history-links').hidden = true;
