# maniEd Website - Design Style Guide

## Design Philosophy

### Visual Language
The maniEd brand embodies **modern financial sophistication** with a focus on trust, clarity, and technological innovation. The design language draws inspiration from leading fintech platforms like Stripe and PayPal while establishing a unique identity through thoughtful use of color, typography, and spatial relationships.

### Core Principles
- **Clarity over Complexity**: Every element serves a purpose
- **Trust through Transparency**: Open, honest design communication
- **Efficiency in Interaction**: Streamlined user journeys
- **Accessibility for All**: Inclusive design practices
- **Innovation with Purpose**: Technology that enhances, not overwhelms

## Color Palette

### Primary Colors
- **Teal (#12C2E9)**: Primary brand color, represents trust and stability
- **Blue (#1E9AD6)**: Secondary color, conveys professionalism and reliability
- **White (#F7FBFC)**: Clean background, ensures maximum readability
- **Gray (#94A7B3)**: Neutral tone for supporting elements and text

### Accent Colors
- **Success Green (#10B981)**: Positive actions, confirmations
- **Warning Amber (#F59E0B)**: Alerts, important notices
- **Error Red (#EF4444)**: Error states, critical information
- **Dark Navy (#1E293B)**: Headers, strong emphasis

### Gradient Applications
- **Primary Gradient**: Linear gradient from Teal to Blue (135deg)
- **Subtle Overlays**: 10-20% opacity gradients for depth
- **Button States**: Hover effects with gradient shifts

## Typography

### Primary Typeface: Inter
- **Headers**: Inter Bold (700) - Clean, modern, highly legible
- **Subheaders**: Inter SemiBold (600) - Strong hierarchy
- **Body Text**: Inter Regular (400) - Optimal readability
- **Captions**: Inter Medium (500) - Subtle emphasis

### Secondary Typeface: Roboto
- **UI Elements**: Roboto Regular - System-friendly
- **Code/Data**: Roboto Mono - Technical content

### Typography Scale
- **H1**: 3.5rem (56px) - Hero headlines
- **H2**: 2.5rem (40px) - Section headers
- **H3**: 1.875rem (30px) - Subsection headers
- **H4**: 1.25rem (20px) - Card titles
- **Body**: 1rem (16px) - Standard text
- **Small**: 0.875rem (14px) - Captions, metadata

## Visual Effects & Animation

### Core Libraries Integration
- **Anime.js**: Smooth micro-interactions and state transitions
- **ECharts.js**: Data visualization with consistent color theming
- **Splide.js**: Content carousels and testimonial sliders
- **p5.js**: Creative background effects and particle systems
- **Matter.js**: Physics-based interactions for engagement

### Animation Principles
- **Subtle Motion**: 200-400ms duration for most transitions
- **Easing**: Custom cubic-bezier curves for natural movement
- **Stagger Effects**: Sequential reveals for content groups
- **Hover States**: 3D tilt effects on cards, glow on buttons
- **Scroll Animations**: Progressive disclosure with intersection observer

### Background Effects
- **Particle Field**: Subtle floating particles using p5.js
- **Gradient Flow**: Animated background gradients
- **Geometric Patterns**: CSS-based decorative elements
- **Depth Layers**: Parallax scrolling for visual interest

## Layout & Spacing

### Grid System
- **Container**: Max-width 1200px, centered
- **Columns**: 12-column grid with 24px gutters
- **Breakpoints**: 
  - Mobile: 320px-768px
  - Tablet: 768px-1024px
  - Desktop: 1024px+

### Spacing Scale
- **XS**: 4px - Fine details
- **SM**: 8px - Component spacing
- **MD**: 16px - Standard spacing
- **LG**: 24px - Section spacing
- **XL**: 48px - Major section breaks
- **XXL**: 96px - Page section dividers

### Component Styling

#### Buttons
- **Primary**: Teal gradient background, white text, 12px border-radius
- **Secondary**: White background, teal border, teal text
- **Hover**: Subtle lift effect (2px transform), shadow increase
- **Padding**: 12px 24px for standard buttons

#### Cards
- **Background**: White with subtle shadow
- **Border**: 1px solid #E5E7EB
- **Border Radius**: 16px for modern feel
- **Hover**: Lift effect with increased shadow
- **Padding**: 24px internal spacing

#### Forms
- **Input Fields**: Clean borders, focus states with teal accent
- **Labels**: Positioned above inputs, medium weight
- **Validation**: Inline feedback with color-coded messaging
- **Spacing**: 16px between form elements

## Iconography

### Style Guidelines
- **Outline Style**: Consistent 2px stroke weight
- **Size Standards**: 16px, 24px, 32px, 48px
- **Color**: Inherit from parent or use brand colors
- **Source**: Heroicons or custom designed icons

### Usage Patterns
- **Feature Icons**: 32px with teal accent
- **UI Icons**: 16px-24px in gray tones
- **Social Icons**: 24px with brand colors
- **Status Icons**: Color-coded for meaning

## Imagery Guidelines

### Photography Style
- **Tone**: Clean, professional, diverse
- **Lighting**: Natural, well-lit scenes
- **Composition**: Uncluttered backgrounds
- **Color Treatment**: Slightly desaturated for consistency

### Illustration Style
- **Style**: Minimal, geometric, friendly
- **Colors**: Limited palette using brand colors
- **Usage**: Abstract concepts, process explanations
- **Format**: SVG for scalability

## Responsive Design

### Mobile-First Approach
- **Touch Targets**: Minimum 44px for accessibility
- **Typography**: Larger sizes for mobile readability
- **Spacing**: Increased padding on mobile devices
- **Navigation**: Collapsible menu with clear hierarchy

### Tablet Adaptations
- **Layout**: 2-column grids where appropriate
- **Spacing**: Moderate scaling from mobile
- **Interactions**: Touch-optimized hover states

### Desktop Enhancements
- **Layout**: Full 12-column grid utilization
- **Effects**: Enhanced hover animations
- **Spacing**: Generous whitespace usage
- **Interactions**: Advanced mouse interactions

## Accessibility Standards

### Color Contrast
- **Text on Background**: Minimum 4.5:1 ratio
- **Large Text**: Minimum 3:1 ratio
- **Interactive Elements**: Clear focus indicators

### Motion Preferences
- **Reduced Motion**: Respect user preferences
- **Alternative Indicators**: Non-motion feedback options
- **Performance**: Maintain 60fps animations

This design system ensures a cohesive, professional, and accessible user experience that builds trust and drives engagement with the maniEd brand.