import Preloader from '@/components/Preloader';
import AboutSection from '@/components/AboutSection';
import HeroSection from '@/components/HeroSection';
import IntegrationMapSection from '@/components/MapSection';
import Navbar from '@/components/Navbar';
import StackFlowSection from '@/components/StackFlowSection';
import TrustedPartnersSection from '@/components/TrustedPartners';
import AnimatedSvg from '@/components/AnimatedSvg';

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <HeroSection />
      <div className="-mt-72 z-20 relative">
        <div className="-mt-40 -mb-62 relative z-10">
          <AnimatedSvg className="w-full max-w-6xl mx-auto" />
        </div>
        <StackFlowSection />
        <div className="-mt-50 -mb-12 relative z-10">
          <TrustedPartnersSection />
        </div>

        <AboutSection />


        {/* <IntegrationMapSection /> */}
      </div>
    </>
  );
}
