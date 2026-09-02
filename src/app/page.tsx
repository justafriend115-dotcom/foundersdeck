import AcademySection from "@/components/landing/academy-section";
import Features from "@/components/landing/features";
import FinalCta from "@/components/landing/final-cta";
import Footer from "@/components/landing/footer";
import HowItWorks from "@/components/landing/how-it-works";
import Pricing from "@/components/landing/pricing";
import VideoHero from "@/components/landing/video-hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <VideoHero />
      <main className="flex-1">
        <Features />
        <AcademySection />
        <HowItWorks />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
