"use client";

import Link from "next/link";
import Layout from "@/components/Layout";

const offerings = [
  {
    title: "Therapy Sessions",
    description:
      "Therapy is for anyone aiming to better connect with themselves. In this space, you can gain insight into your personal life, work life, or relationships. Therapy sessions are by appointment only.",
    shape: "rounded-[45%_45%_45%_45%]",
    accent: "bg-warm-tan/40",
  },
  {
    title: "Clinical Supervision",
    description:
      "Clinical supervision is a space designated to help you develop your clinical voice. Together, we'll reflect on your clinical work and professional goals.",
    shape: "rounded-[50%_50%_50%_50%]",
    accent: "bg-sage/40",
  },
  {
    title: "Consultation Services",
    description:
      "Uniting clinical best practices with technology to inform product development and design is essential. Together, we can find ways that will make digital mental health care accessible and scalable.",
    shape: "rounded-[40%_40%_45%_45%]",
    accent: "bg-light-sage/50",
  },
];

const Offerings = () => (
  <Layout>
    <section className="py-16 md:py-24" aria-label="Services offered">
      <div className="container mx-auto px-6">
        <h1 className="font-serif text-5xl md:text-7xl italic text-center mb-20">offerings</h1>

        <div className="flex justify-center gap-6 mb-24" aria-hidden="true">
          <div className="w-48 h-64 rounded-[45%_45%_45%_45%] bg-secondary overflow-hidden relative">
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-xs font-sans">Photo</span>
            </div>
            <div className="absolute -bottom-3 -left-3 w-12 h-6 rounded-t-full bg-warm-tan/60" />
          </div>
          <div className="w-44 h-56 rounded-[50%_50%_45%_45%] bg-secondary overflow-hidden relative mt-8">
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-xs font-sans">Photo</span>
            </div>
            <div className="absolute -bottom-2 -right-2 w-14 h-14 rounded-full bg-sage/40" />
          </div>
          <div className="hidden md:block w-16 h-8 rounded-t-full bg-light-sage/40 self-end mb-8" />
        </div>

        <div className="space-y-20 max-w-4xl mx-auto">
          {offerings.map((item, i) => (
            <article key={i} className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 items-start">
              <div className="flex justify-center" aria-hidden="true">
                <div className={`w-20 h-20 ${item.accent} ${item.shape}`} />
              </div>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">{item.title}</h2>
                <p className="text-base leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link
            href="/contact"
            className="inline-block border border-foreground/40 rounded-full px-10 py-3 text-sm font-sans uppercase tracking-widest hover:bg-foreground hover:text-primary-foreground transition-colors"
          >
            Make an Appointment
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Offerings;
