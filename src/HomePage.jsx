import React from "react";
import TopBar from "@/components/top-bar";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ImportExportSection from "@/components/import-export-section";
import ServicesSection from "@/components/services-section";
import GlobalReachSection from "@/components/global-reach-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

function HomePage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <TopBar />
      <Navigation />
      <HeroSection />
      <ImportExportSection />
      <ServicesSection />
      <GlobalReachSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default HomePage;
