import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-cream px-4 pt-24 text-center">
      <h1 className="font-serif text-6xl font-bold text-gold">404</h1>
      <p className="mt-4 font-serif text-2xl text-forest">Page Not Found</p>
      <p className="mt-2 text-forest/60">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-gold px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-gold-dark"
      >
        Back to Home
      </Link>
    </div>
  );
}
