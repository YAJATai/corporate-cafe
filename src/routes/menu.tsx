import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/lib/images";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — The Corporate Cafe, Jaipur" },
      { name: "description", content: "Cold coffee, shakes, momos, waffles, pasta, pizza, sandwiches and more. Most items ₹1–200." },
      { property: "og:title", content: "Menu — The Corporate Cafe" },
      { property: "og:description", content: "Cold coffee, momos, waffles and more." },
      { property: "og:image", content: images.coldCoffee },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; desc?: string; price: string };

const sections: { id: string; title: string; img: string; items: Item[] }[] = [
  {
    id: "coffee",
    title: "Coffee & Cold Drinks",
    img: images.coldCoffee,
    items: [
      { name: "Cold Coffee", desc: "Thick, frosty, signature blend", price: "₹120" },
      { name: "Hot Cappuccino", desc: "Double shot, velvet foam", price: "₹90" },
      { name: "Hazelnut Latte", desc: "Espresso, steamed milk, hazelnut", price: "₹140" },
      { name: "Iced Americano", desc: "Espresso over ice", price: "₹100" },
      { name: "Hot Chocolate", desc: "Belgian cocoa, marshmallows", price: "₹130" },
    ],
  },
  {
    id: "shakes",
    title: "Shakes",
    img: images.oreoShake,
    items: [
      { name: "Oreo Shake", desc: "Crushed Oreos, thick & creamy", price: "₹150" },
      { name: "KitKat Shake", desc: "Chocolate wafers blended in", price: "₹160" },
      { name: "Strawberry Shake", desc: "Fresh strawberry blended cold", price: "₹140" },
      { name: "Mango Shake (seasonal)", desc: "Alphonso when in season", price: "₹150" },
    ],
  },
  {
    id: "momos",
    title: "Momos",
    img: images.momos,
    items: [
      { name: "Steamed Veg Momos", desc: "Classic, with red chutney", price: "₹90" },
      { name: "Kurkure Momos", desc: "Crispy fried, signature dish", price: "₹140" },
      { name: "Tandoori Momos", desc: "Smoky, charred, spicy", price: "₹150" },
      { name: "Cheese Corn Momos", desc: "Melty & sweet", price: "₹160" },
    ],
  },
  {
    id: "waffles",
    title: "Waffles & Desserts",
    img: images.waffle,
    items: [
      { name: "Chocolate Waffle", desc: "House favourite, oozing chocolate", price: "₹180" },
      { name: "KitKat Waffle", desc: "Loaded with chocolate bars", price: "₹200" },
      { name: "Maple Honey Waffle", desc: "Light & simple", price: "₹150" },
      { name: "Chocolate Lava Cake", desc: "Warm, gooey center", price: "₹160" },
    ],
  },
  {
    id: "mains",
    title: "Bites & Mains",
    img: images.pasta,
    items: [
      { name: "Veg Chowmein", desc: "Wok-tossed, our way", price: "₹120" },
      { name: "Creamy Alfredo Pasta", desc: "White sauce, herbs, parmesan", price: "₹180" },
      { name: "Margherita Pizza", desc: "Tomato, mozzarella, basil", price: "₹200" },
      { name: "Paneer Burger", desc: "Crispy paneer, slaw, sauces", price: "₹150" },
      { name: "Grilled Sandwich", desc: "Veggies, cheese, butter toast", price: "₹110" },
      { name: "Peri Peri Fries", desc: "Crisp, smoky, addictive", price: "₹100" },
    ],
  },
];

function MenuPage() {
  return (
    <>
      <section className="container-page pt-14 pb-10 md:pt-20">
        <p className="eyebrow">Menu</p>
        <h1 className="mt-4 text-5xl md:text-7xl max-w-3xl">
          Comfort food. <em className="italic text-accent">Honest</em> prices.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Most plates land between ₹1–200. Cooked to order, served with care.
        </p>
        <nav className="mt-10 flex flex-wrap gap-2">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="rounded-full border border-border px-4 py-2 text-sm hover:bg-secondary">
              {s.title}
            </a>
          ))}
        </nav>
      </section>

      {sections.map((section, idx) => (
        <section key={section.id} id={section.id} className="container-page py-14 md:py-20 border-t border-border/60">
          <div className={`grid gap-10 md:grid-cols-12 items-start ${idx % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
            <div className="md:col-span-5">
              <div className="sticky top-24">
                <img src={section.img} alt={section.title} className="aspect-[4/5] w-full rounded-2xl object-cover" />
              </div>
            </div>
            <div className="md:col-span-7">
              <p className="eyebrow">0{idx + 1} · Section</p>
              <h2 className="mt-3 text-4xl md:text-5xl">{section.title}</h2>
              <ul className="mt-10 divide-y divide-border">
                {section.items.map((it) => (
                  <li key={it.name} className="flex items-baseline gap-4 py-5">
                    <div className="flex-1">
                      <h3 className="text-xl">{it.name}</h3>
                      {it.desc && <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>}
                    </div>
                    <div className="font-mono text-sm text-foreground/70 hidden sm:block flex-1 border-b border-dotted border-border translate-y-[-4px]" />
                    <span className="font-display text-xl text-accent">{it.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="container-page py-12 text-center text-sm text-muted-foreground">
        Menu, prices, and availability may vary. For full delivery menu visit Swiggy.
      </section>
    </>
  );
}
