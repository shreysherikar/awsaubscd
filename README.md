# AWS Student Community Day 2026 Website

Official website for **AWS Student Community Day 2026** at **Amity University Bengaluru**.

This project is built with Next.js (App Router), React, TypeScript, Tailwind CSS, and Radix UI-based components.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Radix UI components
- Lucide icons
- Vercel Analytics

## Features

- Single-page event website with smooth section-based navigation
- Dedicated sections for:
  - Hero
  - About
  - Swag
  - Speakers
  - Schedule
  - Quiz
  - Venue
  - Food
  - Committee
  - Sponsors
  - Past Events
  - FAQ
- Reusable UI components in `components/ui`
- Animated scroll/visual effects (including particle background)
- Responsive layout for desktop and mobile

## Project Structure

```text
app/
  layout.tsx         # Root layout, metadata, fonts, analytics
  page.tsx           # Main page that composes all sections
  globals.css        # Global styles

components/
  *.tsx              # Event page sections and shared components
  ui/                # Reusable Radix/shadcn-style UI primitives

hooks/
  use-scroll-animation.ts
  use-mobile.tsx
  use-toast.ts

lib/
  utils.ts

public/
  students/          # Static assets
```

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm (recommended, lockfile included)

### Install Dependencies

```bash
pnpm install
```

### Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
pnpm dev      # Start dev server (Next.js with Turbopack)
pnpm build    # Create production build
pnpm start    # Run production server
pnpm lint     # Run lint checks
```

## Customization Guide

- Edit page composition and section order in `app/page.tsx`
- Update SEO metadata in `app/layout.tsx`
- Update content in section files under `components/` (for example, `components/speakers-section.tsx`)
- Add/update static images in `public/`

## Deployment

This app is deployment-ready for Vercel.

Typical flow:

```bash
pnpm install
pnpm build
pnpm start
```

Or connect the repository to Vercel for automatic builds and preview deployments.

## Notes

- The app uses modern React/Next versions, so use a recent Node.js runtime.
- Keep dependencies and lockfile in sync by using `pnpm` for package operations.
