import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { ProblemSolution } from '@/components/ProblemSolution';
import { Services } from '@/components/Services';
import { WhatWeCheck } from '@/components/WhatWeCheck';
import { Process } from '@/components/Process';
import { CostSection } from '@/components/CostSection';
import { InsuranceSection } from '@/components/InsuranceSection';
import { SeoContent } from '@/components/SeoContent';
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
        <Process />
        <Services />
        <WhatWeCheck />
        <CostSection />
        <SeoContent />
        <InsuranceSection />
        <LocalSEOSection />
        <FAQ />
        <FinalCTA />
      </main>
      <div className="pb-24 sm:pb-0">
        <Footer />
      </div>
      <MobileStickyCTA />
    </div>
  );
}
