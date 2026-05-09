import { useState } from "react";

const FAQS = [
  { q: "Do I need a full collection?", a: "No. 3 to 5 looks is enough. We're judging point of view, not output volume." },
  { q: "Who owns my designs?", a: "You do. We license images for promotion only — never the IP, never the patterns." },
  { q: "Can international designers apply?", a: "Yes. Finalists receive a travel + accommodation stipend covering NYC for finale week." },
  { q: "What if I don't win?", a: "Every semi-finalist gets a portfolio review with a judge plus access to our sponsor directory." },
  { q: "What does it cost to enter?", a: "$50 early bird, $200 standard. Need-based fee waivers available — no questions asked." },
  { q: "How are judges chosen?", a: "We rotate working designers, buyers, and editors. No celebrity figureheads who skip the rounds." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-32 border-b border-border">
      <div className="container-cut grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <span className="eyebrow">— FAQ</span>
          <h2 className="mt-3 text-5xl md:text-6xl">Read this first.</h2>
          <p className="mt-6 font-serif text-foreground/65">Still unsure? Email <a href="mailto:hello@thecut.fashion" className="text-primary underline underline-offset-4">hello@thecut.fashion</a>.</p>
        </div>
        <div className="lg:col-span-8">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-t border-border last:border-b">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left py-6 flex items-start justify-between gap-6 group"
                >
                  <span className="display text-xl md:text-2xl group-hover:text-primary transition-colors">{f.q}</span>
                  <span className="text-primary text-2xl shrink-0 font-mono">{isOpen ? "−" : "+"}</span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="font-serif text-foreground/75 text-lg leading-relaxed max-w-2xl">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
