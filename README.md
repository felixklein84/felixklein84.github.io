# Felix Klein — Personal Portfolio

Astro-based personal portfolio for `felixklein84.github.io`.

## Local setup

```bash
npm install
npm run dev
```

Open the local URL Astro prints in the terminal.

## Deploy on GitHub Pages

1. Create a public repository named exactly:

```text
felixklein84.github.io
```

2. Push this project:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/felixklein84/felixklein84.github.io.git
git push -u origin main
```

3. In GitHub: `Settings → Pages → Build and deployment → Source → GitHub Actions`.

The workflow in `.github/workflows/deploy.yml` builds and deploys the site automatically on every push to `main`.

## Edit content

- Main project data: `src/data/projects.ts`
- CV data: `src/data/cv.ts`
- Global styling: `src/styles/global.css`
- Pages: `src/pages/`

## CV PDF

Put your public CV PDF here:

```text
public/cv/Felix_Klein_CV.pdf
```

The CV page already links to this path. Avoid publishing private address or phone number.

## Notes

This repository is configured as a user site, so `astro.config.mjs` uses `site: 'https://felixklein84.github.io'` and does **not** set `base`. Only add `base` if you deploy from a normal project repository instead of `felixklein84.github.io`.
