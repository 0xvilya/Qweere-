// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menuToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }
});

// Project card HTML generator
function projectCardHTML(p) {
  const initial = (p.author || 'A')[0].toUpperCase();
  return `
    <a href="project.html?id=${p.id}" class="project-card">
      <div class="project-cover">
        <div class="placeholder">${p.emoji || '🚀'}</div>
      </div>
      <div class="project-body">
        <div class="project-tags">
          ${p.tags.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="project-meta">
          <div class="project-author">
            <div class="avatar">${initial}</div>
            <span>${p.author || 'anonymous'}</span>
          </div>
          <span>★ ${p.stars || 0}</span>
        </div>
      </div>
    </a>
  `;
}
