import Image from "next/image";
import { CallButton, QualifyButton } from "@/components/CTAButtons";
import { IMAGES, LOCATIONS, SERVICE_AREA } from "@/lib/constants";

export default function ServiceArea() {
  return (
    <section id="service-area" className="service-area scroll-mt-28">
      <div className="service-area-bg" aria-hidden>
        <Image
          src={IMAGES.faq}
          alt=""
          fill
          quality={90}
          sizes="100vw"
          className="service-area-img object-cover"
        />
      </div>

      <div className="container-main relative z-10 py-12 sm:py-14 lg:py-16">
        <div className="service-area-panel">
          <p className="service-area-eyebrow">Greater Seattle</p>
          <h2 className="service-area-title mt-3 text-3xl sm:text-4xl lg:text-[2.65rem]">
            Local care across the region — at home or in Queen Anne
          </h2>
          <p className="service-area-lede mt-4 text-lg leading-relaxed">{SERVICE_AREA}</p>

          <ul className="locations-grid mt-6 list-none p-0">
            {LOCATIONS.map((loc) => (
              <li key={loc.name} className="location-item">
                <p className="location-name">{loc.name}</p>
                <p className="location-note">{loc.note}</p>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center min-[1025px]:justify-start">
            <QualifyButton variant="primary" />
            <CallButton variant="outline" />
          </div>
        </div>
      </div>
    </section>
  );
}
