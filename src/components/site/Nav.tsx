export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-cut flex items-center justify-between h-14">
        <a href="#top" className="display text-xl tracking-tighter">
          SPOT<span className="text-primary">/</span>LIGHT
        </a>
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.18em] font-mono">
          <a href="#how" className="hover:text-primary transition-colors">How it works</a>
          <a href="#prize" className="hover:text-primary transition-colors">Prize</a>
          <a href="#winners" className="hover:text-primary transition-colors">Founding</a>
          <a href="#dates" className="hover:text-primary transition-colors">Dates</a>
          <a href="#sponsors" className="hover:text-primary transition-colors">Sponsors</a>
        </nav>
        <a href="#apply" className="btn-cut text-xs px-4 py-2.5">
          <span className="label">Apply</span>
          <span className="label-alt">No excuses</span>
        </a>
      </div>
    </header>
  );
}
