import Image from "next/image";
import { CONDITIONS, IMAGES } from "@/lib/constants";
import { QualifyButton, CallButton } from "@/components/CTAButtons";

export default function Conditions() {
  return (
    <section id="conditions" className="section-padding scroll-mt-28 bg-mist-2/60">
      <div className="container-main">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="nm-media order-1 lg:sticky lg:top-28">
            <Image
              src={IMAGES.forest}
              alt="A quiet forest path through the Pacific Northwest"
              fill
              quality={90}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover object-center"
            />
          </div>

          <div className="order-2">
            <div className="nm-section-copy">
              <p className="section-label">Conditions</p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem]">
                Care focused where relief has been hardest to find
              </h2>
              <p className="text-lead mt-4">
                At-home IM ketamine for adults navigating depression, PTSD, anxiety, and related
                challenges — after clinician evaluation.
              </p>
            </div>

            <ul className="conditions-grid mt-10 list-none p-0">
              {CONDITIONS.map((item) => (
                <li key={item.title} className="condition-row">
                  <h3 className="text-xl text-forest sm:text-2xl">{item.title}</h3>
                  <p className="mt-2 text-muted">{item.description}</p>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <QualifyButton variant="primary" />
              <CallButton variant="outline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
