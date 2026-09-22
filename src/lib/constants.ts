/** Bump when replacing public/images so caches refresh */
const IMG_V = "20260922j";

const img = (publicPath: string) => `${publicPath}?v=${IMG_V}`;

export const LOGO_URL = img("/images/logo-green.jpeg");
export const LOGO_WHITE_URL = img("/images/logo-white.webp");

export const IMAGES = {
  hero: img("/images/new-hero.jpg"),
  heroAlt: img("/images/hero.jpg"),
  howItWorks: img("/images/nurse-home.jpg"),
  whyCare: img("/images/nurse-care.jpg"),
  forest: img("/images/forest-path.jpg"),
  seattle: img("/images/seattle-kayak.jpg"),
  overlook: img("/images/overlook.jpg"),
  faq: img("/images/faq.jpg"),
  finalCta: img("/images/final-cta.jpg"),
} as const;

/** Advertising / tracking number from landing page brief */
export const PHONE_NUMBER = "(425) 675-8754";
export const PHONE_HREF = "tel:+14256758754";

export const ADDRESS = "200 First Ave W, Suite 403, Seattle, WA 98119";
export const HOURS = "Monday-Friday, 9 AM - 5 PM";
export const EMAIL = "info@nomadtherapeutics.org";
export const EMAIL_HREF = "mailto:info@nomadtherapeutics.org";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=200+First+Ave+W+Suite+403,+Seattle,+WA+98119";
export const WEBSITE_URL = "https://www.nomadtherapeutics.org";
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=Nomad+Therapeutics+Seattle";

export const SERVICE_AREA =
  "King, Pierce, Kitsap & Thurston counties · Queen Anne clinic + at-home visits";

export const FORM_ID = "b8WykJojCfh9YDGKQIa9";
export const FORM_IFRAME_ID = "inline-b8WykJojCfh9YDGKQIa9";
export const FORM_SECTION_ID = "qualify-form";
export const BOOKING_SECTION_ID = "book";

export const HERO_TRUST_ITEMS = [
  { title: "5.0 on Google", icon: "star" as const },
  { title: "Nurse-attended at home", icon: "home" as const },
  { title: "Start within a week", icon: "clock" as const },
  { title: "No referral needed", icon: "check" as const },
] as const;

export const CONDITIONS = [
  {
    title: "Treatment-resistant depression",
    description: "When standard antidepressants haven’t brought enough relief.",
  },
  {
    title: "PTSD",
    description: "Support when trauma symptoms still shape daily life.",
  },
  {
    title: "Anxiety",
    description: "For anxiety that hasn’t eased enough with medication or therapy alone.",
  },
  {
    title: "Suicidal thoughts",
    description: "Evaluated carefully with a clinician, and with crisis support always available.",
  },
] as const;

export const TREATMENT_POINTS = [
  {
    step: "01",
    title: "Six sessions over three weeks",
    description: "A structured IM ketamine series designed for momentum, not months of waiting.",
    image: IMAGES.overlook,
    imageAlt: "Mountain overlook in the Pacific Northwest",
  },
  {
    step: "02",
    title: "A registered nurse stays with you",
    description: "They come to your home, administer treatment, and remain for the full session.",
    image: IMAGES.forest,
    imageAlt: "Forest path through the Pacific Northwest",
  },
  {
    step: "03",
    title: "Physician oversight throughout",
    description: "Your plan is clinically supervised. Vitals are monitored from start to finish.",
    image: IMAGES.seattle,
    imageAlt: "Seattle waterfront at dawn",
  },
] as const;

export const LOCATIONS = [
  { name: "Seattle & Shoreline", note: "At-home visits" },
  { name: "Bellevue", note: "At-home visits" },
  { name: "Tacoma / Pierce", note: "At-home visits" },
  { name: "Kitsap", note: "At-home visits" },
  { name: "Olympia / Thurston", note: "At-home visits" },
  { name: "Queen Anne clinic", note: "Seattle clinic" },
] as const;

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Free consultation call",
    description:
      "A short conversation about what you’ve tried and what you want to feel different. No commitment, just clarity.",
  },
  {
    step: "02",
    title: "Clinical evaluation",
    description:
      "A clinician reviews your history, medications, and safety. We’ll recommend a plan or tell you honestly if we’re not the right fit.",
  },
  {
    step: "03",
    title: "Start within days",
    description:
      "Most patients begin at-home IM ketamine within a week. A registered nurse comes to you and stays for the entire session.",
  },
] as const;

export const WHY_NOMAD = [
  {
    title: "A nurse stays the entire session",
    description:
      "Vitals monitored throughout, with physician oversight on every plan, clinic-grade safety in your home.",
  },
  {
    title: "Your therapist stays in the loop",
    description:
      "We coordinate prep and integration with the therapist you already trust, or match you through the Nomad Network.",
  },
  {
    title: "Straight answers on cost",
    description:
      "Published pricing, a Good Faith Estimate before you start, and financing for self-pay IM ketamine.",
  },
  {
    title: "Local, and reachable",
    description:
      "A Seattle team you can text. Home visits across King, Pierce, Kitsap, and Thurston counties.",
  },
] as const;

export const TRUST_ITEMS = [
  { label: "5.0 Google rating", detail: "Patients rate our care highly" },
  { label: "LegitScript Certified", detail: "Verified online healthcare" },
  { label: "ASKP3 Member", detail: "Ketamine practice standards" },
  { label: "Local Seattle team", detail: "Call or text anytime" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Nomad came to our home for my family member’s ketamine therapy, and their nurses treated our whole family with such warmth and compassion. Having care that felt this safe and personal, right where we live, meant the world to us.",
    author: "Ragan H.",
  },
  {
    quote:
      "The team communicated clearly and often, the nurses made me feel safe and comfortable, and I loved that I could do this in my house. The medicine helped me access and process things that had been holding me back.",
    author: "Jen L.",
  },
  {
    quote:
      "Nomad Therapeutics quite literally changed my life. Ketamine gave me hope when so many other treatments had fallen short. The professionalism, expertise, and genuine compassion are unmatched.",
    author: "Mia L.",
  },
] as const;

export const TEAM_LEADERS = [
  {
    name: "Alexander Gill, MD",
    role: "Co-founder & Chief Medical Officer",
    image: img("/images/team/alexander-gill.jpg"),
    objectPosition: "22% 30%",
    href: "https://nomadtherapeutics.org/alexander-gill-md/",
  },
  {
    name: "Theotis Chappell, PMHNP",
    role: "Psychiatric Nurse Practitioner",
    image: img("/images/team/theotis-chappell.jpg"),
    objectPosition: "center 18%",
    href: "https://nomadtherapeutics.org/theotis-chappell-pmhnp/",
  },
  {
    name: "Jack Gomer",
    role: "Co-founder & CEO",
    image: img("/images/team/jack-gomer.jpg"),
    objectPosition: "50% 22%",
    href: "https://nomadtherapeutics.org/jack-gomer/",
  },
  {
    name: "Jason Parks",
    role: "Co-founder",
    image: img("/images/team/jason-parks.jpg"),
    objectPosition: "50% 22%",
    href: "https://nomadtherapeutics.org/jason-parks/",
  },
] as const;

export const TEAM_NURSES = [
  {
    name: "Trysten, RN",
    role: "Registered Nurse",
    image: img("/images/team/trysten.jpg"),
    href: "https://nomadtherapeutics.org/trysten-dial/",
  },
  {
    name: "Jessica, RN",
    role: "Registered Nurse",
    image: img("/images/team/jessica.jpg"),
    href: "https://nomadtherapeutics.org/jessica-lancaster/",
  },
  {
    name: "Rebecca, RN",
    role: "Registered Nurse",
    image: img("/images/team/rebecca.jpg"),
    href: "https://nomadtherapeutics.org/rebecca/",
  },
  {
    name: "Sam, RN",
    role: "Registered Nurse",
    image: img("/images/team/sam.jpg"),
    href: "https://nomadtherapeutics.org/sam-rn/",
  },
  {
    name: "Chasa, RN",
    role: "Registered Nurse",
    image: img("/images/team/chasa.webp"),
    href: "https://nomadtherapeutics.org/chasa-rn/",
  },
] as const;

export const TEAM_VIDEOS = [
  {
    id: "b_4H_PjZG94",
    title: "Meet Nomad Therapeutics",
    caption: "Dr. Alexander Gill and Trysten, RN, on who Nomad is for · 0:54",
  },
  {
    id: "b_DTwhWrB7M",
    title: "What a home visit with Nomad Therapeutics looks like",
    caption: "Trysten, RN, walks through a home ketamine session · 1:13",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Am I a candidate?",
    answer:
      "Most of our patients have tried antidepressants, or a year or more of therapy, without enough relief. We screen for blood pressure, heart conditions, psychosis, mania, and substance use. The free consultation is where we find out together.",
  },
  {
    question: "How fast can I start?",
    answer:
      "At-home IM ketamine usually begins within a week of your consultation. No referral is required.",
  },
  {
    question: "Is it safe?",
    answer:
      "A registered nurse monitors you for the entire session under physician oversight. We’ll walk through side effects and what to expect at your evaluation.",
  },
  {
    question: "Do I need a referral?",
    answer:
      "No. You can book directly. If you have a therapist or psychiatrist, we’ll coordinate with them with your permission.",
  },
  {
    question: "What does it cost?",
    answer:
      "At-home IM ketamine is self-pay because insurers don’t yet cover off-label ketamine. You’ll receive a Good Faith Estimate before starting, and financing is available.",
  },
] as const;

export const DISCLAIMER =
  "Ketamine is FDA-approved as an anesthetic. Psychiatric use is off-label and prescribed only after clinician evaluation. Individual results vary.";

export const CRISIS_NOTE =
  "If you are in crisis, call or text 988. Help is available 24/7.";
