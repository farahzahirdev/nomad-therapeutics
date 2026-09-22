import Image from "next/image";
import TrustBar from "@/components/TrustBar";
import { FORM_SECTION_ID, IMAGES } from "@/lib/constants";

const FEATURES = [
  { title: "In-Home Nurse Care", icon: "home" as const },
  { title: "Physician Oversight", icon: "shield" as const },
  { title: "Therapist Coordination", icon: "people" as const },
  {
    title: "Fast Start",
    detail: "Most begin within a week",
    icon: "clock" as const,
  },
] as const;

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="nm-hero">
      <div className="nm-hero-bg" aria-hidden>
        <Image
          src={IMAGES.hero}
          alt=""
          fill
          priority
          quality={92}
          sizes="100vw"
          className="nm-hero-img"
        />
      </div>
      <div className="nm-hero-wash" aria-hidden />

      <div className="nm-hero-inner">
        <div className="nm-hero-copy">
          <p className="nm-hero-kicker">
            IM Ketamine Therapy
            <span className="nm-hero-kicker-line" aria-hidden />
          </p>

          <h1 id="hero-heading" className="nm-hero-title">
            At-Home Ketamine Therapy,{" "}
            <span className="nm-hero-title-accent">Delivered With Care.</span>
          </h1>

          <p className="nm-hero-lede">
            Safe, nurse-administered IM ketamine for treatment-resistant depression, PTSD and
            anxiety — in the comfort of your home.
          </p>

          <ul className="nm-hero-features" aria-label="Care highlights">
            {FEATURES.map((item) => (
              <li key={item.title} className="nm-hero-feature">
                <FeatureIcon name={item.icon} />
                <span>
                  <span className="nm-hero-feature-title">{item.title}</span>
                  {"detail" in item ? (
                    <span className="nm-hero-feature-detail">{item.detail}</span>
                  ) : null}
                </span>
              </li>
            ))}
          </ul>

          <div className="nm-hero-actions">
            <a href={`#${FORM_SECTION_ID}`} className="nm-hero-btn-primary">
              <CalendarIcon />
              Book Your Free Consultation
              <ArrowIcon />
            </a>
            <a href={`#${FORM_SECTION_ID}`} className="nm-hero-btn-secondary">
              Find Out If You Qualify
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="nm-hero-bottom">
        <div className="nm-hero-bottom-inner">
          <TrustBar />
        </div>
      </div>
    </section>
  );
}

function FeatureIcon({ name }: { name: "home" | "shield" | "people" | "clock" }) {
  const className = "nm-hero-feature-icon";
  if (name === "home") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5 12 3l9 7.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9.5z" />
      </svg>
    );
  }
  if (name === "shield") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
      </svg>
    );
  }
  if (name === "people") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 19v-1a3 3 0 00-3-3H7a3 3 0 00-3 3v1" />
        <circle cx="10" cy="8" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 19v-1a3 3 0 00-2.2-2.9M15.5 5.1a3 3 0 010 5.8" />
      </svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path strokeLinecap="round" d="M12 8v4l2.5 1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 5l1.5 1.5M5 5L3.5 6.5" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4 shrink-0" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path strokeLinecap="round" d="M8 3.5V7M16 3.5V7M3.5 10h17" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
