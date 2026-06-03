import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { localBusinessSchema, webSiteSchema, SITE_NAME, SITE_URL, SITE_TAGLINE } from "@/config/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-black text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      // Default title & description — overridden per page
      { title: `${SITE_NAME} — ${SITE_TAGLINE}` },
      {
        name: "description",
        content:
          "SJS Architecture Solutions — authorized Redwop dealer and complete construction chemicals supplier in Rajkot, Gujarat. Waterproofing services, epoxy grout, premix application, and ISI-certified chemicals.",
      },
      { name: "author", content: SITE_NAME },
      // Robots
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      // Geo / Local SEO
      { name: "geo.region", content: "IN-GJ" },
      { name: "geo.placename", content: "Rajkot, Gujarat, India" },
      { name: "geo.position", content: "22.303;70.802" },
      { name: "ICBM", content: "22.303, 70.802" },
      // Theme color
      { name: "theme-color", content: "#CC0000" },
      { name: "msapplication-TileColor", content: "#CC0000" },
      // Open Graph defaults
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:title", content: `${SITE_NAME} — ${SITE_TAGLINE}` },
      {
        property: "og:description",
        content:
          "Authorized Redwop dealer. Construction chemicals supply, waterproofing, epoxy grout and premix services in Rajkot, Gujarat.",
      },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_URL}/images/sjs-logo-dark.png` },
      // Twitter Card defaults
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${SITE_NAME} — ${SITE_TAGLINE}` },
      {
        name: "twitter:description",
        content: "Construction chemicals supply and waterproofing services in Rajkot, Gujarat.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: SITE_URL },
    ],
    scripts: [
      // Global LocalBusiness + Organization schema
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify(localBusinessSchema()),
      },
      // WebSite schema (enables sitelinks)
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify(webSiteSchema()),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
