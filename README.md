# Sowaka Remedies

Modern, dynamic website for **Sowaka Remedies** — an independent Ayurvedic wellness brand.

**Live URL:** [sowaka-remedies.com](https://sowaka-remedies.com)

## Features

- Single-page home with Home, About, Products, and Contact sections
- Dynamic product catalog (JSON-based CMS, scalable to 10+ products)
- Individual product detail pages with SEO metadata
- WhatsApp ordering with pre-filled messages
- Quick-order modal on the home page
- Contact form with server-side validation
- Mobile-first responsive design
- Smooth animations via Framer Motion
- SEO: sitemap, robots.txt, Open Graph metadata

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number with country code (e.g. `919876543210`) |
| `NEXT_PUBLIC_SITE_URL` | Production site URL for SEO metadata |

## Managing Products

Products are stored in `data/products.json`. To add or edit a product:

1. Open `data/products.json`
2. Add a new object following the existing schema
3. Place the product image in `public/products/`
4. Set `"featured": true` to show on the home page

### Product Schema

```json
{
  "id": "unique-id",
  "slug": "url-friendly-name",
  "name": "Product Name",
  "shortDescription": "Brief description for cards",
  "description": "Full product description",
  "image": "/products/your-image.svg",
  "benefits": ["Benefit 1", "Benefit 2"],
  "ingredients": ["Ingredient 1"],
  "usage": "How to use instructions",
  "featured": true,
  "price": "₹499"
}
```

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── api/contact/      # Contact form API
│   ├── products/         # Product listing & detail pages
│   └── page.tsx          # Home page
├── components/           # React components
├── lib/                  # Utilities (products, WhatsApp, validation)
└── types/                # TypeScript types
data/
└── products.json         # Product CMS data
public/
├── logo.png              # Brand logo
└── products/             # Product images
```

## Deployment

Build for production:

```bash
npm run build
npm start
```

Deploy to Vercel, Netlify, or any Node.js hosting. Set environment variables in your hosting dashboard.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Zod](https://zod.dev/) (form validation)
