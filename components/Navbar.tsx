export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 z-30 w-full">
      <div className="container-k flex items-center justify-between py-6">
        <span className="w-16" aria-hidden />
        <a
          href="#top"
          className="font-serif text-2xl font-medium tracking-[0.3em] text-ink"
        >
          KVANT
        </a>
        <button className="label flex items-center gap-3 text-ink">
          <span aria-hidden>◎</span>
          Menu
        </button>
      </div>
    </header>
  );
}
