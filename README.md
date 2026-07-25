# Alessandro Puddu — professional site

Static, privacy-friendly portfolio for a senior Unity engineer. The site uses
standalone HTML pages plus shared CSS and JavaScript; it has no framework,
build step, analytics or contact-form backend.

## Local preview

From the repository root:

```powershell
python -m http.server 8765
```

Then open `http://localhost:8765/`.

## Structure

- `index.html` — English home page
- `work-with-me/`, `services/`, `capabilities/`, `work/`, `about/`, `contact/`
- `insights/` — article index and standalone articles
- `it/sviluppatore-unity-freelance/` — Italian commercial landing page
- `assets/css/site.css` and `assets/js/site.js` — shared presentation and behavior
- `assets/fonts/` — self-hosted Inter and Source Serif 4 with OFL licences
- `assets/images/og-engineering.png` — shared 1200 × 630 social preview
- `AlessandroPuddu_CV.pdf` — public English CV

When adding a public page, give it a unique title, description and canonical
URL, then add it to `sitemap.xml`. Client work must remain NDA-safe: do not add
client names, private repository names, screenshots, distinctive metrics or
implementation details without explicit permission.
