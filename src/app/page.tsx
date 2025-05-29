import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import StackFlowSection from '@/components/StackFlowSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="-mt-42 z-20 relative">
  <StackFlowSection />
</div>

    </>
  );
}