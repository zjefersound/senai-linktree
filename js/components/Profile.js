/**
 * components/Profile.js
 * -----------------------------------------------------------------------
 * Componente responsável pelo cabeçalho de perfil (foto, nome, cargo/
 * papel e bio curta).
 * -----------------------------------------------------------------------
 */

/**
 * @param {{ name: string, role?: string, bio?: string, avatar?: string|null }} profile
 * @returns {HTMLElement}
 */
export function createProfile({ name, role, bio, avatar }) {
  const wrapper = document.createElement("div");
  wrapper.className = "profile";

  if (avatar) {
    const img = document.createElement("img");
    img.className = "profile__avatar";
    img.src = avatar;
    img.alt = `Foto de ${name}`;
    img.width = 96;
    img.height = 96;
    wrapper.appendChild(img);
  }

  const name_ = document.createElement("h1");
  name_.className = "profile__name";
  name_.textContent = name;
  wrapper.appendChild(name_);

  if (role) {
    const roleEl = document.createElement("p");
    roleEl.className = "profile__role";
    roleEl.textContent = role;
    wrapper.appendChild(roleEl);
  }

  if (bio) {
    const bioEl = document.createElement("p");
    bioEl.className = "profile__bio";
    bioEl.textContent = bio;
    wrapper.appendChild(bioEl);
  }

  return wrapper;
}
