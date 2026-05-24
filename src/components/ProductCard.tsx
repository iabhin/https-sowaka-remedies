"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  onBuyNow?: (product: Product) => void;
  index?: number;
}

export default function ProductCard({
  product,
  onBuyNow,
  index = 0,
}: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-sage/20 bg-white shadow-sm transition-all hover:shadow-xl"
    >
      <Link href={`/products/${product.slug}`} className="relative block overflow-hidden">
        <div className="aspect-square overflow-hidden bg-cream">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        {product.price && (
          <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-white shadow-md">
            {product.price}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-serif text-lg font-semibold text-forest transition-colors group-hover:text-gold sm:text-xl">
            {product.name}
          </h3>
        </Link>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-forest/60">
          {product.shortDescription}
        </p>

        <div className="mt-5 flex gap-3">
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 rounded-full border border-forest/20 py-2.5 text-center text-sm font-medium text-forest transition-all hover:border-gold hover:text-gold"
          >
            View Details
          </Link>
          {onBuyNow && (
            <button
              type="button"
              onClick={() => onBuyNow(product)}
              className="flex-1 rounded-full bg-gold py-2.5 text-sm font-semibold text-white transition-all hover:bg-gold-dark"
            >
              Buy Now
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}
