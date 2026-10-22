# felixklein84.github.io

Personal site of Felix Klein: robotics, mathematics and the projects in between.
Built with [Astro](https://astro.build), deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Run locally

```bash
npm ci
npm run dev       # http://localhost:4321
npm run build     # type-check + static build into dist/
```

## Where the content lives

| What | File |
| --- | --- |
| Profile, "Now" list, experience, education, engagement, skills, books | `src/data/cv.ts` |
| Projects (problem, approach, result, media, links) | `src/data/projects.ts` |
| Start page layout | `src/pages/index.astro` |
| German services page for businesses | `src/pages/services.astro` |
| Printable CV (browser "Save as PDF") | `src/pages/cv.astro` |
| Design tokens and all styles | `src/styles/global.css` |
| Interactive microphone-array hero | `src/components/MicArray.astro` |
| SVG project diagrams | `src/components/Diagram.astro` |

Keep the **Now** list in `src/data/cv.ts` current and update its `asOf` date when you change it.

### Adding a project

Add an entry to `projects` in `src/data/projects.ts`. Set `featured: true` to show it with media on the start page.
`media` can be an image (`public/images/projects/…`), a looping video (`public/media/…`, MP4 with a poster JPG) or one of the
built-in diagrams. Convert GIFs to MP4 before adding them:

```bash
ffmpeg -i demo.gif -vf "scale=1200:-2,format=yuv420p" -movflags +faststart -c:v libx264 -crf 25 public/media/demo.mp4
```

## Privacy

Do not commit a CV with home address or phone number to `public/`. Everything in `public/` is world-readable,
and files stay in the git history after deletion.

## Design

- Type: Archivo (expanded width for headlines) and Source Serif 4 for reading text, both self-hosted via Fontsource,
  so no requests go to Google.
- Colour: paper `#f3f4f0`, ink `#17212b`, slate `#56616c`, vine `#4e6a14`, lime `#c9dc6a` (on ink only), amber `#f0a43a`
  (sound source only).
- Layout: margin headings on the left, content on the right; single column below 960 px.
- Motion: only the hero simulation animates, and it renders a static frame under `prefers-reduced-motion`.
