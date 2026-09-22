import Image from "next/image";
import { BookButton, QualifyButton } from "@/components/CTAButtons";
import { IMAGES, WHY_NOMAD } from "@/lib/constants";

export default function WhyNomad() {
  return (
    <section id="why-nomad" className="section-padding scroll-mt-28 bg-mist-2/70">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="nm-section-copy lg:sticky lg:top-28 lg:self-start">
            <p className="section-label">Why Nomad</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem]">
              Clinic-grade care that fits into a real life
            </h2>
            <p className="text-lead mt-5">
              We bring nurse-administered IM ketamine to your home, six sessions over three weeks,
              so getting better doesn&apos;t mean rearranging your life around clinic visits.
            </p>

            <div className="nm-media mt-8 hidden lg:block">
              <Image
                src={IMAGES.whyCare}
                alt="Nurse providing supervised ketamine care"
                fill
                quality={90}
                sizes="560px"
                className="object-cover object-[30%_center]"
              />
            </div>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <QualifyButton variant="primary" />
              <BookButton variant="outline" />
            </div>
          </div>

          <div className="why-list">
            {WHY_NOMAD.map((item, index) => (
              <article key={item.title} className="why-item">
                <p className="why-index">0{index + 1}</p>
                <h3 className="mt-2 text-xl text-forest sm:text-2xl">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="nm-media mt-10 lg:hidden">
          <Image
            src={IMAGES.whyCare}
            alt="Nurse providing supervised ketamine care"
            fill
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
