"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/types";
import ProductCard from "./ProductCard";
import QuickOrderModal from "./QuickOrderModal";

interface ProductsSectionProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
}

export default function ProductsSection({
  products,
  title = "Our Products",
  subtitle = "Curated Ayurvedic remedies for your wellness journey",
  showViewAll = true,
}: ProductsSectionProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <section id="products" className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="font-script text-xl text-gold">Wellness Collection</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-forest sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-forest/60 sm:text-lg">
              {subtitle}
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onBuyNow={setSelectedProduct}
              />
            ))}
          </div>

          {showViewAll && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full border-2 border-gold px-8 py-3 text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-white"
              >
                View All Products
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      {selectedProduct && (
        <QuickOrderModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
