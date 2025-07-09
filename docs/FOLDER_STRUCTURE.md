# 📁 Folder Structure Documentation

This document provides a comprehensive overview of the BarberApp project folder structure, explaining the purpose and contents of each directory and file.

## 🌳 Project Tree

```
saas-landing-page/
├── 📁 .github/                      # GitHub configuration
│   ├── 📁 ISSUE_TEMPLATE/           # Issue templates
│   │   ├── 📄 bug_report.md         # Bug report template
│   │   └── 📄 feature_request.md    # Feature request template
│   └── 📄 pull_request_template.md  # Pull request template
├── 📁 app/                          # Next.js App Router (v13+)
│   ├── 📄 globals.css               # Global styles and CSS variables
│   ├── 📄 layout.tsx                # Root layout component
│   ├── 📄 page.tsx                  # Main landing page
│   ├── 📁 privacy-policy/           # Privacy policy route
│   │   └── 📄 page.tsx              # Privacy policy page component
│   ├── 📁 terms-of-service/         # Terms of service route
│   │   └── 📄 page.tsx              # Terms of service page component
│   └── 📁 cookie-policy/            # Cookie policy route
│       └── 📄 page.tsx              # Cookie policy page component
├── 📁 components/                   # React components
│   ├── 📄 brand-carousel.tsx        # Brand logos infinite carousel
│   ├── 📄 globe-demo.tsx            # 3D interactive globe component
│   ├── 📄 theme-provider.tsx        # Theme context provider
│   └── 📁 ui/                       # shadcn/ui component library
│       ├── 📄 accordion.tsx         # Collapsible content component
│       ├── 📄 alert-dialog.tsx      # Modal alert dialog
│       ├── 📄 alert.tsx             # Alert notification component
│       ├── 📄 aspect-ratio.tsx      # Aspect ratio container
│       ├── 📄 avatar.tsx            # User avatar component
│       ├── 📄 badge.tsx             # Badge/tag component
│       ├── 📄 breadcrumb.tsx        # Navigation breadcrumbs
│       ├── 📄 button.tsx            # Button component with variants
│       ├── 📄 calendar.tsx          # Date picker calendar
│       ├── 📄 card.tsx              # Card container component
│       ├── 📄 carousel.tsx          # Carousel/slider component
│       ├── 📄 chart.tsx             # Chart visualization component
│       ├── 📄 checkbox.tsx          # Checkbox input component
│       ├── 📄 collapsible.tsx       # Collapsible content
│       ├── 📄 command.tsx           # Command palette component
│       ├── 📄 context-menu.tsx      # Right-click context menu
│       ├── 📄 dialog.tsx            # Modal dialog component
│       ├── 📄 drawer.tsx            # Slide-out drawer component
│       ├── 📄 dropdown-menu.tsx     # Dropdown menu component
│       ├── 📄 form.tsx              # Form wrapper and validation
│       ├── 📄 globe.tsx             # Globe 3D component utilities
│       ├── 📄 hover-card.tsx        # Hover overlay card
│       ├── 📄 input-otp.tsx         # OTP input component
│       ├── 📄 input.tsx             # Text input component
│       ├── 📄 label.tsx             # Form label component
│       ├── 📄 menubar.tsx           # Menu bar component
│       ├── 📄 navigation-menu.tsx   # Navigation menu component
│       ├── 📄 pagination.tsx        # Pagination component
│       ├── 📄 popover.tsx           # Popover overlay component
│       ├── 📄 progress.tsx          # Progress bar component
│       ├── 📄 radio-group.tsx       # Radio button group
│       ├── 📄 resizable.tsx         # Resizable panels
│       ├── 📄 scroll-area.tsx       # Custom scrollable area
│       ├── 📄 select.tsx            # Select dropdown component
│       ├── 📄 separator.tsx         # Visual separator line
│       ├── 📄 sheet.tsx             # Sheet/modal component
│       ├── 📄 sidebar.tsx           # Sidebar navigation
│       ├── 📄 skeleton.tsx          # Loading skeleton component
│       ├── 📄 slider.tsx            # Range slider component
│       ├── 📄 sonner.tsx            # Toast notification system
│       ├── 📄 switch.tsx            # Toggle switch component
│       ├── 📄 table.tsx             # Data table component
│       ├── 📄 tabs.tsx              # Tab navigation component
│       ├── 📄 testimonials.tsx      # Testimonials carousel
│       ├── 📄 textarea.tsx          # Multi-line text input
│       ├── 📄 toast.tsx             # Toast notification component
│       ├── 📄 toaster.tsx           # Toast container
│       ├── 📄 toggle-group.tsx      # Toggle button group
│       ├── 📄 toggle.tsx            # Toggle button component
│       ├── 📄 tooltip.tsx           # Tooltip overlay component
│       ├── 📄 use-mobile.tsx        # Mobile detection hook
│       └── 📄 use-toast.ts          # Toast notification hook
├── 📁 data/                         # Static data files
│   └── 📄 globe.json               # Geographic data for 3D globe
├── 📁 docs/                         # Project documentation
│   ├── 📄 ARCHITECTURE.md           # Technical architecture documentation
│   └── 📄 FOLDER_STRUCTURE.md       # This file - folder structure guide
├── 📁 hooks/                        # Custom React hooks
│   ├── 📄 use-mobile.tsx            # Mobile device detection hook
│   └── 📄 use-toast.ts              # Toast notification management hook
├── 📁 lib/                          # Utility libraries and functions
│   └── 📄 utils.ts                  # Helper functions and utilities
├── 📁 public/                       # Static assets served by Next.js
│   ├── 📁 images/                   # Application screenshots and images
│   │   ├── 📄 calendario-barberia.png    # Barbershop calendar screenshot
│   │   ├── 📄 dashboard-comisiones.png   # Commission dashboard screenshot
│   │   └── 📄 dashboard-principal.png    # Main dashboard screenshot
│   ├── 📄 placeholder-logo.png      # Placeholder logo (PNG format)
│   ├── 📄 placeholder-logo.svg      # Placeholder logo (SVG format)
│   ├── 📄 placeholder-user.jpg      # User placeholder image
│   ├── 📄 placeholder.jpg           # General placeholder image (JPG)
│   └── 📄 placeholder.svg           # General placeholder image (SVG)
├── 📁 styles/                       # Legacy styles directory
│   └── 📄 globals.css               # Legacy global styles (if needed)
├── 📄 .gitignore                    # Git ignore patterns
├── 📄 CHANGELOG.md                  # Version history and changes
├── 📄 CONTRIBUTING.md               # Contribution guidelines
├── 📄 LICENSE                       # MIT license file
├── 📄 README.md                     # Main project documentation
├── 📄 components.json               # shadcn/ui configuration
├── 📄 next.config.mjs               # Next.js configuration
├── 📄 package.json                  # NPM dependencies and scripts
├── 📄 pnpm-lock.yaml               # PNPM lock file
├── 📄 postcss.config.mjs           # PostCSS configuration
├── 📄 tailwind.config.js           # Tailwind CSS configuration
└── 📄 tsconfig.json                # TypeScript configuration
```

## 📋 Directory Breakdown

### 🏗️ Core Application Structure

#### `/app` - Next.js App Router
- **Purpose**: Contains all routes and pages using Next.js App Router (v13+)
- **Key Files**:
  - `layout.tsx`: Root layout with providers and global setup
  - `page.tsx`: Main landing page component
  - `globals.css`: Global styles, CSS variables, and animations
- **Subdirectories**: Each folder represents a route (`/privacy-policy`, `/terms-of-service`, etc.)

#### `/components` - React Components
- **Purpose**: Reusable React components organized by complexity
- **Organization**:
  - **Root level**: Feature-specific components (carousel, globe, providers)
  - **`/ui`**: Base UI components from shadcn/ui library
- **Naming Convention**: PascalCase for component files (`BrandCarousel.tsx`)

#### `/hooks` - Custom React Hooks
- **Purpose**: Reusable logic encapsulated in custom hooks
- **Examples**:
  - `use-mobile.tsx`: Device detection and responsive behavior
  - `use-toast.ts`: Toast notification management
- **Naming Convention**: kebab-case with `use-` prefix

#### `/lib` - Utilities and Libraries
- **Purpose**: Helper functions, utilities, and third-party integrations
- **Key Files**:
  - `utils.ts`: Common utility functions (classname merging, formatting, etc.)
- **Future**: API clients, validation schemas, constants

### 📊 Data and Assets

#### `/data` - Static Data
- **Purpose**: JSON files and static data consumed by components
- **Examples**:
  - `globe.json`: Geographic coordinates and country data for 3D globe
- **Format**: JSON files for easy consumption and type safety

#### `/public` - Static Assets
- **Purpose**: Files served directly by Next.js without processing
- **Organization**:
  - `/images`: Screenshots, photos, and illustrations
  - Root level: Icons, favicons, and logos
- **Optimization**: Images are automatically optimized by Next.js Image component

### 📚 Documentation and Configuration

#### `/docs` - Project Documentation
- **Purpose**: Technical documentation beyond README
- **Files**:
  - `ARCHITECTURE.md`: System design and technical decisions
  - `FOLDER_STRUCTURE.md`: This file explaining project organization

#### `/.github` - GitHub Configuration
- **Purpose**: GitHub-specific templates and workflows
- **Contents**:
  - Issue templates for consistent bug reports and feature requests
  - Pull request template for code review process
  - Future: GitHub Actions workflows

#### Configuration Files (Root Level)
- **`package.json`**: Dependencies, scripts, and project metadata
- **`tsconfig.json`**: TypeScript compiler configuration
- **`tailwind.config.js`**: Tailwind CSS customization
- **`next.config.mjs`**: Next.js framework configuration
- **`components.json`**: shadcn/ui component library settings

## 🎯 Naming Conventions

### Files and Directories
- **Components**: PascalCase (`BrandCarousel.tsx`, `ThemeProvider.tsx`)
- **Hooks**: kebab-case with `use-` prefix (`use-mobile.tsx`)
- **Utilities**: kebab-case (`utils.ts`)
- **Pages**: kebab-case for directories, `page.tsx` for files
- **Types**: PascalCase with `.types.ts` suffix (future)

### Code Organization
- **Imports**: External dependencies first, then internal imports
- **Exports**: Named exports preferred, default exports for pages/components
- **Functions**: camelCase for functions, PascalCase for components

## 🔄 Data Flow Patterns

### Component Hierarchy
```
App Layout (layout.tsx)
├── Theme Provider (theme-provider.tsx)
├── Page Components (page.tsx files)
│   ├── Feature Components (brand-carousel.tsx, globe-demo.tsx)
│   └── UI Components (/ui directory)
└── Utility Functions (/lib/utils.ts)
```

### Import Patterns
```typescript
// External dependencies
import React from 'react';
import { motion } from 'framer-motion';

// Internal components
import { Button } from '@/components/ui/button';
import { BrandCarousel } from '@/components/brand-carousel';

// Utilities and hooks
import { cn } from '@/lib/utils';
import { useMobile } from '@/hooks/use-mobile';
```

## 🚀 Scalability Considerations

### Future Structure Additions
As the project grows, consider adding:

```
├── 📁 api/                          # API routes and server functions
├── 📁 types/                        # TypeScript type definitions
├── 📁 constants/                    # Application constants
├── 📁 contexts/                     # React context providers
├── 📁 store/                        # State management (if needed)
├── 📁 utils/                        # Expanded utility functions
├── 📁 tests/                        # Test files and utilities
├── 📁 scripts/                      # Build and deployment scripts
└── 📁 locales/                      # Internationalization files
```

### Component Organization Growth
For larger component libraries:

```
components/
├── 📁 forms/                        # Form-related components
├── 📁 layout/                       # Layout components
├── 📁 navigation/                   # Navigation components
├── 📁 marketing/                    # Marketing-specific components
└── 📁 ui/                          # Base UI components
```

## 🔍 File Purpose Quick Reference

| File/Directory | Purpose | When to Modify |
|----------------|---------|----------------|
| `app/page.tsx` | Main landing page | Adding new sections, content changes |
| `components/ui/` | Base UI components | Rarely (managed by shadcn/ui) |
| `app/globals.css` | Global styles | Theme changes, animations |
| `tailwind.config.js` | Tailwind configuration | New colors, fonts, breakpoints |
| `package.json` | Dependencies | Adding new packages |
| `next.config.mjs` | Next.js settings | Performance, build configuration |

## 🛠️ Development Workflow

### Adding New Features
1. **Create component** in `/components` (or `/components/ui` for base components)
2. **Add types** in the same file or separate `.types.ts` file
3. **Create hooks** in `/hooks` if logic is reusable
4. **Add utilities** in `/lib/utils.ts` if needed
5. **Update documentation** in `/docs` for significant changes

### Modifying Existing Features
1. **Locate component** using this structure guide
2. **Check dependencies** in related hooks and utilities
3. **Update types** if interfaces change
4. **Test across** different pages and components
5. **Update documentation** if behavior changes

---

This folder structure is designed for maintainability, scalability, and developer experience. As the project evolves, this structure can be adapted while maintaining clear organization principles. 