# TechBlog Frontend

Modern blog frontend built with React, Vite, TypeScript, and Tailwind CSS.

## Features

- Modern dark-first design with glassmorphism
- Framer Motion animations
- Responsive layout
- Category filtering & search
- Admin dashboard

## Quick Start

### With Docker

```bash
# Requires backend running at http://localhost:5000
docker-compose up -d
```

### Local Development

```bash
# Install dependencies
npm install

# Create .env file (copy from .env.example)
cp .env.example .env

# Run development server
npm run dev
```

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| VITE_API_URL | http://localhost:5000/api | Backend API URL |

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- TanStack Query
- React Router
- shadcn/ui

## Docker Commands

```bash
# Build and start
docker-compose up -d

# Stop
docker-compose down

# Rebuild
docker-compose build
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |