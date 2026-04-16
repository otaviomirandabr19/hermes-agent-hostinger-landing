# Hermes Agent + Hostinger — landing page piloto

Landing page single-page em React + TypeScript + Vite, preparada para build estático e deploy em GitHub Pages.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
```

A saída fica em `dist/`.

## Deploy estático

- O `vite.config.ts` usa `base: './'` para facilitar publicação em GitHub Pages.
- Há um workflow pronto em `.github/workflows/deploy-pages.yml` para publicar via GitHub Pages quando o projeto estiver em um repositório GitHub com Pages habilitado.
- O arquivo `public/.nojekyll` evita interferência do Jekyll no deploy estático.
- Antes do deploy final, revisar em `src/content/landingContent.ts` apenas se houver mudança comercial ou editorial.
- O link afiliado ativo está configurado como `https://hostinger.com/otaviomiranda`.
- A copy aprovada e a base factual usada na landing também ficam em `shared/marketing/hermes-agent-hostinger-copy.md`.

### Publicação automática em GitHub Pages

1. Suba este projeto para um repositório GitHub.
2. Em `Settings > Pages`, deixe a origem controlada por GitHub Actions.
3. Garanta que a branch principal seja `main` ou ajuste o gatilho do workflow.
4. Faça push do projeto; o workflow `Deploy to GitHub Pages` vai buildar e publicar `dist/`.
5. A URL final será exibida no job `deploy` do Actions.

### Publicação manual

1. Rode `npm ci`.
2. Rode `npm run build`.
3. Publique o conteúdo de `dist/` no alvo estático escolhido.
4. Se o alvo for GitHub Pages sem workflow, publique os arquivos de `dist/` na branch/pasta configurada para Pages.

## Estrutura

- `src/content/landingContent.ts`: conteúdo e links, organizado para revisão.
- `src/App.tsx`: composição das seções.
- `src/styles.css`: tokens visuais, layout responsivo e animações.
