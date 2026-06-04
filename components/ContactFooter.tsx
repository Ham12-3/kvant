"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container-k">
        <h2 className="mb-3 text-center font-serif text-[clamp(2rem,4vw,3rem)] font-medium">
          CONTACT US
        </h2>
        <p className="mx-auto mb-12 max-w-md text-center text-[13px] font-semibold leading-relaxed text-stone">
          Whether you&apos;re ready to start a search or just want to explore
          your options, we&apos;re here to help. Fill out the form below, and one
          of our advisors will be in touch.
        </p>

        <Reveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <p className="label mb-6 text-ink">Let&apos;s discuss your hiring needs</p>
              <div className="space-y-5">
                <Field label="Name" placeholder="Your name" />
                <Field label="Email" placeholder="Your email" type="email" />
                <div>
                  <label className="label mb-2 block text-stone">I am a...</label>
                  <select className="w-full border border-line bg-paper px-3 py-3 font-mono text-xs text-ink outline-none focus:border-ink">
                    <option>Select...</option>
                    <option>Hiring company</option>
                    <option>Candidate</option>
                    <option>Investor</option>
                  </select>
                </div>
                <div>
                  <label className="label mb-2 block text-stone">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Write your message here"
                    className="w-full resize-none border border-line bg-paper px-3 py-3 font-mono text-xs text-ink outline-none placeholder:text-line focus:border-ink"
                  />
                </div>
                <button
                  onClick={() => setSent(true)}
                  className="btn"
                >
                  {sent ? "✓ Sent" : "▪ Send message"}
                </button>
              </div>
            </div>
            <div className="min-h-[320px] bg-teal/30 [background:linear-gradient(135deg,#7d9499,#5f7479)]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="label mb-2 block text-stone">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-line bg-paper px-3 py-3 font-mono text-xs text-ink outline-none placeholder:text-line focus:border-ink"
      />
    </div>
  );
}

const cols = [
  { title: "Services", links: ["Executive Search", "Specialist Search", "Management For Hire"] },
  { title: "For Candidates", links: ["Job Listings", "Community"] },
  { title: "About", links: ["Company", "Our Advisors", "Insights"] },
  { title: "Contact", links: ["Contact Us", "Privacy"] },
];

export function Footer() {
  return (
    <footer className="pt-16">
      <div className="container-k">
        <div className="grid grid-cols-2 gap-8 border-t border-line py-12 md:grid-cols-4">
          {cols.map((c) => (
            <div key={c.title}>
              <p className="label mb-4 text-ink">▪ {c.title}</p>
              <ul className="space-y-2">
                {c.links.map((l) => (
                  <li key={l}>
                    <a className="label text-stone hover:text-ink" href="#">
                      [{l}]
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pb-8">
          <p className="label text-ink">▪ Visit Us</p>
          <p className="label mt-2 text-stone">
            Fridtjof Nansens Plass 8<br />0160 Oslo
          </p>
        </div>
      </div>
      <div className="overflow-hidden">
        <h2 className="select-none whitespace-nowrap text-center font-serif text-[24vw] font-semibold leading-none tracking-tighter text-ink">
          KVANT
        </h2>
      </div>
    </footer>
  );
}
