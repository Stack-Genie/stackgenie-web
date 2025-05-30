import AboutSection from '@/components/AboutSection';
import HeroSection from '@/components/HeroSection';
import IntegrationMapSection from '@/components/MapSection';
import Navbar from '@/components/Navbar';
import StackFlowSection from '@/components/StackFlowSection';
import TrustedPartnersSection from '@/components/TrustedPartners';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="-mt-72 z-20 relative">
      <StackFlowSection />
       <AboutSection />
       <TrustedPartnersSection />
       <IntegrationMapSection />
    </div>

    </>
  );
}