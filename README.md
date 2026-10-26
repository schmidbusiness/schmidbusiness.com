# schmidbusiness.com

Website von Schmid Business Solutions (Ivan Schmid), gebaut mit [Astro](https://astro.build).

## Lokal entwickeln

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # statische Seite in dist/
```

## Aufbau

- `src/i18n.ts` – alle Texte auf Deutsch und Englisch sowie die Seitenpfade beider Sprachen
- `src/components/Home.astro` – Startseite (Titel, Bild, Kurztext, Kontaktformular), für beide Sprachen
- `src/pages/` – Deutsch: `/`, `/impressum/`, `/datenschutz/`, `/agb/` · Englisch: `/en/`, `/en/imprint/`, `/en/privacy/`, `/en/terms/`
- `src/components/Logo.astro` – Logo als eingebettete Vektorgrafik (aus `public/logo.svg`) mit Hover-Effekt
- `src/layouts/Layout.astro` – Kopfzeile, Footer mit Firmenangaben, globale Styles
- `src/components/ContactForm.astro` – Kontaktformular, Versand über EmailJS
- `public/` – Bilder und Icons

## Deployment

`npm run build` erzeugt die fertige Seite im Ordner `dist/`. Dessen Inhalt wird beim Hoster ins
Web-Verzeichnis (z. B. `public_html`) hochgeladen. Die GitHub Action prüft bei jedem Push, ob der
Build durchläuft.
