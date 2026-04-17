import HeroSection from "../components/home/HeroSection";
import ServicesCards from "../components/home/ServicesCards";
import GalleryPreview from "../components/home/GalleryItem";
import BlogSection from "../components/home/BlogSection";
import AboutSection from "../components/home/AboutSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ExpertInstructorsSection from "../components/home/ExpertInstructorsSection";
import AwardsSection from "../components/home/AwardsSection";
import MainTrust from "../components/home/MainTrust";
import AwardsAcedemy from "../components/home/AwardsAcedemy";
import AnimatedImageCards from "../components/home/AnimatedImageCards";
import AnimatedBackground from "../components/latout/AnimatedBackground";
// import CTASection from "@/components/CTASection";
import CTASection from "../components/CTASection";
import GallerySectionTwo from "../components/gallery/GallerySectionTwo";
import VideoCarousel from "../components/gallery/VideoCarousel";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <section className="relative overflow-hidden">
        <AnimatedBackground />
        <VideoCarousel className="bg-white" />
        <GallerySectionTwo className="bg-gray-100" />
        {/* CONTENT */}
        <div className="relative z-10">
          <ServicesCards />
        </div>
      </section>
      <AboutSection />

      <GalleryPreview />
      <section className="relative overflow-hidden">
        <AnimatedBackground />

        {/* CONTENT */}
        <div className="relative z-10">
          <WhyChooseUs />
        </div>
      </section>
      <AnimatedImageCards />

      <ExpertInstructorsSection />
      <AwardsAcedemy />
      <section className="relative overflow-hidden">
        <AnimatedBackground />

        {/* CONTENT */}
        <div className="relative z-10">
          <AwardsSection />
        </div>
      </section>

      <BlogSection />
      <MainTrust />

      <CTASection
        heading="Ready to Start Your"
        subtext="  Join our vibrant community and transform your passion into rhythm.
              From classical dance to energetic Zumba and unforgettable wedding
              choreography – your perfect dance experience awaits."
      />
    </div>
  );
}
