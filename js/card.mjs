/**
 * card.mjs
 * -----------------------------------------------------------------------
 * Componente: um cartão de link. Recebe os dados de um link e devolve
 * um <li> pronto para ser inserido na lista (#links).
 * -----------------------------------------------------------------------
 */

/**
 * @param {{ label: string, url: string, description?: string }} link
 * @returns {HTMLLIElement}
 */
export function createCard({ label, url, description }) {
  const item = document.createElement("li");
  item.className = "card";

  const anchor = document.createElement("a");
  anchor.className = "card__link";
  anchor.href = url;

  // Links externos abrem em nova aba com segurança (noopener/noreferrer).
  const isExternal = /^https?:\/\//i.test(url);
  if (isExternal) {
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
  }

  const labelEl = document.createElement("span");
  labelEl.className = "card__label";
  labelEl.textContent = label;
  anchor.appendChild(labelEl);

  if (description) {
    const descEl = document.createElement("span");
    descEl.className = "card__description";
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
