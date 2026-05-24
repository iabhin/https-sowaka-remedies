import type { Product } from "@/types";

const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919876543210";

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function buildProductOrderMessage(product: Product): string {
  const priceLine = product.price ? `\nPrice: ${product.price}` : "";
  return `Hello Sowaka Remedies! 👋

I would like to order:

*${product.name}*
${product.shortDescription}${priceLine}

Please share availability and delivery details. Thank you!`;
}

export function buildQuickOrderMessage(
  productName: string,
  customerName?: string
): string {
  const greeting = customerName
    ? `Hello Sowaka Remedies! I'm ${customerName}.`
    : "Hello Sowaka Remedies!";

  return `${greeting} 👋

I'm interested in ordering:

*${productName}*

Please share availability and delivery details. Thank you!`;
}

export function openWhatsApp(message: string): void {
  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}
