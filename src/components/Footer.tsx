import Image from "next/image";
import Link from "next/link";
import {
  ADDRESS,
  EMAIL,
  EMAIL_HREF,
  LOGO_WHITE_URL,
  MAPS_URL,
  PHONE_HREF,
  PHONE_NUMBER,
  SERVICE_AREA,
  WEBSITE_URL,
} from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest pb-10 pt-14 text-white">
      <div className="container-main">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link href="/">
              <Image
                src={LOGO_WHITE_URL}
                alt="Nomad Therapeutics"
                width={200}
                height={44}
                className="h-10 w-auto"
                unoptimized
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Seattle&apos;s full-service interventional psychiatry practice, at home or in our
              Queen Anne clinic.
            </p>
            <p className="mt-3 text-sm text-white/60">{SERVICE_AREA}</p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-mint">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              <li>
                <a href={PHONE_HREF} className="font-medium text-white transition-colors hover:text-mint">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a href={EMAIL_HREF} className="transition-colors hover:text-mint">
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-mint"
                >
                  {ADDRESS}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-mint">Explore</p>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              <li>
                <a href="#how-it-works" className="transition-colors hover:text-mint">
                  How it works
                </a>
              </li>
              <li>
                <a href="#why-nomad" className="transition-colors hover:text-mint">
                  Why Nomad
                </a>
              </li>
              <li>
                <a href="#testimonials" className="transition-colors hover:text-mint">
                  Stories
                </a>
              </li>
              <li>
                <a href="#faq" className="transition-colors hover:text-mint">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href={WEBSITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-mint"
                >
                  nomadtherapeutics.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Nomad Therapeutics. All rights reserved.</p>
          <p>If you are in crisis, call or text 988.</p>
        </div>
      </div>
    </footer>
  );
}
