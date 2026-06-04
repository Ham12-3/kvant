import ParticleWave from "./ParticleWave";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-36">
      <div className="container-k text-center">
        <h1
          className="fade-up font-serif text-[clamp(2.6rem,6vw,4.6rem)] font-medium leading-[1.04] tracking-[0.02em]"
          style={{ animationDelay: "0.1s" }}
        >
          TALENT THAT WILL
          <br />
          DEFINE TOMORROW
        </h1>
        <p
          className="fade-up label mx-auto mt-6 max-w-md leading-[1.8] text-stone"
          style={{ animationDelay: "0.25s" }}
        >
          Executive and specialist search within
          <br />
          strategy, finance and commercial
        </p>
        <div
          className="fade-up mt-8 flex items-center justify-center gap-3"
          style={{ animationDelay: "0.4s" }}
        >
          <a href="#openings" className="btn">
            ▪ Job Openings
          </a>
          <a href="#contact" className="btn bg-transparent border border-ink text-ink hover:bg-ink hover:text-paper">
            ▪ Contact Us
          </a>
        </div>
      </div>

      <div className="fade-up mt-14" style={{ animationDelay: "0.55s" }}>
        <ParticleWave />
      </div>
    </section>
  );
}
