"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "@/components/Layout";
import { articles } from "@/app/blog/page";

const loremSections = [
  "There is a particular kind of quiet that arrives not through absence, but through intention. It asks us to pause — not because nothing is happening, but because everything is. In therapy, we often talk about the space between stimulus and response. That space is where growth lives.",
  "When we allow ourselves to sit with discomfort rather than rush past it, something shifts. The nervous system begins to settle. The mind, so accustomed to scanning for threats, starts to soften. This is not passive — it is perhaps the most active thing we can do.",
  "I often encourage clients to notice what happens in their body when they slow down. Where does tension gather? What does it feel like to breathe without urgency? These small observations become the foundation for deeper self-understanding.",
  "There is no single path to healing. Some people find stillness through movement — yoga, walking, dance. Others find it through writing, art, or simply sitting with a cup of tea. The practice matters less than the presence we bring to it.",
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function BlogArticle({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) notFound();

  return (
    <Layout>
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-2xl">
          <Link
            href="/blog"
            className="inline-block text-xs font-sans uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            ← Back to Journal
          </Link>

          <header className="mb-16">
            <time className="text-xs font-sans uppercase tracking-widest text-muted-foreground">
              {article.date}
            </time>
            <h1 className="font-serif text-4xl md:text-5xl mt-3 leading-tight">
              {article.title}
            </h1>
          </header>

          <div className="w-full aspect-[3/2] rounded-[40%_40%_42%_42%] bg-secondary mb-14 flex items-center justify-center">
            <span className="text-muted-foreground text-xs font-sans">Featured Image</span>
          </div>

          <div className="space-y-8 font-sans text-base leading-relaxed text-muted-foreground">
            <p className="text-foreground text-lg leading-relaxed font-serif italic">
              {article.excerpt}
            </p>

            <p>{loremSections[0]}</p>
            <p>{loremSections[1]}</p>

            <figure className="my-12">
              <div className="w-full aspect-[4/3] rounded-[48%_52%_50%_50%] bg-sage/20 flex items-center justify-center">
                <span className="text-muted-foreground text-xs font-sans">Photo</span>
              </div>
            </figure>

            <p>{loremSections[2]}</p>
            <p>{loremSections[3]}</p>
          </div>

          <div className="mt-20 pt-10 border-t border-border text-center">
            <Link
              href="/contact"
              className="inline-block border border-foreground/40 rounded-full px-10 py-3 text-sm font-sans uppercase tracking-widest hover:bg-foreground hover:text-primary-foreground transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}
