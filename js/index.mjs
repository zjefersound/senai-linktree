import { createCard } from "./card.mjs";

const projectLinks = [
  { label: "2048", url: "https://jeff2048.netlify.app/" },
  { label: "Tubos", url: "https://tubos.netlify.app/" },
  { label: "Saveiro", url: "https://saveiro.netlify.app/" },
  { label: "Blender da Shopee", url: "https://blender-da-shopee.netlify.app/" },
  { label: "Web Piano", url: "https://web-piano-tan.vercel.app/" },
  { label: "Xadrez", url: "https://chadreis.netlify.app/" },
];

const gameLinks = [
  { label: "Geometry Dash", url: "https://scratch.mit.edu/projects/143179860/" },
  { label: "diep.io", url: "https://scratch.mit.edu/projects/131270192/" },
  { label: "Minecraft", url: "https://scratch.mit.edu/projects/1315704071/" },
];

const linkSections = [
  { id: "links", title: "Meus projetos", links: projectLinks },
  { id: "scratch", title: "Jogos scratch", links: gameLinks },
];

function renderLinks(sectionListId = "links", links) {
  const list = document.getElementById(sectionListId);
  links.forEach((link) => list.appendChild(createCard(link)));
}

function renderSections(sections) {
  const mainElement = document.getElementById("main-content")
  sections.forEach(section => {
    const sectionElement = document.createElement("section")
    sectionElement.className = "section"
    sectionElement["aria-labelledby"] = "links-heading"
    

    const sectiontitleElement = document.createElement("h2")
    sectiontitleElement.id="links-heading"
    sectiontitleElement.className="section__title"
    sectiontitleElement.innerText=section.title

    const sectionListElement = document.createElement("ul")
    sectionListElement.id=section.id
    sectionListElement.className="links"   

    // render html
    mainElement.appendChild(sectionElement)
    sectionElement.appendChild(sectiontitleElement)
    sectionElement.appendChild(sectionListElement)
    renderLinks(section.id, section.links)
  })
}

function renderYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

function init() {
  renderSections(linkSections)
  renderYear();
}

document.addEventListener("DOMContentLoaded", init);
