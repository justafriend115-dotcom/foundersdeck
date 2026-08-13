import Features from "@/components/landing/features";
import FinalCta from "@/components/landing/final-cta";
import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import HowItWorks from "@/components/landing/how-it-works";
import Navbar from "@/components/landing/navbar";
import Pricing from "@/components/landing/pricing";
import Testimonials from "@/components/landing/testimonials";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
