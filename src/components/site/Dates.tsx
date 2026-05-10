const DATES = [
  { d: "June 1", t: "Online Application Open", note: "Save $150 on entry fee.", urgent: true },
  { d: "July 15", t: "Final entry deadline", note: "Last chance. No extensions." },
  { d: "Aug 1", t: "Public voting opens", note: "Top 100 announced. Mobilize your audience." },
  { d: "Aug 15", t: "Announcement of Top 10", note: "10 finalists named. Travel booked." },
  { d: "SEP 14", t: "Live finale, Lahore", note: "Lahore FashionShow " },
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
            <span className="label">Lock in early bird</span>
            <span className="label-alt">Save $150</span>
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
