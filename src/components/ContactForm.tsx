"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

interface FormErrors {
  name?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.errors) {
          setErrors(data.errors);
        }
        setStatus("error");
        return;
      }

      setStatus("success");
      setName("");
      setPhone("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-script text-xl text-gold">Reach Out</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-forest sm:text-4xl">
              Contact Us
            </h2>
            <p className="mt-6 text-base leading-relaxed text-forest/70">
              Have a question about our products, need Ayurvedic guidance, or want
              to place a bulk order? We&apos;d love to hear from you. Fill out the
              form and our team will get back to you shortly.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-forest/70">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-gold">
                  ✉
                </span>
                <span className="text-sm">We typically respond within 24 hours</span>
              </div>
              <div className="flex items-center gap-3 text-forest/70">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-gold">
                  📱
                </span>
                <span className="text-sm">Or order directly via WhatsApp for faster service</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-sage/20 bg-cream/30 p-6 sm:p-8"
            noValidate
          >
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-forest">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-forest outline-none transition-colors focus:ring-2 focus:ring-gold/20 ${
                  errors.name ? "border-red-400 focus:border-red-400" : "border-sage/30 focus:border-gold"
                }`}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">{errors.name}</p>
              )}
            </div>

            <div className="mt-5">
              <label htmlFor="contact-phone" className="block text-sm font-medium text-forest">
                Phone
              </label>
              <input
                id="contact-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-forest outline-none transition-colors focus:ring-2 focus:ring-gold/20 ${
                  errors.phone ? "border-red-400 focus:border-red-400" : "border-sage/30 focus:border-gold"
                }`}
                placeholder="+91 98765 43210"
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
              )}
            </div>

            <div className="mt-5">
              <label htmlFor="contact-message" className="block text-sm font-medium text-forest">
                Message
              </label>
              <textarea
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className={`mt-2 w-full resize-none rounded-xl border px-4 py-3 text-sm text-forest outline-none transition-colors focus:ring-2 focus:ring-gold/20 ${
                  errors.message ? "border-red-400 focus:border-red-400" : "border-sage/30 focus:border-gold"
                }`}
                placeholder="How can we help you?"
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500">{errors.message}</p>
              )}
            </div>

            {status === "success" && (
              <p className="mt-4 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
                Thank you! Your message has been sent successfully. We&apos;ll be in touch soon.
              </p>
            )}

            {status === "error" && !Object.keys(errors).length && (
              <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                Something went wrong. Please try again later.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 w-full rounded-full bg-gold py-3.5 text-sm font-semibold text-white transition-all hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
