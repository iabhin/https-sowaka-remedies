"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-cream pt-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sage/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-3 font-script text-xl text-gold sm:text-2xl">
            The name of well-being
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-forest sm:text-5xl lg:text-6xl">
            Ancient Wisdom,
            <span className="block text-gold">Modern Wellness</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-forest/70 sm:text-lg">
            Discover premium Ayurvedic remedies crafted from nature&apos;s finest
            herbs. Restore balance, nurture vitality, and embrace holistic
            well-being with Sowaka Remedies.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/#products"
              className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-gold-dark hover:shadow-xl"
            >
              Explore Products
            </Link>
            <Link
              href="/#about"
              className="rounded-full border-2 border-forest/20 px-8 py-3.5 text-sm font-semibold text-forest transition-all hover:border-gold hover:text-gold"
            >
              Our Story
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gold/20 blur-2xl" />
            <Image
              src="/logo.png"
              alt="Sowaka Remedies - Ayurvedic Wellness"
              width={400}
              height={400}
              className="relative h-64 w-64 object-contain sm:h-80 sm:w-80 lg:h-96 lg:w-96"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
