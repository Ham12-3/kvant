import Reveal from "./Reveal";

const clients = [
  "CREDO",
  "Lyse",
  "reMarkable",
  "Møller",
  "MOVA",
  "GlobalConnect",
];

export function Clients() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-k">
        <p className="label mb-10 text-center">Our Clients</p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70">
          {clients.map((c) => (
            <span
              key={c}
              className="font-serif text-xl font-medium tracking-wide text-ink"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HighPerformers() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-k text-center">
        <Reveal>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-medium leading-tight">
            HIGH PERFORMERS
            <br />
            AT YOUR FINGERTIPS
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[15px] font-semibold leading-relaxed text-ink">
            Our candidate network and deep market knowledge help us identify
            leaders who deliver value from day one.
          </p>
          <div className="mt-8">
            <a href="#team" className="btn">
              ▪ Our Team
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
