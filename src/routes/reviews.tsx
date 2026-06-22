import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/lib/images";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — The Corporate Cafe, Jaipur" },
      { name: "description", content: "4.8 stars from 220 guests. Read what people are saying about The Corporate Cafe in Sanganer, Jaipur." },
      { property: "og:title", content: "Reviews — The Corporate Cafe" },
      { property: "og:description", content: "4.8 from 220 guests in Sanganer, Jaipur." },
      { property: "og:image", content: images.interior },
    ],
  }),
  component: ReviewsPage,
});

const tags = [
  { label: "momos", count: 6 },
  { label: "waffles", count: 4 },
  { label: "cold coffee", count: 10 },
  { label: "affordability", count: 3 },
  { label: "ambience", count: 8 },
  { label: "staff", count: 5 },
];

const reviews = [
  {
    name: "Priyanka Tanajirao Gaikwad",
    tag: "Local Guide · 24 reviews · 19 photos",
    when: "a year ago",
    body: "In love with this cafe since the beginning. The cold coffee and their chocolate waffles are my favourite. Food is fine nothing fancy. But it's a simple place you can visit with your people and play UNO and other small board games provided by the owner.",
  },
  {
    name: "Shubham Rathore",
    tag: "3 reviews · 1 photo",
    when: "3 months ago",
    body: "Great food and the vibe is even better thanks to Rajesh and Girraj — their friendly nature ❤️. Awesome taste momos and cold coffee.",
  },
  {
    name: "Bhupendra Kr. Yogi",
    tag: "4 reviews",
    when: "4 months ago",
    body: "Such an amazing place! The ambience is beautifully designed — perfect for relaxing or catching up with friends. The staff is courteous and attentive, and the quality of food and beverages is top-notch. Loved the presentation and taste. Will surely visit again!",
  },
  {
    name: "Aarav Sharma",
    tag: "Local Guide · 41 reviews",
    when: "5 months ago",
    body: "Tasty dishes — try their chowmein and momos, it's yummy 😋. Affordable and the staff is genuinely warm. Perfect spot after a long college day.",
  },
  {
    name: "Neha Verma",
    tag: "12 reviews · 6 photos",
    when: "2 months ago",
    body: "A best ambiance and best seating place, and food quality also best. Cold coffee and Oreo shake are a must-try. The board games kept us here for hours.",
  },
  {
    name: "Karan Mehta",
    tag: "8 reviews",
    when: "6 months ago",
    body: "Staff's friendly nature and amazing service — let's try their kurkure momos 🤤. The tandoori momos surprised me. Will come back with friends.",
  },
];

const dist = [
  { stars: 5, pct: 88 },
  { stars: 4, pct: 8 },
  { stars: 3, pct: 2 },
  { stars: 2, pct: 1 },
  { stars: 1, pct: 1 },
];

function ReviewsPage() {
  return (
    <>
      <section className="container-page pt-14 md:pt-20 pb-14">
        <p className="eyebrow">Reviews</p>
        <h1 className="mt-4 text-5xl md:text-7xl">What people say.</h1>

        <div className="mt-12 grid gap-10 md:grid-cols-12 items-end border-b border-border pb-12">
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-8xl text-accent">4.8</span>
              <div>
                <div className="text-gold text-2xl" style={{ color: "var(--color-gold)" }}>★★★★★</div>
                <p className="text-sm text-muted-foreground mt-1">220 Google reviews</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <ul className="space-y-2">
              {dist.map((d) => (
                <li key={d.stars} className="flex items-center gap-3 text-sm">
                  <span className="w-6 text-muted-foreground">{d.stars}</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
                    <div className="h-full rounded-full bg-accent" style={{ width: `${d.pct}%` }} />
                  </div>
                  <span className="w-10 text-right text-muted-foreground">{d.pct}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t.label} className="rounded-full border border-border px-4 py-2 text-sm">
              {t.label} <span className="text-muted-foreground">{t.count}</span>
            </span>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((r) => (
            <article key={r.name} className="rounded-2xl border border-border bg-card p-7">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-accent font-display text-lg text-accent-foreground">
                  {r.name[0]}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-display">{r.name}</h3>
                  <p className="text-xs text-muted-foreground">{r.tag}</p>
                </div>
                <span className="text-xs text-muted-foreground">{r.when}</span>
              </div>
              <div className="mt-4 text-gold" style={{ color: "var(--color-gold)" }}>★★★★★</div>
              <p className="mt-3 text-foreground/85 leading-relaxed">{r.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:bg-accent transition inline-block"
          >
            Write a review on Google
          </a>
        </div>
      </section>
    </>
  );
}
