import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductsSection from "@/components/ProductsSection";
import ContactForm from "@/components/ContactForm";
import { getFeaturedProducts } from "@/lib/products";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <Hero />
      <About />
      <ProductsSection products={featuredProducts} />
      <ContactForm />
    </>
  );
}
