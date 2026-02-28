import Layout from "@/components/Layout";

const Contact = () => (
  <Layout>
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Form side */}
        <div>
          <h1 className="font-serif text-4xl md:text-6xl italic mb-6">Let's work together</h1>
          <p className="text-base text-muted-foreground mb-2">
            I am currently accepting new clients. Please submit your information in the form below.
          </p>
          <p className="text-base text-muted-foreground mb-10">
            Additionally, you can contact me at{" "}
            <a href="mailto:juliajarroldlcsw@gmail.com" className="font-medium text-foreground underline underline-offset-2">
              juliajarroldlcsw@gmail.com
            </a>{" "}
            or{" "}
            <a href="tel:6469741599" className="font-medium text-foreground italic">
              646-974-1599
            </a>.
          </p>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <fieldset className="grid grid-cols-2 gap-6">
              <legend className="font-serif text-2xl mb-4 col-span-2">Name</legend>
              <div>
                <label htmlFor="firstName" className="text-xs text-muted-foreground block mb-1">
                  First Name <span className="text-muted-foreground">(required)</span>
                </label>
                <input
                  id="firstName"
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-foreground/30 pb-2 text-sm focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="text-xs text-muted-foreground block mb-1">
                  Last Name <span className="text-muted-foreground">(required)</span>
                </label>
                <input
                  id="lastName"
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-foreground/30 pb-2 text-sm focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
            </fieldset>

            <div>
              <label htmlFor="email" className="font-serif text-2xl block mb-2">
                Email <span className="text-xs text-muted-foreground font-sans">(required)</span>
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full bg-transparent border-b border-foreground/30 pb-2 text-sm focus:outline-none focus:border-foreground transition-colors"
              />
            </div>

            <div>
              <label htmlFor="subject" className="font-serif text-2xl block mb-2">Subject</label>
              <input
                id="subject"
                type="text"
                className="w-full bg-transparent border-b border-foreground/30 pb-2 text-sm focus:outline-none focus:border-foreground transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="font-serif text-2xl block mb-2">
                Message <span className="text-xs text-muted-foreground font-sans">(required)</span>
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full bg-transparent border-b border-foreground/30 pb-2 text-sm focus:outline-none focus:border-foreground transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="border border-foreground/40 rounded-full px-10 py-3 text-sm font-sans uppercase tracking-widest hover:bg-foreground hover:text-primary-foreground transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Image side */}
        <div className="hidden md:flex justify-center">
          <div className="w-full max-w-md h-[600px] rounded-t-[50%] bg-secondary overflow-hidden">
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-sm font-sans">Photo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
