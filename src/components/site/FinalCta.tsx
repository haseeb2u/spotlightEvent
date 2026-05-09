import { useState } from "react";

export function FinalCta() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="apply" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_transparent_60%)] opacity-20" />
      <div className="container-cut relative grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <span className="eyebrow">— Last call</span>
          <h2 className="mt-4 text-5xl md:text-7xl lg:text-8xl">
            Your breakout<br />
            is <span className="text-primary">4 clicks</span><br />
            away.
          </h2>
          <p className="mt-6 font-serif text-lg text-foreground/75 max-w-md">
            Last season: 1,200 applicants for 50 spots. Apply before <span className="text-primary font-bold">March 14</span> and save $150.
          </p>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="lg:col-span-6 bg-surface border border-border p-8 md:p-10 space-y-5"
        >
          {submitted ? (
            <div className="py-12 text-center">
              <div className="display text-3xl text-primary">You're in the queue.</div>
              <p className="mt-3 font-serif text-foreground/70">Check your inbox for your application link within 60 seconds.</p>
            </div>
          ) : (
            <>
              <div className="eyebrow">Application — 4 fields</div>
              <Field label="Name" name="name" placeholder="First Last" />
              <Field label="Email" name="email" type="email" placeholder="you@studio.com" />
              <Field label="Portfolio link" name="portfolio" placeholder="https://" />
              <div>
                <label className="eyebrow block mb-2">Category</label>
                <select required className="w-full bg-background border border-border px-4 py-3.5 font-serif text-foreground focus:outline-none focus:border-primary">
                  <option>Womenswear</option>
                  <option>Menswear</option>
                  <option>Accessories</option>
                  <option>Genderless / Conceptual</option>
                </select>
              </div>
              <button type="submit" className="btn-cut w-full">
                <span className="label">Pay entry fee & upload portfolio</span>
                <span className="label-alt">No turning back</span>
              </button>
              <p className="text-xs font-mono text-foreground/50 text-center">$50 early bird · Need-based waivers available</p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="eyebrow block mb-2" htmlFor={name}>{label}</label>
      <input
        id={name} name={name} type={type} required placeholder={placeholder}
        className="w-full bg-background border border-border px-4 py-3.5 font-serif text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary"
      />
    </div>
  );
}
