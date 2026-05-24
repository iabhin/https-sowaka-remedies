import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Sowaka Remedies"
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
              />
              <div>
                <p className="font-serif text-xl font-bold text-gold">SOWAKA</p>
                <p className="font-serif text-sm text-gold/80">Remedies</p>
              </div>
            </div>
            <p className="mt-4 font-script text-lg text-gold/90">
              The name of well-being
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Authentic Ayurvedic wellness products crafted with care, tradition,
              and the wisdom of nature.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-gold">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/#home" className="transition-colors hover:text-gold">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="transition-colors hover:text-gold">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#products" className="transition-colors hover:text-gold">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/products" className="transition-colors hover:text-gold">
                  Shop All
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="transition-colors hover:text-gold">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-gold">
              Connect
            </h3>
            <p className="text-sm text-white/70">
              Have questions about our products or need guidance on Ayurvedic wellness?
            </p>
            <Link
              href="/#contact"
              className="mt-4 inline-block rounded-full border border-gold/40 px-6 py-2 text-sm font-medium text-gold transition-all hover:bg-gold hover:text-forest"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          <p>&copy; {year} Sowaka Remedies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
