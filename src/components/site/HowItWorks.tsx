const STEPS = [
  { n: "01", t: "Submit 3 looks", d: "Upload your portfolio, sketches, and a 60-second pitch video. Four fields. That's it." },
  { n: "02", t: "Public vote + judge scores", d: "100 designers move forward. Your audience matters as much as the panel." },
  { n: "03", t: "Live finale in NYC", d: "10 finalists fly out for a televised runway show during NYFW. We cover travel." },
  { n: "04", t: "Winner takes the prize", d: "$50K cash, a production run, and one year of mentorship with our judges." },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-24 md:py-32 border-b border-border">
      <div className="container-cut">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
          <div>
            <span className="eyebrow">— The format</span>
            <h2 className="mt-3 text-5xl md:text-7xl">How it works.</h2>
          </div>
          <p className="font-serif text-foreground/70 max-w-sm">
            No portfolio reviews behind closed doors. Every round is judged in public.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {STEPS.map((s) => (
            <div key={s.n} className="bg-background p-8 lg:p-10 group hover:bg-primary transition-colors duration-300">
              <div className="font-mono text-xs tracking-[0.3em] text-primary group-hover:text-primary-foreground">STEP {s.n}</div>
              <h3 className="mt-6 text-3xl md:text-4xl group-hover:text-primary-foreground">{s.t}</h3>
              <p className="mt-4 font-serif text-foreground/70 group-hover:text-primary-foreground/90 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
