# Public resume

`content/experience.ts` supplies the resume page, career timeline, and downloadable
PDF. `content/site.ts` supplies contact details and public URLs.

Regenerate `public/resume.pdf` with Node.js 22.6 or later and Python with ReportLab:

```sh
python3 scripts/generate-resume.py
```

The generator runs from any directory and writes to the existing `/resume.pdf`
download path. It creates a two-page Letter PDF with live contact and project
links. After changing content, render both pages and inspect spacing and page
breaks before publishing.

