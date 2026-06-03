// ─── Site-wide SEO configuration ────────────────────────────────────────────
// Update SITE_URL when the custom domain is confirmed.
export const SITE_URL = "https://sjsarchitecturesolutions.com";
export const SITE_NAME = "SJS Architecture Solutions";
export const SITE_TAGLINE = "Construction Chemicals & Waterproofing, Rajkot";
export const PHONE = "+918530081327";
export const PHONE_DISPLAY = "+91 85300 81327";
export const EMAIL = "rupeshgohel376@gmail.com";
export const ADDRESS = {
  street: "PI-208, Sitaram Park, Dharti Tyres Street, Opp. Rajkot Taluka Police Station, Motamava",
  city: "Rajkot",
  region: "Gujarat",
  postalCode: "360005",
  country: "IN",
};
export const GEO = { lat: 22.303, lng: 70.802 };

// ─── Local Business + Organization JSON-LD ──────────────────────────────────
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "Store"],
        "@id": `${SITE_URL}/#business`,
        name: SITE_NAME,
        alternateName: "SJS Architecture",
        url: SITE_URL,
        telephone: PHONE,
        email: EMAIL,
        logo: `${SITE_URL}/images/sjs-logo-dark.png`,
        image: `${SITE_URL}/images/sjs-logo-dark.png`,
        description:
          "SJS Architecture Solutions is an authorized Redwop dealer and complete construction chemicals supplier in Rajkot, Gujarat. We supply ISI-certified waterproofing chemicals, concrete admixtures, tile adhesives, epoxy grouts, repair mortars, and building materials, and also provide on-site waterproofing, epoxy grouting, and premix application services.",
        address: {
          "@type": "PostalAddress",
          streetAddress: ADDRESS.street,
          addressLocality: ADDRESS.city,
          addressRegion: ADDRESS.region,
          postalCode: ADDRESS.postalCode,
          addressCountry: ADDRESS.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: GEO.lat,
          longitude: GEO.lng,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "19:00",
        },
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, Bank Transfer, UPI",
        areaServed: [
          { "@type": "City", name: "Rajkot" },
          { "@type": "State", name: "Gujarat" },
        ],
        knowsAbout: [
          "Construction Chemicals",
          "Waterproofing",
          "Epoxy Grout",
          "Concrete Admixtures",
          "Tile Adhesives",
          "Repair Mortars",
          "Building Materials",
        ],
        sameAs: [],
        hasMap: `https://www.google.com/maps?q=${ADDRESS.street},+${ADDRESS.city},+${ADDRESS.region}+${ADDRESS.postalCode}`,
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        telephone: PHONE,
        email: EMAIL,
        address: {
          "@type": "PostalAddress",
          streetAddress: ADDRESS.street,
          addressLocality: ADDRESS.city,
          addressRegion: ADDRESS.region,
          postalCode: ADDRESS.postalCode,
          addressCountry: ADDRESS.country,
        },
      },
    ],
  };
}

// ─── WebSite schema (for sitelinks search box eligibility) ──────────────────
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: `${SITE_NAME} — ${SITE_TAGLINE}`,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
  };
}

// ─── BreadcrumbList schema ───────────────────────────────────────────────────
export function breadcrumbSchema(
  crumbs: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

// ─── Service schema ──────────────────────────────────────────────────────────
export function serviceSchema(opts: {
  name: string;
  description: string;
  slug: string;
  faqs?: { q: string; a: string }[];
}) {
  const schemas: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: opts.name,
      description: opts.description,
      url: `${SITE_URL}/services/${opts.slug}`,
      provider: {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#business`,
        name: SITE_NAME,
      },
      areaServed: {
        "@type": "City",
        name: "Rajkot",
      },
      serviceType: "Construction Services",
      availableChannel: {
        "@type": "ServiceChannel",
        servicePhone: { "@type": "ContactPoint", telephone: PHONE },
        serviceUrl: `${SITE_URL}/services/${opts.slug}`,
      },
    },
    breadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Services", url: `${SITE_URL}/services` },
      { name: opts.name, url: `${SITE_URL}/services/${opts.slug}` },
    ]),
  ];

  if (opts.faqs && opts.faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: opts.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    });
  }

  return schemas;
}

// ─── Product list schema (for /products) ─────────────────────────────────────
export function productListSchema(
  categories: { title: string; slug: string; products: { name: string; description: string }[] }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Construction Chemicals — SJS Architecture Solutions",
    description: "Complete range of construction chemicals available in Rajkot, Gujarat.",
    url: `${SITE_URL}/products`,
    numberOfItems: categories.reduce((s, c) => s + c.products.length, 0),
    itemListElement: categories.flatMap((cat, ci) =>
      cat.products.slice(0, 5).map((p, pi) => ({
        "@type": "ListItem",
        position: ci * 5 + pi + 1,
        name: p.name,
        description: p.description,
      }))
    ),
  };
}

// ─── Canonical + og:url helper ───────────────────────────────────────────────
export function canonicalMeta(path: string) {
  const url = `${SITE_URL}${path}`;
  return [
    { tagName: "link" as const, rel: "canonical", href: url },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "en_IN" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: SITE_NAME },
  ];
}

// ─── Inline script helper for JSON-LD ────────────────────────────────────────
export function jsonLdScript(data: object | object[]) {
  return {
    type: "application/ld+json" as const,
    innerHTML: JSON.stringify(Array.isArray(data) ? data : data),
  };
}
