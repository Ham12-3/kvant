import Reveal from "./Reveal";

function DotIcon({ pattern }: { pattern: number[][] }) {
  return (
    <div className="grid grid-cols-6 gap-[6px] py-8">
      {pattern.flat().map((on, i) => (
        <span
          key={i}
          className={`h-[5px] w-[5px] rounded-full ${
            on ? "bg-teal" : "bg-transparent"
          }`}
        />
      ))}
    </div>
  );
}

// 6x6 patterns loosely echoing the reference glyphs
const square = [
  [0, 1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1],
  [0, 1, 1, 1, 1, 0],
];
const mShape = [
  [1, 0, 0, 0, 0, 1],
  [1, 1, 0, 0, 1, 1],
  [1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1],
];
const grid = [
  [1, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 1],
];

const services = [
  {
    title: "EXECUTIVE SEARCH",
    pattern: square,
    body: "Unlock superior performance and long-term value with exceptional leadership; we provide guidance, research and produce top candidates.",
  },
  {
    title: "SPECIALIST SEARCH",
    pattern: mShape,
    body: "When you need specialists who drive tangible impact through the right experience, competencies and organisational fit.",
  },
  {
    title: "MANAGEMENT FOR HIRE",
    pattern: grid,
    body: "When you need an experienced hire on short notice, we provide access to leaders and specialist able to step in and deliver from day one.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container-k">
        <p className="label mb-12 text-center">Our Services</p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="flex h-full flex-col border border-line bg-card p-8 transition-colors duration-300 hover:border-ink">
                <p className="label text-center text-ink">{s.title}</p>
                <div className="flex justify-center">
                  <DotIcon pattern={s.pattern} />
                </div>
                <p className="text-[13px] font-semibold leading-relaxed text-stone">
                  {s.body}
                </p>
                <a href="#contact" className="label mt-6 text-ink hover:text-stone">
                  ▪ Learn More
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
