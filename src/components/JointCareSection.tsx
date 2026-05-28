import Image from "next/image";

export default function JointCareSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-script text-xl text-gold">Featured Wellness Line</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-forest sm:text-4xl">
            Synergistic Joint Care Solutions
          </h2>
          <p className="mt-4 text-base text-forest/70 sm:text-lg">
            Discover our focused joint wellness range with URAIC and CR-500,
            developed to support cartilage health, mobility, and daily comfort.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-sage/20 bg-cream shadow-sm">
          <Image
            src="/sections/joint-care-solutions.png"
            alt="Sowaka Remedies synergistic joint care product range"
            width={1024}
            height={1024}
            className="h-auto w-full object-cover"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
