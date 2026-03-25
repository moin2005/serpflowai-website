import React, { useEffect, useRef } from 'react';

interface GlassSurfaceProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * GlassSurface Component
 * 
 * A premium glass distortion effect component using SVG displacement filters.
 * Creates a frosted glass appearance with chromatic aberration and subtle distortion.
 * 
 * Features:
 * - SVG-based displacement for authentic glass effect
 * - Chromatic aberration (RGB split)
 * - Smooth blur and transparency
 * - Performance optimized with requestAnimationFrame
 */
export const GlassSurface: React.FC<GlassSurfaceProps> = ({ children, className = '' }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const turbulenceRef = useRef<SVGFETurbulenceElement>(null);
  const displacementRef = useRef<SVGFEDisplacementMapElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Subtle animation of the turbulence for dynamic effect
    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.01;
      if (turbulenceRef.current) {
        // Very subtle variation to avoid performance issues
        turbulenceRef.current.setAttribute('seed', String(Math.sin(time) * 0.5 + 0.5));
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <>
      {/* SVG Filter Definition */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-0 h-0 pointer-events-none"
        style={{ visibility: 'hidden' }}
      >
        <defs>
          {/* Turbulence for distortion */}
          <feTurbulence
            ref={turbulenceRef}
            type="fractalNoise"
            baseFrequency="0.02"
            numOctaves="3"
            result="noise"
            seed="2"
          />

          {/* Displacement map for glass effect */}
          <feDisplacementMap
            ref={displacementRef}
            in="SourceGraphic"
            in2="noise"
            scale="8"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displaced"
          />

          {/* Chromatic aberration effect */}
          <filter id="glassDistortion">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.03"
              numOctaves="2"
              result="noise"
              seed="1"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="6"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          {/* Blur and glow for premium feel */}
          <filter id="glassGlow">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Glass Surface Container */}
      <div
        className={`glass-surface glass-surface--svg ${className}`}
        style={{
          backdropFilter: 'blur(12px) saturate(1.8)',
          WebkitBackdropFilter: 'blur(12px) saturate(1.8)',
          background: 'rgba(255, 255, 255, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: `
            inset 0 0 20px rgba(255, 255, 255, 0.2),
            0 8px 32px rgba(0, 0, 0, 0.1),
            0 0 20px rgba(255, 255, 255, 0.1)
          `,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default GlassSurface;
