export const copyClient = `
for (const button of document.querySelectorAll("[data-copy-url], [data-copy-from]")) {
  const label = button.querySelector("span");
  const originalLabel = label.textContent;
  const field = button.dataset.copyFrom
    ? document.getElementById(button.dataset.copyFrom)
    : button.closest(".deck").nextElementSibling;
  let timer;
  button.addEventListener("click", async () => {
    const value = button.dataset.copyUrl ?? field.value;
    let copied = false;
    try {
      await navigator.clipboard.writeText(value);
      copied = true;
    } catch {
      field.hidden = false;
      field.focus();
      field.select();
      try { copied = document.execCommand("copy"); } catch {}
      if (copied) {
        field.hidden = true;
        button.focus();
      }
    }
    clearTimeout(timer);
    label.textContent = copied ? "复制成功" : "请手动复制";
    if (copied) timer = setTimeout(() => { label.textContent = originalLabel; }, 2200);
  });
}
async function refreshBalance() {
  try {
    const response = await fetch(location.href, {headers:{Accept:"application/json"}, cache:"no-store"});
    if (!response.ok) return;
    const rows = await response.json();
    for (const {file_id, used, cap} of rows) {
      const output = document.querySelector('[data-file_id="' + file_id + '"] small');
      if (output) output.textContent = "剩余 " + (cap - used) + " / " + cap + " 次";
    }
  } catch {}
}
if (document.querySelector(".deck[data-file_id]")) {
addEventListener("focus", refreshBalance);
addEventListener("pageshow", event => { if (event.persisted) refreshBalance(); });
document.addEventListener("visibilitychange", () => { if (!document.hidden) refreshBalance(); });
}
`;
