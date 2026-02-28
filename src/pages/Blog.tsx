import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

export const articles = [
  {
    slug: "finding-stillness",
    title: "Finding Stillness in a Busy World",
    excerpt: "How slowing down can transform the way we connect with ourselves and others.",
    date: "February 12, 2026",
    shape: "rounded-[45%_55%_50%_50%]",
    accent: "bg-warm-tan/30",
  },
  {
    slug: "boundaries-as-care",
    title: "Boundaries as an Act of Care",
    excerpt: "Reframing boundaries not as walls, but as bridges to healthier relationships.",
    date: "January 28, 2026",
    shape: "rounded-[50%_50%_45%_55%]",
    accent: "bg-sage/30",
  },
  {
    slug: "grief-and-growth",
    title: "Grief and Growth: Holding Both",
    excerpt: "Exploring the paradox of loss and personal transformation.",
    date: "January 10, 2026",
    shape: "rounded-[55%_45%_50%_50%]",
    accent: "bg-light-sage/40",
  },
  {
    slug: "digital-wellness",
    title: "Digital Wellness in Clinical Practice",
    excerpt: "Navigating the intersection of technology and mental health care.",
    date: "December 15, 2025",
    shape: "rounded-[48%_52%_52%_48%]",
    accent: "bg-warm-tan/25",
  },
];

const Blog = () => (
  <Layout>
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h1 className="font-serif text-5xl md:text-7xl italic text-center mb-20">journal</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {articles.map((article) => (
            <Link
              key={article.slug}
              to={`/blog/${article.slug}`}
              className="group block"
            >
              <article className={`${article.accent} ${article.shape} p-10 md:p-12 transition-transform duration-300 group-hover:scale-[1.02]`}>
                <time className="text-xs font-sans uppercase tracking-widest text-muted-foreground">
                  {article.date}
                </time>
                <h2 className="font-serif text-2xl md:text-3xl mt-3 mb-4 leading-snug">
                  {article.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>
                <span className="inline-block mt-6 text-xs font-sans uppercase tracking-widest border-b border-foreground/40 pb-0.5 group-hover:border-foreground transition-colors">
                  Read more
                </span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
