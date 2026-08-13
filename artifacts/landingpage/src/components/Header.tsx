import { CTAButton } from './CTAButton';
import { config } from '@/config';
import { trackEvent } from '@/lib/tracking';
import { Phone } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between max-w-6xl">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <span className="font-bold text-xl leading-none">24</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-foreground">
              Schaden-Service<span className="text-primary">24</span>
            </span>
          </a>
        </div>
        
        <div className="flex items-center gap-6">
          <a 
            href={config.PHONE_HREF} 
            onClick={() => trackEvent('phone_click')}
            className="hidden md:flex items-center text-sm font-semibold text-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4 mr-2" />
            {config.PHONE}
          </a>
          <CTAButton className="h-11 px-5 py-2 text-sm hidden sm:inline-flex" />
        </div>
      </div>
    </header>
  );
}
