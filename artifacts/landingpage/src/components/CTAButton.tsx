import { trackEvent } from '@/lib/tracking';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'wouter';

export function CTAButton({ className, onClick, ...props }: React.ComponentProps<"a">) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackEvent('cta_click');
    if (onClick) onClick(e);
  };

  return (
    <Link 
      href="/schaden-melden"
      onClick={handleClick}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-base font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        "bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-[1.02] shadow-lg hover:shadow-xl active:scale-[0.98]",
        "h-14 px-8 py-4",
        className
      )}
      {...props as any}
    >
      Jetzt kostenfrei starten
      <ChevronRight className="ml-2 h-5 w-5" />
    </Link>
  );
}

