import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TeamSection from './components/TeamSection';
import HowWeWorkSection from './components/HowWeWorkSection';
import SymptomsSection from './components/SymptomsSection';
import ResultsSection from './components/ResultsSection';
import ServicesSection from './components/ServicesSection';
import ExpertsSection from './components/ExpertsSection';
import ConsultationSection from './components/ConsultationSection';
import ClinicHistorySection from './components/ClinicHistorySection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-[#F9F6F1] pt-[120px] sm:pt-[140px]">
      <Navigation />
      <TeamSection />
      <Hero />
      <HowWeWorkSection />
      <SymptomsSection />
      <ResultsSection />
      <ServicesSection />
      <ExpertsSection />
      <ClinicHistorySection />
      <ConsultationSection />
      <Footer />
    </div>
  );
}

export default App;