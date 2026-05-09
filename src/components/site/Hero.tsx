import hero from "@/assets/hero-runway.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden grain">
      <img
        src={hero}
        alt="Model walking the runway, motion blur"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />

      <div className="relative container-cut pt-28 md:pt-36 pb-16 min-h-[100svh] flex flex-col">
        <div className="flex items-center gap-3 eyebrow">
          <span className="inline-block w-8 h-px bg-primary" />
          Season 04 · Open Call
        </div>

        <h1 className="mt-8 text-[14vw] md:text-[8.5vw] lg:text-[7.2rem] xl:text-[8.5rem] leading-[0.85]">
          Stop interning.<br />
          <span className="text-primary">Start</span> competing.
        </h1>

        <p className="mt-8 max-w-xl font-serif text-lg md:text-xl text-foreground/85 leading-snug">
          3 rounds. 10 finalists. 1 winner.<br />
          Judged by Zara's former Head of Design, the CFDA, and SSENSE buyers.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#apply" className="btn-cut">
            <span className="label">Apply Now — Early bird ends Mar 14</span>
            <span className="label-alt">Yes, I'm ready</span>
          </a>
          <a href="#prize" className="btn-ghost">Download prospectus →</a>
        </div>

        <div className="mt-auto pt-16 grid grid-cols-3 gap-6 max-w-2xl">
          <Stat n="$50K" l="Cash prize" />
          <Stat n="1,200+" l="Last applicants" />
          <Stat n="50" l="Spots open" />
        </div>
      </div>

      {/* Side ticker */}
      <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 rotate-90 origin-right">
        <span className="font-mono text-xs tracking-[0.4em] uppercase text-foreground/60">
          NYC · PARIS · LAGOS · SEOUL · MEXICO CITY
        </span>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="border-t border-foreground/40 pt-3">
      <div className="display text-2xl md:text-4xl">{n}</div>
      <div className="eyebrow mt-1">{l}</div>
    </div>
  );
}
