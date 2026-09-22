import Image from "next/image";
import { TEAM_LEADERS, TEAM_NURSES } from "@/lib/constants";

export default function Providers() {
  return (
    <section id="providers" className="nm-providers section-padding scroll-mt-28">
      <div className="container-main">
        <div className="nm-section-copy mx-auto max-w-2xl text-center">
          <p className="section-label section-label-center">Providers</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem]">The people behind Nomad</h2>
          <p className="text-lead mt-4">
            Clinicians and founders who built care that comes to you — and the nurses who make every
            home visit feel safe.
          </p>
        </div>

        <ul className="nm-provider-grid mt-14 list-none p-0">
          {TEAM_LEADERS.map((person, index) => (
            <li key={person.name} style={{ ["--i" as string]: index }}>
              <a
                href={person.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nm-provider-tile"
              >
                <div className="nm-provider-media">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    quality={92}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
                    className="object-cover"
                    style={{ objectPosition: person.objectPosition }}
                  />
                </div>
                <div className="nm-provider-meta">
                  <strong>{person.name}</strong>
                  <span>{person.role}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className="nm-nurses-block mt-16 sm:mt-20">
          <div className="nm-section-copy mx-auto max-w-xl text-center">
            <p className="section-label section-label-center">At-home care</p>
            <h3 className="mt-3 text-2xl text-forest sm:text-3xl">
              Registered nurses who come to you
            </h3>
            <p className="text-lead mt-3">
              Every IM ketamine session is nurse-administered — they stay for the full visit.
            </p>
          </div>

          <ul className="nm-nurse-grid mt-10 list-none p-0">
            {TEAM_NURSES.map((person, index) => (
              <li key={person.name} style={{ ["--i" as string]: index }}>
                <a
                  href={person.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nm-nurse-tile"
                >
                  <div className="nm-nurse-media">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      quality={92}
                      sizes="(max-width: 640px) 40vw, 200px"
                      className="object-cover object-[center_18%]"
                    />
                  </div>
                  <strong>{person.name}</strong>
                  <span>{person.role}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
