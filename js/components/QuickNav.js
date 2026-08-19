/**
 * components/QuickNav.js
 * -----------------------------------------------------------------------
 * Navegação rápida (âncoras) para pular direto para uma turma/seção
 * quando a lista de seções for longa. Gerada automaticamente a partir
 * das seções cadastradas em data.js.
 * -----------------------------------------------------------------------
 */

/**
 * @param {Array<{ id: string, title: string }>} sections
 * @returns {HTMLElement}
 */
export function createQuickNav(sections) {
  const nav = document.createElement("nav");
  nav.className = "quick-nav";
  nav.setAttribute("aria-label", "Navegação rápida entre turmas");

  const list = document.createElement("ul");
  list.className = "quick-nav__list";

  sections.forEach(({ id, title }) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = "quick-nav__link";
    a.href = `#${id}`;
    a.textContent = title;
    li.appendChild(a);
    list.appendChild(li);
  });

  nav.appendChild(list);
  return nav;
}
