import { GOOGLE_REVIEWS_URL, TRUST_ITEMS } from "@/lib/constants";

/** Standalone credentials strip (below Why / above testimonials) */
export default function Credentials() {
  return (
    <section aria-label="Credentials and trust" className="nm-trust-creds py-14 sm:py-16">
      <div className="container-main">
        <ul className="nm-trust-grid list-none p-0">
          {TRUST_ITEMS.map((item) => (
            <li key={item.label} className="nm-trust-item">
              {item.label.includes("Google") ? (
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-inherit no-underline transition-opacity hover:opacity-90"
                >
                  <strong>{item.label}</strong>
                  <span>{item.detail}</span>
                </a>
              ) : (
                <>
                  <strong>{item.label}</strong>
                  <span>{item.detail}</span>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
