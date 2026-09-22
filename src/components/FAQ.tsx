"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { FAQ_ITEMS, IMAGES } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="section-padding scroll-mt-28 bg-sand/60">
      <div className="container-main">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="nm-section-copy lg:sticky lg:top-28 lg:self-start">
            <p className="section-label">FAQ</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem]">
              Answers before you call
            </h2>
            <p className="text-lead mt-4">
              The questions almost everyone asks first — answered honestly.
            </p>

            <div className="mt-8 hidden overflow-hidden rounded-[1.25rem] border border-line shadow-[0_18px_50px_rgba(18,75,56,0.1)] lg:block">
              <Image
                src={IMAGES.faq}
                alt="Nomad Therapeutics — care that comes to you"
                width={640}
                height={267}
                quality={90}
                sizes="(max-width: 1024px) 100vw, 480px"
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="nm-faq">
            {FAQ_ITEMS.map((item, index) => {
              const open = openIndex === index;
              const panelId = `${baseId}-panel-${index}`;
              const buttonId = `${baseId}-btn-${index}`;

              return (
                <div key={item.question} className={`nm-faq-item${open ? " is-open" : ""}`}>
                  <button
                    type="button"
                    id={buttonId}
                    className="nm-faq-trigger"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : index)}
                  >
                    {item.question}
                    <span className="nm-faq-icon" aria-hidden>
                      <PlusIcon />
                    </span>
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="nm-faq-panel"
                  >
                    <div className="nm-faq-panel-inner">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path strokeLinecap="round" d="M12 5v14M5 12h14" />
    </svg>
  );
}
