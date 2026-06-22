import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/lib/images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Corporate Cafe" },
      { name: "description", content: "A women-owned, LGBTQ+ friendly cafe in Sanganer, Jaipur. The story behind The Corporate Cafe." },
      { property: "og:title", content: "About — The Corporate Cafe" },
      { property: "og:description", content: "Women-owned, LGBTQ+ friendly cafe in Sanganer, Jaipur." },
      { property: "og:image", content: images.interior },
    ],
  }),
  component: AboutPage,
});

const values = [
  { title: "Women-owned", body: "A small, independent kitchen run with pride and care." },
  { title: "LGBTQ+ friendly", body: "Everyone gets a seat, a smile, and a second helping." },
  { title: "Board games on the house", body: "UNO, Ludo, cards — pull up a chair and stay a while." },
  { title: "Honest pricing", body: "Most plates land between ₹1–200. No surprises on the bill." },
];

function AboutPage() {
  return (
    <>
      <section className="container-page pt-14 md:pt-20 pb-12">
        <p className="eyebrow">About</p>
        <h1 className="mt-4 text-5xl md:text-7xl max-w-3xl">
          A cafe built on <em className="italic text-accent">small kindnesses.</em>
        </h1>
      </section>

      <section className="container-page pb-20">
        <div className="grid gap-10 md:grid-cols-12 items-start">
          <div className="md:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/85">
            <p>
              The Corporate Cafe opened its doors in a quiet corner of Anukampa Platina,
              tucked away from the rush of Muhana Sabji Mandi. It was meant to be a
              breather — a small, warm room where students could share a plate of momos,
              freelancers could finish one more chapter, and friends could split an
              Oreo shake over a long, slow afternoon.
            </p>
            <p>
              We're proudly women-owned. Our kitchen runs on the same principles our
              guests expect from the food: fresh, honest, and generous. Rajesh and
              Girraj — the faces you'll meet at the counter — make sure every guest
              leaves feeling a little more at home than when they arrived.
            </p>
            <p>
              We're not chasing trends. We're cooking the things people actually want
              after a long day: cold coffee that's properly cold, momos that crunch
              when you bite, waffles that ooze chocolate. And we'll always keep the
              board game shelf open.
            </p>
          </div>
          <div className="md:col-span-5">
            <img src={images.interior} alt="Inside the cafe" className="aspect-[4/5] w-full rounded-2xl object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 border-y border-border/60">
        <div className="container-page py-20">
          <p className="eyebrow">What we believe</p>
          <h2 className="mt-3 text-4xl md:text-5xl max-w-2xl">The little things, done right.</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={v.title} className="rounded-2xl border border-border bg-background p-6">
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                <h3 className="mt-4 text-xl">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-3">
          <img src={images.seating} alt="Seating area" className="aspect-[4/5] w-full rounded-2xl object-cover md:col-span-2 md:aspect-[16/10]" />
          <div className="grid gap-6">
            <img src={images.beans} alt="Fresh coffee beans" className="aspect-square w-full rounded-2xl object-cover" />
            <img src={images.boardGames} alt="Board games" className="aspect-square w-full rounded-2xl object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
