import { createFileRoute, Link } from "@tanstack/react-router";
import { images } from "@/lib/images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Corporate Cafe — Cozy coffee shop in Sanganer, Jaipur" },
      { name: "description", content: "Rated 4.8 by 220 guests. Cold coffee, kurkure momos, chocolate waffles, and board games in a warm Sanganer corner." },
      { property: "og:title", content: "The Corporate Cafe — Sanganer, Jaipur" },
      { property: "og:description", content: "Cozy cafe with cold coffee, momos, waffles, and board games." },
      { property: "og:image", content: images.hero },
      { name: "twitter:image", content: images.hero },
    ],
  }),
  component: Index,
});

const highlights = [
  { name: "Cold Coffee", img: images.coldCoffee, note: "A guest favourite — thick, frosty, ₹120" },
  { name: "Kurkure Momos", img: images.momos, note: "Crispy outside, juicy inside" },
  { name: "Chocolate Waffles", img: images.waffle, note: "Loaded with chocolate sauce" },
  { name: "Oreo Shake", img: images.oreoShake, note: "Thick & creamy, blended cookies" },
];

const reviews = [
  {
    name: "Priyanka Gaikwad",
    tag: "Local Guide · a year ago",
    body: "In love with this cafe since the beginning. The cold coffee and chocolate waffles are my favourite. A simple place where you can play UNO and board games the owners keep around.",
  },
  {
    name: "Shubham Rathore",
    tag: "3 months ago",
    body: "Great food and the vibe is even better thanks to Rajesh and Girraj — their friendly nature ❤️. Awesome momos and cold coffee.",
  },
  {
    name: "Bhupendra Yogi",
    tag: "4 months ago",
    body: "Such an amazing place! The ambience is beautifully designed — perfect for relaxing or catching up with friends. Loved the presentation and taste.",
  },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-page grid gap-12 pt-12 pb-20 md:grid-cols-12 md:pt-20 md:pb-28">
          <div className="md:col-span-6 flex flex-col justify-center">
            <p className="eyebrow">Sanganer, Jaipur · since '21</p>
            <h1 className="mt-5 text-5xl leading-[1.02] md:text-7xl">
              A small cafe<br />
              with a <em className="italic text-accent">big</em> heart.
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Cold coffee that's earned its reputation, kurkure momos that disappear too fast,
              and chocolate waffles worth the drive. Plus board games, if you stay a while.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/menu" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-accent">
                See the menu
              </Link>
              <Link to="/visit" className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary">
                Find us →
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm">
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl font-display text-accent">4.8</span>
                  <span className="text-gold">★★★★★</span>
                </div>
                <p className="text-xs text-muted-foreground">220 Google reviews</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="font-display text-xl">₹1–200</p>
                <p className="text-xs text-muted-foreground">per person</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="font-display text-xl">Open</p>
                <p className="text-xs text-muted-foreground">until 11 pm</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <img src={images.hero} alt="Cold coffee at The Corporate Cafe" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block w-44 overflow-hidden rounded-xl border-4 border-background shadow-lg">
              <img src={images.waffle} alt="Chocolate waffle" className="aspect-square w-full object-cover" />
            </div>
            <div className="absolute -top-6 -right-4 hidden md:flex h-28 w-28 items-center justify-center rounded-full bg-accent text-center font-display text-accent-foreground shadow-lg rotate-[8deg]">
              <span className="text-sm leading-tight">Dine-in<br/>Delivery<br/>Drive-thru</span>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="border-y border-border/60 bg-secondary/30">
        <div className="container-page py-16 md:py-24">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="eyebrow">What guests order</p>
              <h2 className="mt-3 text-4xl md:text-5xl">Crowd favourites</h2>
            </div>
            <Link to="/menu" className="text-sm underline underline-offset-4 hover:text-accent">View full menu →</Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => (
              <article key={h.name} className="group">
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img src={h.img} alt={h.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <h3 className="mt-4 text-xl">{h.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{h.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="container-page py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 items-center">
          <div className="md:col-span-5 relative">
            <img src={images.interior} alt="The Corporate Cafe interior" className="w-full rounded-2xl aspect-[4/5] object-cover" />
          </div>
          <div className="md:col-span-7 md:pl-8">
            <p className="eyebrow">Our story</p>
            <h2 className="mt-3 text-4xl md:text-5xl max-w-xl">A corner where the workday slows down.</h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              The Corporate Cafe started as a small dream tucked into Anukampa Platina —
              a place where students, freelancers, and friends could trade the noise outside
              for warm light, simple food, and the smell of fresh coffee.
            </p>
            <p className="mt-4 text-muted-foreground max-w-xl">
              We're proudly women-owned and LGBTQ+ friendly. Rajesh and Girraj keep the
              floor running with a smile, and the board game shelf is always open.
            </p>
            <Link to="/about" className="mt-8 inline-block text-sm underline underline-offset-4 hover:text-accent">
              More about us →
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-page py-20 md:py-28">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <p className="eyebrow" style={{ color: "var(--color-gold)" }}>Loved by Jaipur</p>
              <h2 className="mt-3 text-4xl md:text-5xl">4.8 from 220 guests</h2>
            </div>
            <Link to="/reviews" className="text-sm underline underline-offset-4">Read all reviews →</Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
                <div className="text-gold text-lg">★★★★★</div>
                <blockquote className="mt-4 font-display text-xl leading-snug">"{r.body}"</blockquote>
                <figcaption className="mt-6 text-sm">
                  <div className="font-medium">{r.name}</div>
                  <div className="text-primary-foreground/60 text-xs mt-0.5">{r.tag}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT CTA */}
      <section className="container-page py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl">
          <img src={images.seating} alt="Cafe seating" className="absolute inset-0 h-full w-full object-cover" />
          <div className="relative bg-gradient-to-tr from-espresso/90 via-espresso/70 to-transparent p-10 md:p-20 text-cream">
            <p className="eyebrow" style={{ color: "var(--color-gold)" }}>Come say hi</p>
            <h2 className="mt-3 text-4xl md:text-6xl max-w-2xl">Drop by for a cold coffee.</h2>
            <p className="mt-5 max-w-md text-cream/80">
              Anukampa Platina, Sanganer · Open until 11 pm · Dine-in, drive-through, and no-contact delivery.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+919358448814" className="rounded-full bg-cream px-6 py-3 text-sm font-medium text-espresso hover:bg-gold transition">
                Call 093584 48814
              </a>
              <Link to="/visit" className="rounded-full border border-cream/40 px-6 py-3 text-sm font-medium hover:bg-cream/10">
                Get directions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
