# Merrily Plan — Marketing Website

The SEO-focused marketing website for [Merrily Plan](https://merrilyplan.com), the all-in-one wedding planning app.

## Architecture

| Repo | Domain | Purpose |
|------|--------|---------|
| `wedding-planner-marketing` | `merrilyplan.com` | Astro marketing site (SEO, blog, landing pages) |
| `wedding-planner` | `app.merrilyplan.com` | React wedding planner app |

## Tech Stack

- **Framework**: [Astro 5](https://astro.build) (static site generation)
- **CSS**: [Tailwind CSS 3](https://tailwindcss.com) with Typography plugin
- **Content**: Astro Content Collections (Markdown blog posts)
- **SEO**: Sitemap, JSON-LD structured data, Open Graph, Twitter Cards
- **Deployment**: GitHub Pages via GitHub Actions

## URL Structure

```
merrilyplan.com/                              -- Homepage
merrilyplan.com/pricing                       -- Pricing (Free vs Pro)
merrilyplan.com/contact                       -- Contact form
merrilyplan.com/blog/                         -- Blog index
merrilyplan.com/blog/[slug]                   -- Individual blog posts
merrilyplan.com/sitemap-index.xml             -- Auto-generated sitemap
```

## Local Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # builds to ./dist
npm run preview   # preview built site
```

## Adding a Blog Post

Create a new `.md` file in `src/content/blog/`:

```md
---
title: "Your Post Title"
description: "SEO meta description (150-160 chars)"
date: "2025-03-15"
author: "Merrily Plan Team"
tags: ["planning", "tips"]
---

Your content here...
```

## DNS Setup (GitHub Pages)

### merrilyplan.com (marketing site)
```
Type: A     Name: @    Value: 185.199.108.153
Type: A     Name: @    Value: 185.199.109.153
Type: A     Name: @    Value: 185.199.110.153
Type: A     Name: @    Value: 185.199.111.153
```

### app.merrilyplan.com (wedding app)
```
Type: CNAME  Name: app  Value: shahriarspace.github.io
```

## SEO Checklist

- [ ] Submit sitemap to Google Search Console
- [ ] Verify domain in Google Search Console
- [ ] Add analytics (Google Analytics or Plausible)
- [ ] Write 1 blog post per week targeting wedding keywords
- [ ] Build backlinks from wedding directories
