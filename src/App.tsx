import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ServicesSection } from './components/ServicesSection';
import { HowWeWorkSection } from './components/HowWeWorkSection';
import { UseCasesSection } from './components/UseCasesSection';
import { DiagnosticQuizSection } from './components/DiagnosticQuizSection';
import { AboutUsSection } from './components/AboutUsSection';
import { FAQSection } from './components/FAQSection';
import { DemosSection } from './components/Demos/DemosSection';
import { FinalCTASection } from './components/FinalCTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('Sistemas Empresariales');
  const [diagnosticNotes, setDiagnosticNotes] = useState<string>('');

  const scrollToContact = (service?: string, notes?: string) => {
    if (service) setSelectedService(service);
    if (notes) setDiagnosticNotes(notes);
    
    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      {/* Sticky Header Navbar */}
      <Navbar onOpenContact={() => scrollToContact()} />

      <main className="flex-grow">
        {/* 1. Hero Section with 3D Ecosystem Visual */}
        <Hero onOpenContact={() => scrollToContact()} />

        {/* 2. Trust Bar & Key Capabilities */}
        <TrustBar />

        {/* 3. Core Solutions Bento Grid */}
        <ServicesSection onSelectService={(service) => scrollToContact(service)} />

        {/* 4. Methodology / How We Work */}
        <HowWeWorkSection />

        {/* 5. Sector Use Cases (Kept in place) */}
        <UseCasesSection />

        {/* 6. Interactive Diagnostic Quiz */}
        <DiagnosticQuizSection onOpenContact={(notes) => scrollToContact(undefined, notes)} />

        {/* 7. About Us & Partnership Pillars */}
        <AboutUsSection />

        {/* 8. FAQ Accordion */}
        <FAQSection onOpenContact={() => scrollToContact()} />

        {/* 9. Flagship Interactive Demos (Live laboratory right before CTA) */}
        <DemosSection />

        {/* 10. Final High-Impact CTA */}
        <FinalCTASection onOpenContact={() => scrollToContact()} />

        {/* 11. Interactive Contact Form */}
        <ContactSection initialService={selectedService} initialNotes={diagnosticNotes} />
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
};

export default App;
