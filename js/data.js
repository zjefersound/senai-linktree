/**
 * data.js
 * -----------------------------------------------------------------------
 * ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR NO DIA A DIA.
 *
 * Aqui ficam o seu perfil e as SEÇÕES (turmas, disciplinas, etc.) com
 * seus respectivos LINKS. O app.js lê este arquivo e monta a página
 * automaticamente — não é necessário mexer em HTML, CSS ou nos
 * componentes para adicionar/remover uma turma ou um link.
 *
 * COMO ADICIONAR UMA NOVA TURMA/SEÇÃO:
 *   1. Copie um dos blocos dentro de `sections` (do { até }).
 *   2. Cole no final da lista, antes do `];`.
 *   3. Troque "id", "title" e os "links".
 *      - "id" deve ser único, sem espaços/acentos (ex: "turma-2b-ti").
 *
 * COMO ADICIONAR UM NOVO LINK EM UMA SEÇÃO:
 *   1. Dentro de `links: [ ... ]`, copie um bloco { label, url, description }.
 *   2. "description" é opcional — pode remover a linha se não precisar.
 * -----------------------------------------------------------------------
 */

export const profile = {
  name: "Prof. Seu Nome",
  role: "SENAI — Técnico em Informática",
  bio: "Bem-vindo(a)! Aqui você encontra os materiais, avisos e grupos de cada turma.",
  // Coloque uma imagem em assets/avatar.jpg e troque o caminho abaixo.
  // Deixe como null para não exibir foto.
  avatar: null,
};

export const sections = [
  {
    id: "turma-1a-informatica",
    title: "Turma 1A — Informática (Manhã)",
    links: [
      {
        label: "Google Classroom",
        url: "https://classroom.google.com/",
        description: "Atividades, avisos e entregas",
      },
      {
        label: "Material de aula (Drive)",
        url: "https://drive.google.com/",
        description: "Slides, apostilas e exercícios",
      },
      {
        label: "Grupo do WhatsApp",
        url: "https://chat.whatsapp.com/",
        description: "Avisos rápidos da turma",
      },
    ],
  },
  {
    id: "turma-2b-eletronica",
    title: "Turma 2B — Eletrônica (Tarde)",
    links: [
      {
        label: "Google Classroom",
        url: "https://classroom.google.com/",
        description: "Atividades, avisos e entregas",
      },
      {
        label: "Material de aula (Drive)",
        url: "https://drive.google.com/",
      },
    ],
  },
  {
    id: "turma-3c-mecatronica",
    title: "Turma 3C — Mecatrônica (Noite)",
    links: [
      {
        label: "Google Classroom",
        url: "https://classroom.google.com/",
        description: "Atividades, avisos e entregas",
      },
      {
        label: "Formulário de dúvidas",
        url: "https://forms.google.com/",
      },
    ],
  },
  {
    id: "links-uteis",
    title: "Links úteis gerais",
    links: [
      {
        label: "Portal do aluno SENAI",
        url: "https://www.sp.senai.br/",
      },
      {
        label: "E-mail para contato",
        url: "mailto:professor@example.com",
      },
    ],
  },
];
