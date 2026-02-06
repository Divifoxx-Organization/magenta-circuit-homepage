import { useEffect, useState } from 'react';
import { useCursor } from '@/hooks/use-cursor';

const CustomCursor = () => {
  const { position, isVisible, isEnabled } = useCursor();
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!isEnabled) return;

    // Smooth interpolation for the glow
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    let animationId: number;
    
    const animate = () => {
      setSmoothPosition(prev => ({
        x: lerp(prev.x, position.x, 0.15),
        y: lerp(prev.y, position.y, 0.15),
      }));
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [position, isEnabled]);

  if (!isEnabled) return null;

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
      aria-hidden="true"
    >
      {/* Outer soft glow - follows with delay */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{
          left: smoothPosition.x,
          top: smoothPosition.y,
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, hsl(328 82% 52% / 0.06) 0%, hsl(328 82% 52% / 0.02) 40%, transparent 70%)',
          opacity: isVisible ? 1 : 0,
        }}
      />
      
      {/* Inner glow - more responsive */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
        style={{
          left: position.x,
          top: position.y,
          width: '120px',
          height: '120px',
          background: 'radial-gradient(circle, hsl(328 82% 52% / 0.12) 0%, hsl(328 82% 52% / 0.04) 50%, transparent 70%)',
          opacity: isVisible ? 1 : 0,
        }}
      />
      
      {/* Center dot */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-150"
        style={{
          left: position.x,
          top: position.y,
          width: '6px',
          height: '6px',
          backgroundColor: 'hsl(0 0% 95% / 0.9)',
          boxShadow: '0 0 10px hsl(328 82% 52% / 0.4), 0 0 20px hsl(328 82% 52% / 0.2)',
          opacity: isVisible ? 1 : 0,
        }}
      />
    </div>
  );
};

export default CustomCursor;
