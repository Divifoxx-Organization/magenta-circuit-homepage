import * as React from 'react';
import { useCardSpotlight } from '@/hooks/use-cursor';
import { cn } from '@/lib/utils';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const SpotlightCard = React.forwardRef<HTMLDivElement, SpotlightCardProps>(
  ({ className, children, ...props }, ref) => {
    const { cardRef, spotlightPosition, isActive, handleMouseMove, handleMouseEnter, handleMouseLeave } = useCardSpotlight();
    
    // Check for reduced motion and touch devices
    const [isEnabled, setIsEnabled] = React.useState(false);
    
    React.useEffect(() => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const isLargeScreen = window.innerWidth >= 1024;
      setIsEnabled(!hasTouch && !prefersReducedMotion && isLargeScreen);
    }, []);

    // Merge refs
    const mergedRef = React.useCallback(
      (node: HTMLDivElement | null) => {
        (cardRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [cardRef, ref]
    );

    if (!isEnabled) {
      return (
        <div ref={ref} className={className} {...props}>
          {children}
        </div>
      );
    }

    return (
      <div
        ref={mergedRef}
        className={cn('relative overflow-hidden', className)}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {/* Spotlight overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
          style={{
            background: isActive 
              ? `radial-gradient(400px circle at ${spotlightPosition.x}px ${spotlightPosition.y}px, hsl(328 82% 52% / 0.06), transparent 60%)`
              : 'transparent',
            opacity: isActive ? 1 : 0,
          }}
        />
        
        {/* Border highlight effect */}
        <div
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] transition-opacity duration-500"
          style={{
            background: isActive
              ? `radial-gradient(300px circle at ${spotlightPosition.x}px ${spotlightPosition.y}px, hsl(328 82% 52% / 0.15), transparent 50%)`
              : 'transparent',
            opacity: isActive ? 1 : 0,
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            padding: '1px',
          }}
        />
        
        {children}
      </div>
    );
  }
);

SpotlightCard.displayName = 'SpotlightCard';

export { SpotlightCard };
