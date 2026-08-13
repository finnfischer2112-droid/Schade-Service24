import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { ProblemSolution } from '@/components/ProblemSolution';
import { Services } from '@/components/Services';
import { WhatWeCheck } from '@/components/WhatWeCheck';
import { Process } from '@/components/Process';
import { CostSection } from '@/components/CostSection';
import { InsuranceSection } from '@/components/InsuranceSection';
import { LocalSEOSection } from '@/components/LocalSEOSection';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { MobileStickyCTA } from '@/components/MobileStickyCTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <ProblemSolution />
        <Services />
        <WhatWeCheck />
        <Process />
        <CostSection />
        <InsuranceSection />
        <LocalSEOSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
