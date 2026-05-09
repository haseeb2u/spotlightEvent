export function Sponsors() {
  return (
    <section id="sponsors" className="py-20 md:py-28 border-b border-border">
      <div className="container-cut grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <span className="eyebrow">— For brands & mills</span>
          <h2 className="mt-3 text-4xl md:text-5xl">Own the next generation of talent.</h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <ul className="font-serif text-foreground/80 text-lg space-y-4 mb-8">
            <li className="flex gap-3"><span className="text-primary font-mono text-sm pt-1">01</span> First look at 100+ vetted emerging designers.</li>
            <li className="flex gap-3"><span className="text-primary font-mono text-sm pt-1">02</span> Branded challenges, fabric placement, judge seats.</li>
            <li className="flex gap-3"><span className="text-primary font-mono text-sm pt-1">03</span> Quarterly trend report distilled from 1,200+ submissions.</li>
          </ul>
          <a href="#apply" className="btn-ghost">Request sponsorship deck →</a>
        </div>
      </div>
    </section>
  );
}
