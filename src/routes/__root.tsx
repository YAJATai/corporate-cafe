import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-5xl">Page not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you're looking for has wandered off for a coffee break.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-accent"
          >
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-3xl">Something spilled</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try again, or head back home.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:bg-accent"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border px-5 py-2.5 text-sm hover:bg-secondary">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Corporate Cafe — Jaipur" },
      { name: "description", content: "A cozy coffee shop in Sanganer, Jaipur. Kurkure momos, chocolate waffles, cold coffee, and good company." },
      { property: "og:title", content: "The Corporate Cafe — Jaipur" },
      { property: "og:description", content: "Cozy cafe in Sanganer, Jaipur. Momos, waffles, cold coffee, board games." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/reviews", label: "Reviews" },
  { to: "/about", label: "About" },
  { to: "/visit", label: "Visit" },
] as const;

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary font-display text-lg text-primary-foreground">C</span>
          <span className="font-display text-lg leading-none">
            The Corporate Cafe
            <span className="block font-body text-[10px] tracking-[0.2em] text-muted-foreground uppercase mt-0.5">Sanganer · Jaipur</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-4 py-2 text-sm text-foreground/70 transition hover:text-foreground hover:bg-secondary"
              activeProps={{ className: "rounded-full px-4 py-2 text-sm bg-secondary text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:+919358448814"
          className="hidden md:inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-accent transition"
        >
          Reserve a table
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden rounded-full border px-3 py-1.5 text-sm">
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <nav className="container-page flex flex-col py-3">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-2 text-sm">{l.label}</Link>
            ))}
            <a href="tel:+919358448814" className="mt-2 rounded-full bg-primary px-4 py-2 text-center text-sm text-primary-foreground">Reserve a table</a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 mt-24 bg-secondary/40">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="text-2xl">The Corporate Cafe</h3>
          <p className="mt-1 font-display italic text-muted-foreground">द कॉरपोरेट कैफे</p>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            A little corner in Sanganer for cold coffee, kurkure momos, chocolate waffles, and unhurried conversations.
          </p>
        </div>
        <div>
          <p className="eyebrow">Find us</p>
          <p className="mt-3 text-sm leading-relaxed">
            Anukampa Platina, Block F111<br />
            Muhana Sabji Mandi, Sanganer<br />
            Jaipur, Rajasthan 302029
          </p>
        </div>
        <div>
          <p className="eyebrow">Hours</p>
          <p className="mt-3 text-sm">Open daily<br />until 11:00 pm</p>
          <p className="mt-4 eyebrow">Call</p>
          <a href="tel:+919358448814" className="mt-3 block text-sm hover:text-accent">093584 48814</a>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} The Corporate Cafe. All rights reserved.</p>
          <p>LGBTQ+ friendly · Women-owned</p>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1"><Outlet /></main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
