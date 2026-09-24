import Image from "next/image";
import { BookButton, QualifyButton, CallButton } from "@/components/CTAButtons";
import { IMAGES, PHONE_NUMBER } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="section-padding scroll-mt-28 bg-mist-2/50">
      <div className="container-main">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 overflow-hidden rounded-[1.25rem] border border-line shadow-[0_18px_50px_rgba(18,75,56,0.1)] lg:order-1">
            <Image
              src={IMAGES.finalCta}
              alt="Nomad Therapeutics: care that starts with a conversation"
              width={1024}
              height={537}
              quality={90}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="h-auto w-full"
            />
          </div>

          <div className="order-1 text-center lg:order-2 lg:text-left">
            <p className="section-label justify-center lg:justify-start">Start with a conversation</p>
            <h2 className="mt-3 text-3xl text-forest sm:text-4xl lg:text-5xl">
              Real relief can start at home
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Book a free consultation or find out if you qualify. A local Seattle team you can
              call or text, no pressure, just a clear next step.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <BookButton variant="primary" />
              <QualifyButton variant="outline" />
              <CallButton variant="outline" />
            </div>
            <p className="mt-5 text-sm text-muted">
              Prefer to talk first? Call or text {PHONE_NUMBER}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
