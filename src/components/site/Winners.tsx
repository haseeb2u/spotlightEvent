import w1 from "@/assets/winner-1.jpg";
import w2 from "@/assets/winner-2.jpg";
import w3 from "@/assets/winner-3.jpg";

const ALUMNI = [
  { img: w1, name: "Maria Chen", year: "S02 — 2023", before: "FIT senior, no industry contacts.", after: "Assistant Designer, Coach.", quote: "THE CUT got my portfolio in front of the right people. Three weeks after the finale, I had two job offers." },
  { img: w2, name: "Daniel Okafor", year: "S02 — 2023", before: "Self-taught, selling on Depop.", after: "Founder, OKAFOR Studio. Stocked at SSENSE.", quote: "The marketplace alone paid my rent for a year. The mentorship paid for everything else." },
  { img: w3, name: "Lucia Vargas", year: "S03 — 2024", before: "1 collection, 280 followers.", after: "Resident designer, Parsons MFA + LVMH Prize semi-finalist.", quote: "I came in with one collection. I left with a runway, a buyer, and a thesis advisor." },
];

export function Winners() {
  return (
    <section id="winners" className="py-24 md:py-32 border-b border-border">
      <div className="container-cut">
        <div className="mb-14">
          <span className="eyebrow">— Alumni</span>
          <h2 className="mt-3 text-5xl md:text-7xl">Where they are now.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ALUMNI.map((a) => (
            <article key={a.name} className="group">
              <div className="relative overflow-hidden bg-surface aspect-[4/5]">
                <img src={a.img} alt={a.name} loading="lazy" width={640} height={800}
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.3em] uppercase bg-background/80 px-2 py-1">{a.year}</div>
              </div>
              <h3 className="mt-5 text-2xl">{a.name}</h3>
              <div className="mt-3 font-mono text-xs uppercase tracking-wider text-foreground/60 space-y-1">
                <div><span className="text-primary">Before →</span> {a.before}</div>
                <div><span className="text-primary">After →</span> {a.after}</div>
              </div>
              <blockquote className="mt-4 font-serif italic text-foreground/80 border-l-2 border-primary pl-4">
                "{a.quote}"
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
