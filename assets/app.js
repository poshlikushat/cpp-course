function renderDays() {
  const container = document.getElementById("days-container");
  if (!container) return;

  const sorted = [...DAYS].sort((a, b) => a.day - b.day);

  container.innerHTML = sorted
    .map(
      (d) => `
    <div class="card">
      <span class="day-badge">День ${d.day}</span>
      <h3>${d.title}</h3>
      <p>${d.description}</p>
      <a class="btn" href="${d.repoUrl}" target="_blank" rel="noopener">Открыть репозиторий</a>
    </div>
  `
    )
    .join("");
}

function renderPresentations() {
  const container = document.getElementById("presentations-container");
  if (!container) return;

  const sorted = [...PRESENTATIONS].sort((a, b) => a.day - b.day);

  container.innerHTML = sorted
    .map((p) => {
      const isPdf = p.url.toLowerCase().endsWith(".pdf");
      const attrs = isPdf ? 'download target="_blank"' : 'target="_blank" rel="noopener"';
      const label = isPdf ? "Скачать PDF" : "Открыть презентацию";
      return `
    <div class="card">
      <span class="day-badge">День ${p.day}</span>
      <h3>${p.title}</h3>
      <a class="btn" href="${p.url}" ${attrs}>${label}</a>
    </div>
  `;
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderDays();
  renderPresentations();
});
