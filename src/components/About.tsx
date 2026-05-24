"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Pure & Natural",
    description:
      "Every product is formulated with carefully sourced herbs, free from artificial additives.",
    icon: "🌿",
  },
  {
    title: "Ayurvedic Tradition",
    description:
      "Rooted in centuries of Ayurvedic wisdom, blended with modern quality standards.",
    icon: "☯",
  },
  {
    title: "Holistic Wellness",
    description:
      "We believe in treating the whole person — body, mind, and spirit — for lasting health.",
    icon: "✦",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-script text-xl text-gold">Who We Are</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-forest sm:text-4xl">
            About Sowaka Remedies
          </h2>
          <p className="mt-6 text-base leading-relaxed text-forest/70 sm:text-lg">
            Sowaka Remedies is an independent Ayurvedic wellness brand dedicated
            to bringing the healing power of nature to your daily life. Our name
            embodies well-being — &ldquo;Sowaka&rdquo; represents auspiciousness and
            holistic health in Sanskrit tradition.
          </p>
          <p className="mt-4 text-base leading-relaxed text-forest/70 sm:text-lg">
            Each formulation is crafted with precision, combining time-tested
            Ayurvedic recipes with rigorous quality control. From farm to bottle,
            we ensure purity, potency, and the authentic essence of herbal healing.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-2xl border border-sage/20 bg-cream/50 p-8 text-center transition-shadow hover:shadow-lg"
            >
              <span className="text-4xl" role="img" aria-hidden="true">
                {value.icon}
              </span>
              <h3 className="mt-4 font-serif text-xl font-semibold text-forest">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-forest/60">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
