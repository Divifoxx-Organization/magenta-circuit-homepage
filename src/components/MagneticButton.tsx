import * as React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { useMagneticEffect } from '@/hooks/use-cursor';
import { cn } from '@/lib/utils';

interface MagneticButtonProps extends ButtonProps {
  magneticStrength?: number;
}

const MagneticButton = React.forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ className, children, magneticStrength = 0.25, ...props }, ref) => {
    const { elementRef, offset, isHovered, handleMouseEnter, handleMouseLeave } = useMagneticEffect(magneticStrength);
    
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
      (node: HTMLButtonElement | null) => {
        (elementRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [elementRef, ref]
    );

    if (!isEnabled) {
      return (
        <Button ref={ref} className={className} {...props}>
          {children}
        </Button>
      );
    }

    return (
      <Button
        ref={mergedRef}
        className={cn(
          'transition-all duration-300 ease-out',
          isHovered && 'shadow-[0_0_30px_hsl(328_82%_52%_/_0.4)]',
          className
        )}
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

MagneticButton.displayName = 'MagneticButton';

export { MagneticButton };
