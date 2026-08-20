# Linktree

Página estilo "linktree", com visual lúdico, para centralizar o acesso a
projetos e links. Apenas HTML, CSS e JavaScript puro (módulos `.mjs`) —
sem frameworks, sem build.

## Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org/) instalado (qualquer versão
recente).

```bash
node server.js
```

Depois acesse **http://localhost:5500** no navegador.

> Por que não posso simplesmente abrir o `index.html` clicando duas vezes?
> Porque o projeto usa `<script type="module">`, e navegadores bloqueiam
> módulos JS carregados via `file://` por segurança. Rodando com
> `node server.js` isso é resolvido.

Para usar outra porta:

```bash
PORT=8080 node server.js
```

## Como editar o conteúdo

- **Links**: edite o array `links` em [`js/index.mjs`](js/index.mjs) —
  cada item é `{ label, url }` (ou `{ label, url, description }`). A cor
  do cartão é automática, gira entre os 5 tons definidos em
  [`styles/global.css`](styles/global.css) (`--accent-1` a `--accent-5`).
- **Perfil (nome, cargo, bio)** e **título da seção**: são texto estático
  em [`index.html`](index.html) — edite direto ali.

Basta salvar e recarregar a página no navegador — não precisa reiniciar
o servidor.

## Estrutura do projeto

```
index.html            Marcação + perfil estático + ponto de montagem dos links
styles/
  global.css           Estilo (cores sólidas, responsivo, acessível)
js/
  index.mjs             Ponto de entrada — dados dos links + renderização
  card.mjs               Componente: um cartão de link
server.js              Servidor HTTP estático para rodar localmente
```

Para mudar o layout do cartão de link, edite [`js/card.mjs`](js/card.mjs)
(estrutura) e a seção `.card` de [`styles/global.css`](styles/global.css)
(estilo).

## Acessibilidade e design

- Visual retrô 8-bit: fundo em faixas de cor sólidas simulando um pôr do
  sol pixelado (sem gradiente com blend — cada faixa é uma cor sólida,
  como nos jogos 8-bit de verdade), painel com moldura grossa e sombra
  "dura" (sem blur), fonte pixelada ("Press Start 2P") no título da seção
  e nos botões de link.
- Cores sólidas, sem gradientes, com contraste testado para WCAG AA
  (mínimo 4.5:1 em texto normal).
- Landmarks semânticos (`header`, `main`, `footer`), link "Pular para o
  conteúdo" e cabeçalhos hierárquicos (`h1`/`h2`).
- Área de toque mínima de 44px nos links, indicação de "abre em nova aba"
  para leitores de tela e anel de foco visível (`:focus-visible`) para
  navegação por teclado.
- Layout responsivo mobile-first, testado de 360px a telas largas.
#   s e n a i - l i n k t r e e  
