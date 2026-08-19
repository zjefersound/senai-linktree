/**
 * components/LinkItem.js
 * -----------------------------------------------------------------------
 * Componente responsável por renderizar UM link (um item clicável).
 * Recebe um objeto { label, url, description } e devolve um <li> pronto
 * para ser inserido em uma lista.
 * -----------------------------------------------------------------------
 */

/**
 * @param {{ label: string, url: string, description?: string }} link
 * @returns {HTMLLIElement}
 */
export function createLinkItem({ label, url, description }) {
  const item = document.createElement("li");
  item.className = "link-item";

  const anchor = document.createElement("a");
  anchor.className = "link-item__anchor";
  anchor.href = url;

  // Links externos abrem em nova aba com segurança (noopener/noreferrer).
  // mailto:/tel: continuam na mesma aba, comportamento nativo.
  const isExternal = /^https?:\/\//i.test(url);
  if (isExternal) {
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
  }

  const labelEl = document.createElement("span");
  labelEl.className = "link-item__label";
  labelEl.textContent = label;
  anchor.appendChild(labelEl);

  if (description) {
    const descEl = document.createElement("span");
    descEl.className = "link-item__description";
    descEl.textContent = description;
    anchor.appendChild(descEl);
  }

  if (isExternal) {
    const srOnly = document.createElement("span");
    srOnly.className = "sr-only";
    srOnly.textContent = " (abre em nova aba)";
    anchor.appendChild(srOnly);
  }

  item.appendChild(anchor);
  return item;
}
