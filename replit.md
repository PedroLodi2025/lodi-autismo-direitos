# Project Overview

This project is a professional website/portfolio that was migrated from Lovable to Replit. The application features:

- **Frontend**: React + TypeScript with Vite
- **Backend**: Express server with TypeScript
- **UI Framework**: shadcn/ui components with Tailwind CSS
- **Routing**: Currently using react-router-dom (needs migration to wouter per guidelines)
- **State Management**: TanStack Query for server state
- **Storage**: In-memory storage with interface for future database integration

## Architecture

### Frontend Structure
- `client/src/pages/Index.tsx` - Main landing page with sections
- `client/src/components/` - Reusable UI components
  - Header, HeroSection, ExperienceSection, BlogSection, ProcessSection, RightsSection, ContactSection, Footer, FloatingButton
- `client/src/components/ui/` - shadcn/ui component library

### Backend Structure
- `server/index.ts` - Express server setup
- `server/routes.ts` - API routes (currently minimal)
- `server/storage.ts` - Storage interface with in-memory implementation
- `server/vite.ts` - Vite dev server integration

### Shared
- `shared/schema.ts` - Drizzle schema definitions and types

## Migration Progress

Currently migrating from Lovable to Replit environment. See `.local/state/replit/agent/progress_tracker.md` for detailed progress.

## Recent Changes
- Added missing dependencies: react-router-dom, sonner
- Created project documentation
- Started migration process

## User Preferences
- Following fullstack_js development guidelines
- Prioritizing security and client/server separation
- Using modern web application patterns