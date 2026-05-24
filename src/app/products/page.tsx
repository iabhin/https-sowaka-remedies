import type { Metadata } from "next";
import ProductsSection from "@/components/ProductsSection";
import { getAllProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "All Products",
  description:
    "Browse our complete collection of premium Ayurvedic wellness products from Sowaka Remedies.",
};

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <div className="pt-24">
      <ProductsSection
        products={products}
        title="All Products"
        subtitle="Explore our complete range of Ayurvedic wellness remedies"
        showViewAll={false}
      />
    </div>
  );
}
