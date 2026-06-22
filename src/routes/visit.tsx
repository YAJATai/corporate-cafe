import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/lib/images";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit — The Corporate Cafe, Sanganer, Jaipur" },
      { name: "description", content: "Anukampa Platina, Block F111, Muhana Sabji Mandi, Sanganer, Jaipur. Open daily until 11 pm." },
      { property: "og:title", content: "Visit The Corporate Cafe" },
      { property: "og:description", content: "Open daily until 11 pm in Sanganer, Jaipur." },
      { property: "og:image", content: images.seating },
    ],
  }),
  component: VisitPage,
});

const hours = [
  { day: "Monday", time: "8:00 am – 11:00 pm" },
  { day: "Tuesday", time: "8:00 am – 11:00 pm" },
  { day: "Wednesday", time: "8:00 am – 11:00 pm" },
  { day: "Thursday", time: "8:00 am – 11:00 pm" },
  { day: "Friday", time: "8:00 am – 11:00 pm" },
  { day: "Saturday", time: "8:00 am – 11:00 pm" },
  { day: "Sunday", time: "8:00 am – 11:00 pm" },
];

const services = [
  "Dine-in", "Drive-through", "No-contact delivery",
  "Delivery", "Takeaway", "Kerbside pickup", "Reserve a table",
];

const accessibility = [
  "Assisted listening devices",
  "Assistive hearing loop",
  "Wheelchair-accessible car park",
  "Wheelchair-accessible entrance",
  "Wheelchair-accessible seating",
  "Wheelchair-accessible toilet",
];

const highlights = [
  "Fireplace", "Great coffee", "Great dessert",
  "Great tea selection", "Live music", "Live performances", "Sport",
];

const offerings = [
  "Coffee", "Cocktails", "Spirits",
  "Happy-hour drinks", "Happy-hour food", "Late-night food",
  "Organic dishes", "Prepared foods", "Small plates",
  "Vegetarian options", "Vegetarian options only",
  "Private dining room", "Quick bite",
];

const diningOptions = [
  "Breakfast", "Brunch", "Lunch", "Dinner", "Dessert",
  "Seating", "Table service",
];

const amenities = ["Restroom"];

const atmosphere = [
  "Casual", "Cozy", "Quiet", "Romantic", "Trendy", "Upmarket",
];

const crowd = [
  "Family friendly", "Groups", "LGBTQ+ friendly", "University students",
];

const planning = ["Accepts reservations"];

const payments = [
  "Credit cards", "Debit cards", "Google Pay",
  "NFC mobile payments", "Meal coupons", "Pluxee",
];

const children = [
  "Good for kids", "High chairs", "Kids' menu",
];

const parking = [
  "Free parking garage", "Free parking lot",
  "On-site parking", "Plenty of parking",
];

const pets = [
  "Dogs allowed inside", "Dogs allowed outside",
];

function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-accent" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          {item}
        </span>
      ))}
    </div>
  );
}

function VisitPage() {
  return (
    <>
      <section className="container-page pt-14 md:pt-20 pb-12">
        <p className="eyebrow">Visit</p>
        <h1 className="mt-4 text-5xl md:text-7xl max-w-3xl">
          Come find us in <em className="italic text-accent">Sanganer.</em>
        </h1>
      </section>

      <section className="container-page pb-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5 space-y-8">
            <div>
              <p className="eyebrow">Address</p>
              <p className="mt-3 text-lg leading-relaxed">
                Anwar Ali Gouri, Block F111<br />
                Muhana Sabji Mandi, Sanganer<br />
                Jaipur, Rajasthan 302029<br />
                <span className="text-muted-foreground text-sm">Located in: Anukampa Platina</span>
              </p>
              <p className="mt-3 font-mono text-xs text-muted-foreground">Plus code: RP8X+J7 Jaipur</p>
            </div>

            <div>
              <p className="eyebrow">Phone</p>
              <a href="tel:+919358448814" className="mt-3 block text-2xl font-display hover:text-accent">093584 48814</a>
            </div>

            <div>
              <p className="eyebrow">Hours</p>
              <ul className="mt-3 divide-y divide-border border-y border-border">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between py-2.5 text-sm">
                    <span>{h.day}</span>
                    <span className="text-muted-foreground">{h.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 mr-2" />
                Open now · Closes 11 pm
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=The+Corporate+Cafe+Anukampa+Platina+Sanganer+Jaipur"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:bg-accent transition"
              >
                Get directions
              </a>
              <a
                href="tel:+919358448814"
                className="rounded-full border border-border px-6 py-3 text-sm hover:bg-secondary"
              >
                Call to reserve
              </a>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-border aspect-[4/3]">
              <iframe
                title="Map to The Corporate Cafe"
                src="https://www.google.com/maps?q=Anukampa+Platina+Sanganer+Jaipur&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <img src={images.seating} alt="Cafe seating" className="mt-6 aspect-[16/9] w-full rounded-2xl object-cover" />
          </div>
        </div>
      </section>

      {/* AMENITIES GRID */}
      <section className="border-y border-border/60 bg-secondary/30">
        <div className="container-page py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="eyebrow mb-3">Service options</p>
              <TagList items={services} />
            </div>
            <div>
              <p className="eyebrow mb-3">Accessibility</p>
              <TagList items={accessibility} />
            </div>
            <div>
              <p className="eyebrow mb-3">Highlights</p>
              <TagList items={highlights} />
            </div>
            <div>
              <p className="eyebrow mb-3">Offerings</p>
              <TagList items={offerings} />
            </div>
            <div>
              <p className="eyebrow mb-3">Dining options</p>
              <TagList items={diningOptions} />
            </div>
            <div>
              <p className="eyebrow mb-3">Amenities</p>
              <TagList items={amenities} />
            </div>
            <div>
              <p className="eyebrow mb-3">Atmosphere</p>
              <TagList items={atmosphere} />
            </div>
            <div>
              <p className="eyebrow mb-3">Crowd</p>
              <TagList items={crowd} />
            </div>
            <div>
              <p className="eyebrow mb-3">Planning</p>
              <TagList items={planning} />
            </div>
            <div>
              <p className="eyebrow mb-3">Payments</p>
              <TagList items={payments} />
            </div>
            <div>
              <p className="eyebrow mb-3">Children</p>
              <TagList items={children} />
            </div>
            <div>
              <p className="eyebrow mb-3">Parking</p>
              <TagList items={parking} />
            </div>
            <div>
              <p className="eyebrow mb-3">Pets</p>
              <TagList items={pets} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
