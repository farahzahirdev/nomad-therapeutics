import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding scroll-mt-28">
      <div className="container-main">
        <div className="nm-section-copy mx-auto max-w-2xl lg:mx-0">
          <p className="section-label">Patient stories</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem]">
            What people say after treatment
          </h2>
          <p className="text-lead mt-4">
            Safety, compassion, and results that feel personal — in the comfort of home.
          </p>
        </div>

        <div className="nm-quotes mt-14">
          {TESTIMONIALS.map((item) => (
            <figure key={item.author} className="nm-quote flex flex-col gap-4">
              <div className="nm-quote-mark" aria-hidden>
                “
              </div>
              <blockquote>{item.quote}</blockquote>
              <figcaption>
                <cite>{item.author}</cite>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
