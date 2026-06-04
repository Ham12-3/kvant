import Reveal from "./Reveal";

const items = [
  {
    title: "STRATEGY &\nOPERATIONS",
    body: "From corporate strategy to business development and transformation leadership, we connect you with strategic minds who turn insight into direction, and direction into measurable results.",
  },
  {
    title: "COMMERCIAL",
    body: "We find commercial leaders who not only understand markets and customers, but who also translate insight into sustainable growth. Our expertise covers sales, marketing, and go-to-market roles with a proven track record of delivering impact.",
  },
  {
    title: "FINANCE",
    body: "We identify finance leaders who bring clarity, control, and strategic foresight. Whether you need a CFO to drive transformation, or senior finance professionals to lead M&A, controlling, or performance management initiatives.",
  },
  {
    title: "INVESTMENT",
    body: "For private equity firms, family offices, and institutional investors, we place leaders with the experience and edge to assess risk, create value, and drive portfolio performance, from investment directors to operating partners.",
  },
];

export default function Expertise() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-k">
        <p className="label mb-12 text-center">Our Expertise</p>
        <div className="border-t border-line">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80}>
              <div className="grid grid-cols-1 gap-4 border-b border-line py-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
                <h3 className="whitespace-pre-line font-serif text-[clamp(1.8rem,3vw,2.4rem)] font-medium leading-[1.1]">
                  {it.title}
                </h3>
                <p className="max-w-xl text-[13px] font-semibold leading-relaxed text-stone md:self-center">
                  {it.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
