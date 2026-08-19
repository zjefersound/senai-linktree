/**
 * app.js
 * -----------------------------------------------------------------------
 * Ponto de entrada da aplicação. Lê os dados de data.js e monta a página
 * usando os componentes (Profile, QuickNav, Section > LinkItem).
 * Não precisa ser editado para o uso comum (trocar turmas/links) — isso
 * é feito em js/data.js.
 * -----------------------------------------------------------------------
 */
import { profile, sections } from "./data.js";
import { createProfile } from "./components/Profile.js";
import { createQuickNav } from "./components/QuickNav.js";
import { createSection } from "./components/Section.js";

function renderProfile() {
  const mount = document.getElementById("profile-mount");
  mount.appendChild(createProfile(profile));
}

function renderQuickNav() {
  const mount = document.getElementById("quick-nav-mount");
  if (sections.length > 1) {
    mount.appendChild(createQuickNav(sections));
  }
}

function renderSections() {
  const mount = document.getElementById("sections-mount");
  sections.forEach((sectionData) => {
    mount.appendChild(createSection(sectionData));
  });
}

function renderFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

function init() {
  renderProfile();
  renderQuickNav();
  renderSections();
  renderFooterYear();
}

document.addEventListener("DOMContentLoaded", init);
