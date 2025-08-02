# AGENT.md - HD sp Portfolio Project

## Commands
- **Build**: `npm run build` or `pnpm build`
- **Dev**: `npm run dev` or `pnpm dev` 
- **Lint**: `npm run lint` or `pnpm lint`
- **Start**: `npm run start` or `pnpm start`

## Architecture
- **Framework**: Next.js 14 with App Router (TypeScript)
- **UI Library**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **Components**: Component-based architecture with `/components` and `/components/ui`
- **Structure**: `/app` (pages), `/components` (reusable), `/lib` (utilities), `/hooks` (custom hooks)

## Code Style
- **Imports**: Use `@/` path alias for internal imports (`@/components`, `@/lib/utils`)
- **Components**: PascalCase, export default for main component
- **Props**: Define TypeScript interfaces (e.g., `ComponentNameProps`)
- **Styling**: Use `cn()` utility from `@/lib/utils` for conditional classes
- **Client Components**: Use `"use client"` directive when needed
- **Naming**: camelCase for variables/functions, PascalCase for components/types
