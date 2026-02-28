import Link from "next/link";
import Layout from "@/components/Layout";

const pricingItems = [
  {
    title: "Individual Therapy",
    rate: "$200",
    duration: "50-minute session",
    note: "Sliding scale available upon request.",
  },
  {
    title: "Clinical Supervision",
    rate: "$150",
    duration: "50-minute session",
    note: "Group supervision rates available.",
  },
  {
    title: "Consultation",
    rate: "Custom",
    duration: "Varies by project",
    note: "Contact for a custom quote.",
  },
];

const Pricing = () => (
  <Layout>
    <section className="py-16 md:py-24" aria-label="Pricing information">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="font-serif text-5xl md:text-7xl italic text-center mb-6">pricing</h1>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          I believe that quality mental health care should be accessible. I offer a sliding scale for those who need it.
        </p>

        <div className="space-y-12">
          {pricingItems.map((item, i) => (
            <article key={i} className="border-b border-border pb-10 last:border-b-0">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                <h2 className="font-serif text-2xl md:text-3xl">{item.title}</h2>
                <span className="font-serif text-2xl md:text-3xl text-accent">{item.rate}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{item.duration}</p>
              <p className="text-sm text-muted-foreground italic">{item.note}</p>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-block border border-foreground/40 rounded-full px-10 py-3 text-sm font-sans uppercase tracking-widest hover:bg-foreground hover:text-primary-foreground transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Pricing;
