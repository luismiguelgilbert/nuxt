# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## How I fixed things:
How I fixed...

* Installing ShadCN Vue components:
- Added `"packageManager": "pnpm@10.14.0"` to [package.json]
- I created all missing folders described in [components.json]

* PWA like adding to homescreen:
- Added to app.vue
{ charset: 'utf-8' },
{ name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no, viewport-fit=contain' },
{ name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
{ name: 'mobile-web-app-capable', content: 'yes' },
{ name: 'apple-mobile-web-app-capable', content: 'yes' },
- Added public/site.webmanifest

AUTHENTICATION:
- I'm using Better Auth
- The CLI connects to the Postgres DB (defined here: src/lib/auth.ts) and creates the tables
- Currently, any person can sign up