/**
 * index.mjs
 * -----------------------------------------------------------------------
 * Ponto de entrada. É AQUI que você edita seus links (não precisa mexer
 * em HTML/CSS nem no componente para adicionar/remover um link).
 *
 * COMO ADICIONAR UM LINK:
 *   1. Copie um bloco { label, url } dentro de `links`.
 *   2. Cole antes do `];`. "description" é opcional.
 *
 * A cor de cada cartão é automática (gira entre os tons lúdicos
 * definidos em styles/global.css) — não precisa configurar cor aqui.
 * -----------------------------------------------------------------------
 */
import { createCard } from "./card.mjs";

const links = [
  { label: "Jeff2048", url: "https://jeff2048.netlify.app/" },
  { label: "Tubos", url: "https://tubos.netlify.app/" },
  { label: "Saveiro", url: "https://saveiro.netlify.app/" },
  { label: "Blender da Shopee", url: "https://blender-da-shopee.netlify.app/" },
  { label: "Web Piano", url: "https://web-piano-tan.vercel.app/" },
];

function renderLinks() {
  const list = document.getElementById("links");
  links.forEach((link) => list.appendChild(createCard(link)));
}

function renderYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

function init() {
  renderLinks();
  renderYear();
}

document.addEventListener("DOMContentLoaded", init);
