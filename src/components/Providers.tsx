"use client";

import Image from "next/image";
import { useState } from "react";
import { TEAM_LEADERS, TEAM_NURSES } from "@/lib/constants";

export default function Providers() {
  const [leaderIndex, setLeaderIndex] = useState(0);
  const [nurseIndex, setNurseIndex] = useState(0);

  const leader = TEAM_LEADERS[leaderIndex];
  const nurse = TEAM_NURSES[nurseIndex];

  const prevLeader = () =>
    setLeaderIndex((i) => (i === 0 ? TEAM_LEADERS.length - 1 : i - 1));
  const nextLeader = () =>
    setLeaderIndex((i) => (i === TEAM_LEADERS.length - 1 ? 0 : i + 1));
  const prevNurse = () =>
    setNurseIndex((i) => (i === 0 ? TEAM_NURSES.length - 1 : i - 1));
  const nextNurse = () =>
    setNurseIndex((i) => (i === TEAM_NURSES.length - 1 ? 0 : i + 1));

  return (
    <section id="providers" className="nm-providers section-padding scroll-mt-28">
      <div className="container-main">
        <div className="nm-section-copy mx-auto max-w-2xl text-center">
          <p className="section-label section-label-center">Providers</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem]">The people behind Nomad</h2>
          <p className="text-lead mt-4">
            Clinicians and founders who built care that comes to you, and the nurses who make every
            home visit feel safe.
          </p>
        </div>

        {/* Mobile carousel: one provider at a time */}
        <div className="nm-provider-carousel mt-14">
          <a
            href={leader.href}
            target="_blank"
            rel="noopener noreferrer"
            className="nm-provider-tile"
          >
            <div className="nm-provider-media">
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                quality={92}
                sizes="90vw"
                className="object-cover"
                style={{ objectPosition: leader.objectPosition }}
                priority={false}
              />
            </div>
            <div className="nm-provider-meta">
              <strong>{leader.name}</strong>
              <span>{leader.role}</span>
            </div>
          </a>

          <div className="nm-carousel-controls">
            <button
              type="button"
              className="nm-carousel-btn"
              onClick={prevLeader}
              aria-label="Previous provider"
            >
              <ChevronLeft />
            </button>
            <div className="nm-carousel-dots" role="tablist" aria-label="Providers">
              {TEAM_LEADERS.map((person, i) => (
                <button
                  key={person.name}
                  type="button"
                  role="tab"
                  aria-selected={i === leaderIndex}
                  aria-label={`Show ${person.name}`}
                  className={`nm-carousel-dot${i === leaderIndex ? " is-active" : ""}`}
                  onClick={() => setLeaderIndex(i)}
                />
              ))}
            </div>
            <button
              type="button"
              className="nm-carousel-btn"
              onClick={nextLeader}
              aria-label="Next provider"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Desktop / tablet grid */}
        <ul className="nm-provider-grid mt-14">
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
                    sizes="(max-width: 1024px) 33vw, 280px"
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
              Every IM ketamine session is nurse-administered, they stay for the full visit.
            </p>
          </div>

          {/* Mobile nurse carousel */}
          <div className="nm-nurse-carousel mt-10">
            <a
              href={nurse.href}
              target="_blank"
              rel="noopener noreferrer"
              className="nm-nurse-tile nm-nurse-tile-solo"
            >
              <div className="nm-nurse-media">
                <Image
                  src={nurse.image}
                  alt={nurse.name}
                  fill
                  quality={92}
                  sizes="200px"
                  className="object-cover object-[center_18%]"
                />
              </div>
              <strong>{nurse.name}</strong>
              <span>{nurse.role}</span>
            </a>

            <div className="nm-carousel-controls">
              <button
                type="button"
                className="nm-carousel-btn"
                onClick={prevNurse}
                aria-label="Previous nurse"
              >
                <ChevronLeft />
              </button>
              <div className="nm-carousel-dots" role="tablist" aria-label="Nurses">
                {TEAM_NURSES.map((person, i) => (
                  <button
                    key={person.name}
                    type="button"
                    role="tab"
                    aria-selected={i === nurseIndex}
                    aria-label={`Show ${person.name}`}
                    className={`nm-carousel-dot${i === nurseIndex ? " is-active" : ""}`}
                    onClick={() => setNurseIndex(i)}
                  />
                ))}
              </div>
              <button
                type="button"
                className="nm-carousel-btn"
                onClick={nextNurse}
                aria-label="Next nurse"
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          <ul className="nm-nurse-grid mt-10">
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
                      sizes="200px"
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

function ChevronLeft() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-5 w-5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-5 w-5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
    </svg>
  );
}
