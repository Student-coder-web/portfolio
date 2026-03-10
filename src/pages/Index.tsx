import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechStackRow from "@/components/TechStackRow";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen" style={{ background: "#0A0A0A" }}>
    <Navbar />
    <HeroSection />
    <TechStackRow />
    <AboutSection />
    <ProjectsSection />
    <SkillsSection />
    <AchievementsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;

