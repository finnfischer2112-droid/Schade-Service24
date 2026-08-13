import { forwardRef } from 'react';
import { trackEvent } from '@/lib/tracking';
import { config } from '@/config';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export const CTAButton = forwardRef<HTMLAnchorElement, React.ComponentProps<"a">>(({ className, ...props }, ref) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackEvent('cta_click');
    if (props.onClick) props.onClick(e);
  };

  return (
    <a 
      ref={ref}
      href={config.CTA_URL}
      onClick={handleClick}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-base font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        "bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-[1.02] shadow-lg hover:shadow-xl active:scale-[0.98]",
        "h-14 px-8 py-4",
        className
      )}
      {...props}
    >
      Jetzt kostenfrei starten
      <ChevronRight className="ml-2 h-5 w-5" />
    </a>
  );
});
CTAButton.displayName = 'CTAButton';
