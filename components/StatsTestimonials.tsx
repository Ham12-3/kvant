"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const stats = [
  { value: "4.7 / 5", label: "Client Satisfaction Score" },
  { value: "400+", label: "Successful Recruitments Since 2020" },
  { value: "88%", label: "Stay With The Company For 2+ Years" },
];

export function Stats() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-k">
        <p className="label mb-12 text-center">Kvant By The Numbers</p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="flex h-56 flex-col justify-between border border-line bg-card p-8">
                <span className="font-serif text-[clamp(2.6rem,5vw,3.4rem)] font-medium">
                  {s.value}
                </span>
                <span className="label text-ink">▪ {s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "Kvant er en profesjonell og innsiktsfull rekrutteringspartner, både til vårt forvaltningsteam og til nøkkelroller i porteføljen. De kombinerer sterk forretningsforståelse med en evne til å identifisere og engasjere de aller beste kandidatene. Det som virkelig skiller dem ut, er måten de leder prosessene på, med en dynamisk miks av digitale verktøy og tett dialog som engasjerer oss og gjør at vi får brukt tiden vår veldig effektivt. Resultatet er rekrutteringer som løfter organisasjonene våre.",
    name: "Gudmund Killi",
    role: "Managing Partner\n[Credo Partners]",
    company: "CREDO",
  },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];
  return (
    <section className="py-16 md:py-24">
      <div className="container-k">
        <p className="label mb-12 text-center">Client Testimonials</p>
        <Reveal>
          <div className="border border-line bg-card p-10 md:p-14">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.6fr_1fr]">
              <div>
                <span className="font-serif text-6xl leading-none text-ink">
                  &ldquo;
                </span>
                <p className="mt-4 text-[13px] font-semibold leading-relaxed text-stone">
                  {t.quote}
                </p>
                <p className="label mt-8 text-ink">▪ {t.name}</p>
                <p className="label mt-1 whitespace-pre-line text-stone">
                  {t.role}
                </p>
              </div>
              <div className="flex flex-col items-end justify-between">
                <span className="font-serif text-2xl font-medium tracking-wide">
                  {t.company}
                </span>
                <button
                  onClick={() => setIdx((i) => (i + 1) % testimonials.length)}
                  className="label text-ink hover:text-stone"
                >
                  Next ▸
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
