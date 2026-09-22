import Image from "next/image";
import { BookButton, CallButton } from "@/components/CTAButtons";
import { HOW_IT_WORKS, IMAGES } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding scroll-mt-28">
      <div className="container-main">
        <div className="how-split">
          <div className="how-split-copy">
            <div className="nm-section-copy">
              <p className="section-label">How it works</p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem]">
                From first call to first session — in days, not months
              </h2>
              <p className="text-lead mt-4">
                Three clear steps. No referral required. Most patients begin at-home care within a
                week.
              </p>
            </div>

            <ol className="how-steps mt-10 list-none p-0">
              {HOW_IT_WORKS.map((item) => (
                <li key={item.step} className="how-step">
                  <p className="nm-step-num">{item.step}</p>
                  <h3 className="text-xl text-forest sm:text-2xl">{item.title}</h3>
                  <p className="mt-2 max-w-md text-muted">{item.description}</p>
                </li>
              ))}
            </ol>

            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <BookButton variant="primary" />
              <CallButton variant="outline" />
            </div>
          </div>

          <div className="how-split-media">
            <div className="how-split-media-frame">
              <Image
                src={IMAGES.howItWorks}
                alt="Nomad nurse welcomed for an at-home ketamine visit"
                fill
                quality={90}
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
