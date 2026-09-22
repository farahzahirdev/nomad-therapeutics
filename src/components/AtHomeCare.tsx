import Image from "next/image";
import { BookButton, QualifyButton } from "@/components/CTAButtons";
import { TREATMENT_POINTS } from "@/lib/constants";

export default function AtHomeCare() {
  return (
    <section id="at-home-care" className="section-padding scroll-mt-28">
      <div className="container-main">
        <div className="nm-section-copy mx-auto max-w-2xl text-center">
          <p className="section-label section-label-center">At-home IM ketamine</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem]">
            Treatment that comes to the place you feel most yourself
          </h2>
          <p className="text-lead mt-4">
            No waiting rooms. No unfamiliar clinic setting. A registered nurse brings supervised
            care to your home — so the treatment can fit the life you already have.
          </p>
        </div>

        <ul className="care-cards mt-12 list-none p-0">
          {TREATMENT_POINTS.map((item) => (
            <li key={item.step} className="care-card">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                quality={88}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="care-card-img"
              />
              <div className="care-card-fade" aria-hidden />
              <div className="care-card-body">
                <p className="care-card-step">{item.step}</p>
                <h3 className="care-card-title">{item.title}</h3>
                <p className="care-card-desc">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <BookButton variant="primary" />
          <QualifyButton variant="outline" />
        </div>
      </div>
    </section>
  );
}
