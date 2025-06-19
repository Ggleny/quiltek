# Quiltek - Next.js E-Commerce Project

**Project Board**: [View GitHub Projects](https://github.com/Ggleny/quiltek/projects)

[![GitHub Project](https://img.shields.io/badge/GitHub-Project-blue)](https://github.com/Ggleny/quiltek/projects)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](http://localhost:6006)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black)](https://nextjs.org)

Modern e-commerce platform built with Next.js, featuring internationalization and component-driven development.

## 📐 Component Architecture

![Quiltek Component Diagram]
![Untitled-2025-06-18-2343](https://github.com/user-attachments/assets/615b3880-1f5e-4f9d-92ea-153c43d386c5)

**Key Components:**
- **Core UI**: `Button`, `Input`, `AvatarDropdown`, `Drawer`
- **Commerce**: `ProductCard`, `CartDrawer`, `Wishlist`
- **Layout**: `Header`, `Footer`, `DashboardLayout`
- **i18n**: Localized components with `next-intl`

[Edit Diagram](https://excalidraw.com/#json=MHAW0SM-gFrudrj4Gmyda,G76VehbQyel3RxwSgCV-hw) | [View Fullscreen](https://excalidraw.com/#json=MHAW0SM-gFrudrj4Gmyda,G76VehbQyel3RxwSgCV-hw)

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm/yarn/pnpm

### Installation
```bash
git clone https://github.com/Ggleny/quiltek.git
cd quiltek
npm install
```

### Development
```bash
# Next.js dev server
npm run dev

# Storybook
npm run storybook
```

**Access:**
- App: `http://localhost:3000`
- Storybook: `http://localhost:6006`

## 🛠 Tech Stack
- **Framework**: [Next.js 14](https://nextjs.org) (App Router)
- **i18n**: [next-intl](https://next-intl-docs.vercel.app)
- **UI**: [Tailwind CSS](https://tailwindcss.com) + [HeadlessUI](https://headlessui.com)
- **Component Docs**: [Storybook](https://storybook.js.org)

## 📚 Documentation

### Storybook Implementation
Our Storybook setup includes:
- Automated component documentation
- Internationalization support
- Dark mode testing
- Interactive playground

```bash
# Build Storybook
npm run build-storybook
```

### Key Configuration Files
| File | Purpose |
|------|---------|
| `.storybook/main.ts` | Storybook plugins/config |
| `.storybook/preview.ts` | Global decorators |
| `tailwind.config.js` | UI theme configuration |

## 🌍 Internationalization
Supported languages:
- English (default)
- Spanish

Add new locales in:
```text
locales/
  en.json
  es.json
```

## 🖼 UI Components
Example component structure:
```text
components/
  ui/          # Primitive components
  feature/    # E-commerce specific
  layout/      # App structure
```

## 🚀 Deployment
Deploy on [Vercel](https://vercel.com/new) with these environment variables:
```env
NEXT_PUBLIC_BASE_URL=your-domain.com
NEXT_PUBLIC_API_KEY=your-key
```

## 🤝 Contributing
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---


