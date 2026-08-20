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
