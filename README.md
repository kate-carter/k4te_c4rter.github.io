# Neuroscience Markdown Site (GitHub Pages)

This repository is a **GitHub Pages-compatible** personal site inspired by [viridiano.com](https://viridiano.com/), with a dark, pastel color palette similar to RStudio's **Pastel On Dark** style.

The site is built with **Jekyll** so you can mostly edit simple Markdown files.

## What You Already Have

- Markdown home page and section pages
- Blog with post listing
- Dark pastel theme
- Font toggle button (`monospace -> sans -> serif`)
- Navigation structure similar to your friend's site

## Folder Structure (Important)

- `_config.yml`: site settings
- `_layouts/default.html`: page template (you can ignore most of this)
- `_data/navigation.yml`: nav links at top
- `assets/css/style.css`: colors and visual style
- `assets/js/site.js`: font toggle behavior
- `_posts/`: blog posts (Markdown files)
- `index.md`, `research.md`, `proj.md`, etc.: top-level sections

## Publish to GitHub Pages

## 1) Create repo on GitHub

Choose one:

- **User site** (recommended): repo name must be `YOUR_USERNAME.github.io`
- **Project site**: any repo name, site will be at `https://YOUR_USERNAME.github.io/REPO_NAME/`

## 2) Push this code

```bash
git init
git add .
git commit -m "Initial personal site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## 3) Enable GitHub Pages

In GitHub:

- Go to **Settings -> Pages**
- Under **Build and deployment**, set:
  - Source: `Deploy from a branch`
  - Branch: `main` and folder `/ (root)`
- Save

Wait 1-3 minutes, then visit your Pages URL.

## Local Preview (Optional but Useful)

If you want to test before pushing:

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://127.0.0.1:4000`.

## How to Write New Blog Posts

Create a file in `_posts/` with this naming format:

`YYYY-MM-DD-your-title.md`

Example:

`_posts/2026-04-01-neural-timescales.md`

Starter template:

```markdown
---
title: "Neural Timescales in Working Memory"
---

Your post text in Markdown.

## A section

- bullet
- bullet
```

Your post will automatically appear on `/blog/`.

## Project Timelines Under `proj`

Your `proj` page links to project-specific chronological post series:

- `/proj/red-hen/automated-co-speech-gesture/`
- `/proj/spins/fmri/`
- `/proj/spins/gemnet/`

To add a post to one of these timelines, include a `project` key in the post front matter:

```markdown
---
title: "Week 1 notes"
project: red-hen-automated-co-speech-gesture
---
```

Use one of these values:

- `red-hen-automated-co-speech-gesture`
- `spins-fmri`
- `spins-gemnet`

Posts are shown in chronological order (oldest to newest) on each project timeline page.

## How to Add or Edit Sections

Each section is just a Markdown file in the root directory:

- `research.md`
- `proj.md`
- `papers.md`
- `presentations.md`
- `social.md`
- `misc.md`

Edit title and permalink at the top:

```markdown
---
title: research
permalink: /research/
---
```

### Add a brand new section

1. Create a new Markdown file, for example `teaching.md`:

```markdown
---
title: teaching
permalink: /teaching/
---

## teaching

Course materials and lecture notes.
```

2. Add it to `_data/navigation.yml`:

```yml
- label: teaching
  url: /teaching/
```

## How Font Toggle Works

Button is in bottom area of each page:

- click once: sans-serif
- click again: serif
- click again: monospace

Your choice is saved in browser local storage.

If you want to remove this feature:

- delete button in `_layouts/default.html` (`id="fontToggle"`)
- remove script include in same file
- optionally delete `assets/js/site.js`

## How to Add Images in Markdown

1. Put image files in `assets/img/` (create folder if missing)
2. Insert in Markdown:

```markdown
![Alt text describing image](/assets/img/my-figure.png)
```

For side-by-side or fancy sizing, I can add a simple Markdown-friendly image helper later.

## How to Change Colors (Theme)

Edit variables in `assets/css/style.css`:

```css
:root {
  --bg: #1e1e1e;
  --text: #d4d4d4;
  --accent: #4ec9b0;
  --accent-2: #c586c0;
  --accent-3: #dcdcaa;
  --link: #9cdcfe;
}
```

## Replace Placeholder Content

Update these first:

- `index.md`: your bio, contact links, "now" section
- `social.md`: real profile links
- `papers.md`, `presentations.md`: real entries

## Notes About "No HTML" Workflow

You can do almost everything with only:

- Markdown files (`.md`)
- Navigation list (`_data/navigation.yml`)
- Optional color edits (`assets/css/style.css`)

If you tell me your exact page titles and sections, I can fill them in for you and keep everything Markdown-first.
