# AI Agent Instructions for Personal Website

## Project Overview
This is a **Next.js 15+ portfolio website** showcasing projects, experience, certifications, and blog posts. Built with TypeScript, React 19, Tailwind CSS, and server-side rendering. The site emphasizes interactive animations and section-based scroll-triggered visibility patterns.

**Key Tech Stack:**
- Next.js 15.1.3 (App Router with `"use client"` boundaries)
- React 19 + TypeScript (strict mode enabled)
- Tailwind CSS 3.4.17 for styling
- Next.js Font optimization (Montserrat, Open Sans)
- react-icons for SVG icons

## Architecture Patterns

### 1. **Layout & Client Wrapper Pattern**
- [LayoutWrapper.tsx](src/app/LayoutWrapper.tsx) is a `"use client"` component that wraps all pages with a loading screen
- Uses `usePathname()` to trigger animations on route changes
- Loading screen displays for minimum 2400ms with fade-out timing of 2900ms (important for animation sync)
- All page content is delayed until loading animation completes

### 2. **Section-Based Component Architecture**
Portfolio uses reusable section components with consistent structure:
- **Section Components** (e.g., ProjectSection, ExperienceSection, BlogSection, CertificationSection, TrackerSection)
- **Card Components** (ProjectCard, BlogCard, TrackerCard) consumed by sections
- Sections handle data arrays and map to cards; cards handle individual item rendering
- All section components use `"use client"` directive for Intersection Observer animations

### 3. **Intersection Observer Pattern for Scroll Animations**
Key pattern used across sections (see [ProjectSection.tsx](src/components/ProjectSection.tsx#L20-L45)):
```tsx
// Track visibility of elements with IntersectionObserver
const [visibleCards, setVisibleCards] = useState<{ [key: number]: boolean }>({});
const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const cardIndex = cardRefs.current.findIndex(card => card === entry.target);
                if (entry.isIntersecting && cardIndex !== -1) {
                    setVisibleCards(prev => ({ ...prev, [cardIndex]: true }));
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.3 }
    );
    // Observe refs and cleanup
}, []);
```
Apply this pattern when adding new animated sections.

### 4. **Responsive Layout Strategy**
- Mobile-first design with Tailwind breakpoints: `md:` (768px), `lg:` (1024px)
- Components use `flex-col` (mobile) and `md:flex-row` (desktop)
- Basis properties for flexible layouts: `basis-1/2`, `basis-5/12`, `basis-7/12`
- Container uses `mx-auto px-4` with `max-w-3xl` inner containers

### 5. **Font & Typography Pattern**
- Import fonts from `next/font/google` at component level (not globally)
- Each component that needs Montserrat imports and uses it locally
- Layout applies global font via `body` in [layout.tsx](src/app/layout.tsx)
- Example: `const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });`

## Component Patterns

### Card Components (ProjectCard, BlogCard, TrackerCard)
- Receive interface-typed props with required fields
- Handle presentation only; section components manage data
- Use Next.js `Image` component sparingly (ProjectCard uses native `<img>` tag)
- Apply consistent Tailwind styling: dark background `bg-[#33363B]`, shadow effects `shadow-gray-900/50`

### Navigation & Links
- Use `next/link` for all internal navigation
- Always apply `target="_blank" rel="noopener noreferrer"` for external links
- Hover effects use `:group-hover:` pattern in Navbar for underline animations

### Data Structure Example
Projects/experiences/blogs stored as inline arrays in section components:
```tsx
const projects = [
    { title: "...", description: "...", githubUrl: "...", youtubeUrl: "...", imageUrl: "..." }
];
```

## Styling Conventions

### Color Palette (from codebase analysis)
- Primary accent: `text-purple-400` / `bg-purple-400` (hover effects)
- Dark backgrounds: `bg-[#33363B]`, `bg-gray-900`
- Light text: `text-[#c3c7cb]`, `text-[#c084fc]` (gradient variants)
- Utility text: `text-gray-400`, `text-white`

### Common Tailwind Patterns
- Button hover: `hover:scale-105 hover:shadow-lg` (scale + shadow on interactive elements)
- Link hover: `group-hover:text-[#color]` (color transitions)
- Animations: `transition-all duration-300 ease-in-out` (standard timing)

## Development Workflow

### Available Scripts
```bash
npm run dev      # Start Next.js dev server (port 3000)
npm run build    # Production build
npm run start    # Run production build locally
npm lint         # Run ESLint
```

### Common Tasks
- **Add new portfolio section**: Create section component in `src/components/`, export data array, render cards, add `useClient` + IntersectionObserver
- **Update page content**: Edit hardcoded arrays in section components (no database)
- **Add new page**: Create file in `src/app/` directory (uses App Router)
- **Modify styling**: Extend theme in [tailwind.config.js](tailwind.config.js) or use inline Tailwind classes

## File Organization
- **`src/app/`**: Pages (page.tsx, layout.tsx) and API routes (api/*)
- **`src/components/`**: Reusable UI components (follow Section + Card pattern)
- **`public/`**: Static assets (project images, resume.pdf)
- **`src/app/globals.css`**: Global CSS utilities (imported by components as needed)

## Important Gotchas
1. **Client Component Boundary**: LayoutWrapper forces all content to be client-rendered; use "use client" for interactive components
2. **Loading Animation Timing**: 2400ms for spinner + 2900ms total delay must be respected (hardcoded, not configurable)
3. **Intersection Observer Threshold**: Set to 0.3 by default; adjust only if sections trigger too early/late
4. **Hardcoded Data**: All project/experience/blog data is inline in components (no data fetching layer)
5. **Font Weights**: Limited to 400/600/700; add to weight array if new weights needed

## Migration/Refactoring Guidance
- **Data Externalization**: If moving to JSON/database, maintain current prop interfaces on Card components
- **Section Reuse**: New sections should follow ProjectSection pattern exactly (observer setup, visibleCards state, ref arrays)
- **Styling Updates**: Use Tailwind CSS extending the theme rather than adding CSS-in-JS
