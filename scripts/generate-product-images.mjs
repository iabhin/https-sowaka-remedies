export function createProductSvg(label: string, color1: string, color2: string): string {
  const initials = label
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="400" y2="400">
      <stop offset="0%" stop-color="${color1}"/>
      <stop offset="100%" stop-color="${color2}"/>
    </linearGradient>
    <linearGradient id="leaf" x1="200" y1="80" x2="200" y2="320">
      <stop offset="0%" stop-color="#9BC53D"/>
      <stop offset="100%" stop-color="#2D5016"/>
    </linearGradient>
  </defs>
  <rect width="400" height="400" fill="url(#bg)" rx="24"/>
  <circle cx="200" cy="180" r="80" fill="url(#leaf)" opacity="0.3"/>
  <path d="M200 120 C160 160 140 200 200 280 C260 200 240 160 200 120Z" fill="url(#leaf)" opacity="0.6"/>
  <text x="200" y="340" text-anchor="middle" fill="#D4AF37" font-family="Georgia, serif" font-size="28" font-weight="bold">${initials}</text>
</svg>`;
}
