# Commit4Solutions – Blog CMS Setup

## Environment

1. Create a `.env` file in the project root with at least:

```bash
MONGODB_URI="your_mongodb_connection_string"
JWT_SECRET="a-long-random-secret-string"
```

## Install & run

```bash
npm install
npm run dev
```

The app runs on `http://localhost:3001` (or `3000` depending on your config).

## Admin access

- Admin login: `/admin/login`
- Default admin credentials (auto-created in MongoDB if no admin exists yet):

```text
email:    admin@gmail.com
password: admin
```

> Important: change this password after the first login using your own MongoDB tooling or a future admin profile screen.

## Blog CMS features

- Blog posts, categories, and contact leads stored in **MongoDB**
- Admin dashboard, blog list, blog editor, and category manager under `/admin`
- Rich text editor stores **sanitized HTML** in MongoDB
- Unique slug generation for blog posts
- Public blog listing at `/company/blog`
- Public blog details at `/company/blog/[slug]` with **server‑rendered content** and **dynamic SEO metadata** generated from the database.

# Commit4Solutions Web App

This is the frontend for the **Commit4Solutions** application, built with Vite, React, TypeScript, shadcn-ui, and Tailwind CSS.

## Getting started

1. **Install dependencies**

```sh
npm install
```

2. **Run the development server**

```sh
npm run dev
```

3. Open the printed URL in your browser (by default `http://localhost:8080`).

## Tech stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Branding

The primary logo is `commit4solutions-log.png` (in the `public` directory) and is used for the favicon and social preview images. All metadata is branded as **Commit4Solutions**.
