/**
 * components/Section.js
 * -----------------------------------------------------------------------
 * Componente responsável por renderizar UMA seção (ex.: uma turma),
 * com título e sua lista de links. Usa o componente LinkItem para
 * montar cada item da lista.
 * -----------------------------------------------------------------------
 */
import { createLinkItem } from "./LinkItem.js";

/**
 * @param {{ id: string, title: string, links: Array }} sectionData
 * @returns {HTMLElement}
 */
export function createSection({ id, title, links }) {
  const section = document.createElement("section");
  section.className = "section";
  section.id = id;
  section.setAttribute("aria-labelledby", `${id}-heading`);

  const heading = document.createElement("h2");
  heading.className = "section__title";
  heading.id = `${id}-heading`;
  heading.textContent = title;
  section.appendChild(heading);

  const list = document.createElement("ul");
  list.className = "link-list";

  if (links && links.length > 0) {
    links.forEach((link) => list.appendChild(createLinkItem(link)));
  } else {
    const empty = document.createElement("li");
    empty.className = "link-list__empty";
    empty.textContent = "Nenhum link cadastrado ainda.";
    list.appendChild(empty);
  }

  section.appendChild(list);
  return section;
}
