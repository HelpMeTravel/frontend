# HelpMeTravel Frontend

The HelpMeTravel frontend is a React application built with Vite. It uses React Router for navigation and Material UI for its component library and theme.

## Prerequisites

- Node.js `^20.19.0` or `>=22.12.0` (required by Vite)
- npm

## Getting started

From the repository root, install the frontend dependencies and start the development server:

```bash
cd frontend
npm ci
npm run dev
```

Open the local URL printed by Vite (by default, <http://localhost:5173>).

## Available scripts

Run these commands from the `frontend` directory:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot module replacement. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Serve the production build locally. Run `npm run build` first. |
| `npm run lint` | Check the frontend source with ESLint. |

## Project structure

```text
src/
  components/  Shared layout, navigation, and UI components
  pages/       Route-level pages
  router/      Application routes
  theme/       Material UI theme configuration
  assets/      Static assets imported by the application
```

## Development workflow

Before submitting changes, run the linter and production build:

```bash
npm run lint
npm run build
```
