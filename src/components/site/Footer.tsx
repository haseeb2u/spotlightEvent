export function Footer() {
  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="container-cut grid md:grid-cols-3 gap-8 items-end">
        <div>
          <div className="display text-3xl">THE<span className="text-primary">/</span>CUT</div>
          <p className="mt-3 font-serif text-foreground/60 text-sm">A global competition for designers who refuse to wait their turn.</p>
        </div>
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/60 space-y-2">
          <div>hello@thecut.fashion</div>
          <div>Brooklyn · Paris · Lagos</div>
        </div>
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/60 md:text-right">
          © {new Date().getFullYear()} THE CUT — All looks reserved.
        </div>
      </div>
    </footer>
  );
}
