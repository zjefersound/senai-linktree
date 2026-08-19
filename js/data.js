/**
 * data.js
 * -----------------------------------------------------------------------
 * ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR NO DIA A DIA.
 *
 * Aqui ficam o seu perfil e as SEÇÕES (turmas, disciplinas, projetos,
 * etc.) com seus respectivos LINKS. O app.js lê este arquivo e monta a
 * página automaticamente — não é necessário mexer em HTML, CSS ou nos
 * componentes para adicionar/remover uma seção ou um link.
 *
 * COMO ADICIONAR UMA NOVA SEÇÃO:
 *   1. Copie um dos blocos dentro de `sections` (do { até }).
 *   2. Cole no final da lista, antes do `];`.
 *   3. Troque "id", "title" e os "links".
 *      - "id" deve ser único, sem espaços/acentos (ex: "meus-jogos").
 *
 * COMO ADICIONAR UM NOVO LINK EM UMA SEÇÃO:
 *   1. Dentro de `links: [ ... ]`, copie um bloco { label, url, description }.
 *   2. "description" é opcional — pode remover a linha se não precisar.
 *
 * As cores dos cartões de link são geradas automaticamente (giram entre
 * as cores lúdicas do tema em css/styles.css) — não precisa configurar
 * cor por link aqui.
 * -----------------------------------------------------------------------
 */

export const profile = {
  name: "Prof. Jeferson Souza (Jeff)",
  role: "SENAI — Professor de programação (ou o que o chefe mandar)",
  bio: "Links úties para as aulas",
  // Coloque uma imagem em assets/avatar.jpg e troque o caminho abaixo.
  // Deixe como null para não exibir foto.
  avatar: null,
};

export const sections = [
  {
    id: "meus-projetos",
    title: "Meus projetos 🎮",
    links: [
      {
        label: "Jeff2048",
        url: "https://jeff2048.netlify.app/",
      },
      {
        label: "Tubos",
        url: "https://tubos.netlify.app/",
      },
      {
        label: "Saveiro",
        url: "https://saveiro.netlify.app/",
      },
      {
        label: "Blender da Shopee",
        url: "https://blender-da-shopee.netlify.app/",
      },
      {
        label: "Web Piano",
        url: "https://web-piano-tan.vercel.app/",
      },
    ],
  },
];
