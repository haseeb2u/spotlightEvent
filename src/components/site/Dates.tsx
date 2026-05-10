
const DATES = [
  { d: "June 1", t: "Online Applications Open", note: "Submit your portfolio and design vision.", urgent: true },
  { d: "July 15", t: "Application Deadline", note: "Final entry cutoff. No extensions." },
  { d: "July 25", t: "Top 100 Shortlist", note: "Announcement of the first selection round." },
  { d: "August 10", t: "Final Jury Review", note: "Selection of the Top 10 finalists." },
  { d: "August 15", t: "Top 10 Announcement", note: "Finalists officially named." },
  { d: "Aug 16 - Sep 13", t: "Production Phase", note: "Collection development and mentorship." },
  { d: "Sept 14", t: "The Grand Runway", note: "Live finale and winner announcement." },
];

export function Dates() {
  return (
    <section id="dates" className="py-24 md:py-32 border-b border-border bg-surface">
      <div className="container-cut">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
          <div>
            <span className="eyebrow">— Calendar</span>
            <h2 className="mt-3 text-5xl md:text-7xl">Key dates.</h2>
          </div>
          <a href="#apply" className="btn-cut">
            <span className="label">LStart your application</span>
            <span className="label-alt">June 1st Launch</span>
          </a>
        </div>

        <ol className="border-t border-border">
          {DATES.map((d) => (
            <li key={d.t} className="grid grid-cols-12 gap-4 md:gap-8 py-6 md:py-8 border-b border-border items-center">
              <div className={`col-span-4 md:col-span-2 display text-2xl md:text-4xl ${d.urgent ? "text-primary" : ""}`}>{d.d}</div>
              <div className="col-span-8 md:col-span-6 display text-xl md:text-2xl">{d.t}</div>
              <div className="col-span-12 md:col-span-4 font-serif text-foreground/65">{d.note}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
