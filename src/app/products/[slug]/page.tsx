import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getProductBySlug, getProductSlugs } from "@/lib/products";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-cream pt-24">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <Link
          href="/products"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-forest/60 transition-colors hover:text-gold"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Products
        </Link>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-2xl border border-sage/20 bg-white shadow-sm">
            <div className="aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={600}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

          <div>
            {product.price && (
              <span className="inline-block rounded-full bg-gold/10 px-4 py-1 text-sm font-semibold text-gold">
                {product.price}
              </span>
            )}
            <h1 className="mt-4 font-serif text-3xl font-bold text-forest sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-forest/70 sm:text-lg">
              {product.description}
            </p>

            <div className="mt-8">
              <WhatsAppButton product={product} className="w-full sm:w-auto" />
            </div>

            <div className="mt-10 space-y-8">
              <div>
                <h2 className="font-serif text-xl font-semibold text-forest">
                  Key Benefits
                </h2>
                <ul className="mt-3 space-y-2">
                  {product.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-sm text-forest/70"
                    >
                      <span className="mt-1 text-gold">✦</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-xl font-semibold text-forest">
                  Ingredients
                </h2>
                <ul className="mt-3 space-y-2">
                  {product.ingredients.map((ingredient) => (
                    <li
                      key={ingredient}
                      className="flex items-start gap-2 text-sm text-forest/70"
                    >
                      <span className="mt-1 text-sage">•</span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-xl font-semibold text-forest">
                  How to Use
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-forest/70">
                  {product.usage}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
