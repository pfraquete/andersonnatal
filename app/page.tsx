import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { About } from "@/components/landing/about";
import { Transparency } from "@/components/landing/transparency";
import { FAQ } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <HowItWorks />
      <About />
      <Transparency />
      <FAQ />
      <Footer />
    </main>
  );
}
