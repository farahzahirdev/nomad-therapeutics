import { CRISIS_NOTE, DISCLAIMER } from "@/lib/constants";

export default function Compliance() {
  return (
    <aside className="nm-compliance" aria-label="Medical disclaimer">
      <div className="container-main space-y-3">
        <p>
          <strong className="font-semibold text-ink">Important:</strong> {DISCLAIMER}
        </p>
        <p>
          <strong className="font-semibold text-ink">Crisis support:</strong> {CRISIS_NOTE}
        </p>
      </div>
    </aside>
  );
}
