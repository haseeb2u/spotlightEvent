const PERKS = [
  { k: "$50,000", v: "Cash prize", d: "No equity. No strings. Wired within 14 days of the finale." },
  { k: "$25K", v: "Fabric grant", d: "Sponsored by Mood Fabrics + a deadstock allocation from Première Vision." },
  { k: "12 months", v: "Mentorship", d: "Bi-weekly calls with a CFDA designer and our buying judges." },
  { k: "70%", v: "Marketplace cut", d: "Featured collection drops on our shop. You keep the majority of every sale." },
  { k: "Paris", v: "Sourcing trip", d: "All-expenses to Première Vision Paris with our production team." },
  { k: "PR", v: "Editorial coverage", d: "Vogue India, Dazed, and Highsnobiety run features on the top 10." },
];

export function Prize() {
  return (
    <section id="prize" className="py-24 md:py-32 border-b border-border">
      <div className="container-cut">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-5">
            <span className="eyebrow">— For designers</span>
            <h2 className="mt-3 text-5xl md:text-7xl">The prize<br /><span className="italic font-serif normal-case font-normal text-foreground/80">isn't just</span> cash.</h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 self-end">
            <p className="font-serif text-lg text-foreground/70 leading-relaxed">
              Most competitions hand you a check and a photo op. We hand you a year of access to the people who decide which collections get bought, photographed, and worn.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {PERKS.map((p) => (
            <div key={p.v} className="bg-background p-8 lg:p-10 relative">
              <div className="display text-5xl lg:text-6xl text-primary">{p.k}</div>
              <div className="mt-4 display text-xl">{p.v}</div>
              <p className="mt-3 font-serif text-foreground/65 leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
