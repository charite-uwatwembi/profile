# Charite Uwatwembi — Portfolio

Personal portfolio built with React, TypeScript, Vite, and Framer Motion, featuring Charite’s projects, experience, education, and writing.

## Development

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. For a production build:

```sh
npm run build
npm run preview
```

## Updating content

- `src/data/portfolio.ts` contains profile links, projects, experience, education, verified publication metadata, and the curated Medium article list. Publication details come from the AfricArXiv record; reading times were verified on the public Medium article pages.
- Blog posts are a verified snapshot of the Medium profile, not a live feed. Add future posts to the beginning of `articles`.
- The downloadable résumé is `public/Charite_Uwatwembi_Resume.pdf`.
- Each project opens an accessible detail dialog with its description, tags, and live link.
- La Perla Negra uses a screenshot of its public homepage. Its technologies and specific contribution have not been specified.
- The contact form follows the reference’s inset gray panel and field layout, with optional website and budget fields. It validates input and prepares a local email draft. Visitors review it and open their email client to send it; there is no message delivery backend.
- Primary actions, including “Read Paper,” share the rounded, glossy “Get in touch” button style.
- Global styles, card sizing, and responsive layouts are in `src/index.css`.

## Motion

The 1956 × 1100, 30 fps 3D bead video appears in the desktop hero. It was downloaded from the reference site's public video source, [hero-orb-video](https://www.tonylewismanzi.com/assets/_opt/hero-orb-video.8d547735bf.mp4), and is served locally from `public/videos/hero-beads-hq.mp4` (about 798 KB). The older 736 × 544 clip remains in `public/thumbnails/video.mp4` for reference.

Project and article cards respond with a spring tilt. On desktop, hovering a project changes the cursor to a green dot with a “View project” label; normal cursors remain available on touch screens and when motion is paused. The two expertise cards cover Web & App Development and AI & Machine Learning. Their previews can be shuffled, the process cards stack during scrolling, and experience rows expand to show more detail.

The pause button stops the video and continuous animations. System reduced motion preferences are respected automatically; on small screens the hero uses the reference’s compact layout and card tilt is disabled.

## Deployment

`npm run build` creates `dist/`, ready for static hosting. Before publishing, set `og:image` in `index.html` to an absolute URL on the production domain. Verify external project and scheduling links on the final domain.

## Image sources

The location thumbnail uses the public-domain [Rwanda map from the CIA World Factbook](https://commons.wikimedia.org/wiki/File:Rwanda_map_blank.png), downloaded unchanged to `public/thumbnails/rwanda-map.png`. CSS displays the map as a black silhouette on a gray background, with a centered green dot that gently pulses and respects the motion control. The dot is a visual center marker, not a precise geographic coordinate for Kigali. The two thumbnails beside “Software Engineer” use the original code and neural-network SVG illustrations.
