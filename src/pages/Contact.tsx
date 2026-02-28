import { useState } from "react";
import Layout from "@/components/Layout";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email_address") as HTMLInputElement).value.trim();

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    // Form would submit here
  };

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
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

            <form className="space-y-8" onSubmit={handleSubmit} noValidate>
              <fieldset className="grid grid-cols-2 gap-6">
                <legend className="font-serif text-2xl mb-4 col-span-2">Name</legend>
                <div>
                  <label htmlFor="first_name" className="text-xs text-muted-foreground block mb-1">
                    First Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="first_name"
                    name="first_name"
                    type="text"
                    required
                    maxLength={100}
                    autoComplete="given-name"
                    className="w-full bg-transparent border-b border-foreground/30 pb-2 text-sm focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="last_name" className="text-xs text-muted-foreground block mb-1">
                    Last Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    required
                    maxLength={100}
                    autoComplete="family-name"
                    className="w-full bg-transparent border-b border-foreground/30 pb-2 text-sm focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
              </fieldset>

              <div>
                <label htmlFor="email_address" className="font-serif text-2xl block mb-2">
                  Email <span className="text-xs text-muted-foreground font-sans">*</span>
                </label>
                <input
                  id="email_address"
                  name="email_address"
                  type="email"
                  required
                  maxLength={255}
                  autoComplete="email"
                  aria-describedby={emailError ? "email-error" : undefined}
                  onChange={() => emailError && setEmailError("")}
                  className={`w-full bg-transparent border-b pb-2 text-sm focus:outline-none transition-colors ${
                    emailError ? "border-destructive" : "border-foreground/30 focus:border-foreground"
                  }`}
                />
                {emailError && (
                  <p id="email-error" role="alert" className="text-xs text-destructive mt-1">
                    {emailError}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="font-serif text-2xl block mb-2">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  maxLength={200}
                  className="w-full bg-transparent border-b border-foreground/30 pb-2 text-sm focus:outline-none focus:border-foreground transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message_text" className="font-serif text-2xl block mb-2">
                  Message <span className="text-xs text-muted-foreground font-sans">*</span>
                </label>
                <textarea
                  id="message_text"
                  name="message_text"
                  required
                  rows={4}
                  maxLength={2000}
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

          <div className="hidden md:flex justify-center" aria-hidden="true">
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
};

export default Contact;
