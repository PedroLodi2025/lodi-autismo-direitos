import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import BlogSection from "@/components/BlogSection";
import ProcessSection from "@/components/ProcessSection";
import RightsSection from "@/components/RightsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ExperienceSection />
      <BlogSection />
      <ProcessSection />
      <RightsSection />
      <ContactSection />
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Index;
