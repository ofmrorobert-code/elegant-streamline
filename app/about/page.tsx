"use client";

import Layout from "@/components/Layout";

const About = () => (
  <Layout>
    <section className="py-16 md:py-24" aria-label="About Julia Jarrold">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="relative flex justify-center" aria-hidden="true">
          <div className="w-72 h-96 md:w-80 md:h-[480px] rounded-[45%_45%_45%_45%] bg-secondary overflow-hidden shadow-md">
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-sm font-sans">Photo</span>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-sage/40" />
        </div>

        <div>
          <h1 className="font-serif text-5xl md:text-7xl italic mb-10">about</h1>

          <p className="font-serif text-lg md:text-xl leading-relaxed mb-6">
            Whether you are experiencing anxious thoughts, sadness, feelings of grief or loss, are facing a life change, or are looking to reconnect with yourself — you are working to honor and meet your needs and our work will be in support of that.
          </p>

          <p className="font-serif text-lg md:text-xl leading-relaxed mb-6">
            I will hold space for you to express curiosity towards yourself, to get to know and unburden the parts of yourself that you want to understand and ultimately heal by connecting to your own resilience.
          </p>

          <h2 className="font-serif text-2xl mb-4">Training &amp; Education</h2>

          <p className="text-base leading-relaxed mb-6 text-muted-foreground">
            {"I have a Master's in Social Work from Columbia University and have completed post graduate trauma training from the Institute for Contemporary Psychotherapy. I am level 1 trained in Internal Family Systems Therapy (IFS) and Eye Movement Desensitization and Reprocessing Therapy (EMDR)."}
          </p>

          <p className="text-base leading-relaxed text-muted-foreground">
            My work also draws on various other modalities including Sensorimotor Psychotherapy, Accelerated Experiential Dynamic Psychotherapy (AEDP), and Trauma Focused Cognitive Behavioral Therapy (TF-CBT).
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
