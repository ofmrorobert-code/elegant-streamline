import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Index = () => (
  <Layout>
    <section className="relative min-h-[80vh] flex items-center">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-[5%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-sage/30" />
      <div className="absolute bottom-20 right-[8%] w-20 h-10 md:w-32 md:h-16 rounded-t-full bg-light-sage/40" />

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Headshot area */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-64 h-80 md:w-80 md:h-[420px] rounded-[40%_40%_40%_40%] bg-secondary overflow-hidden shadow-lg">
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <span className="text-muted-foreground text-sm font-sans">Portrait</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-sage/40" />
          </div>
        </div>

        {/* Intro text */}
        <div className="max-w-lg">
          <h3 className="font-serif text-2xl md:text-3xl italic mb-4">Hi there,</h3>
          <h1 className="font-serif text-2xl md:text-3xl leading-relaxed mb-8">
            I'm a licensed psychotherapist in New York City, committed to delivering high-quality, trauma-informed mental health care.
          </h1>
          <Link
            to="/contact"
            className="inline-block border border-foreground/40 rounded-full px-10 py-3 text-sm font-sans uppercase tracking-widest hover:bg-foreground hover:text-primary-foreground transition-colors"
          >
            Let's Connect
          </Link>
        </div>
      </div>
    </section>

    {/* Quote section */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <div className="w-12 h-6 rounded-t-full bg-warm-tan/50 mx-auto mb-10" />
        <h2 className="font-serif text-xl md:text-2xl leading-relaxed italic">
          Everything we need to heal ourselves already exists within us; but, sometimes we can struggle to connect with ourselves. Our work will help you to find self trust and to lean in to the wisdom and resilience that has guided you through every moment of life so far.
        </h2>
        <Link
          to="/about"
          className="inline-block mt-10 text-sm font-sans uppercase tracking-widest border-b border-foreground/40 pb-1 hover:opacity-70 transition-opacity"
        >
          Learn More
        </Link>
      </div>
    </section>
  </Layout>
);

export default Index;
