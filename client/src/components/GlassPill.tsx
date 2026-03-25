import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import GlassSurface from './GlassSurface';
import { ChevronDown } from 'lucide-react';

/**
 * GlassPill Component
 * 
 * A sticky glass pill UI element positioned near the bottom of viewport.
 * Contains minimal CTA/navigation buttons derived from existing sections.
 * 
 * Features:
 * - Sticky positioning with proper z-index layering
 * - SVG displacement distortion effect
 * - Smooth scroll interactions
 * - Responsive design
 * - Performance optimized
 */
export const GlassPill: React.FC = () => {
  const [location, navigate] = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Show pill after initial scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items derived from existing sections
  const navigationItems = [
    { label: 'SEO Plans', href: '/pricing', icon: '📊' },
    { label: 'AI Automation', href: '/pricing', icon: '🤖' },
    { label: 'Free Audit', href: '/contact', icon: '✓' },
    { label: 'Contact', href: '/contact', icon: '→' },
  ];

  const handleNavigate = (href: string) => {
    navigate(href);
    setIsExpanded(false);
  };

  return (
    <>
      {/* Sticky Glass Pill Container */}
      <div
        className="glass-pill-container"
        style={{
          position: 'sticky',
          top: 'calc(100vh - 200px)',
          zIndex: 100,
          height: 0,
          overflow: 'visible',
          pointerEvents: 'none',
        }}
      >
        {/* Glass Pill */}
        <div
          className={`glass-pill transition-all duration-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
          style={{
            pointerEvents: isVisible ? 'auto' : 'none',
            position: 'fixed',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 100,
          }}
        >
          <GlassSurface className="glass-pill-surface">
            <div className="flex items-center gap-2 px-2 py-2">
              {/* Collapsed State - Show Only Key Buttons */}
              {!isExpanded && (
                <>
                  <button
                    onClick={() => handleNavigate('/pricing')}
                    className="glass-pill-btn px-4 py-2 text-sm font-medium text-foreground hover:bg-white/10 rounded-full transition-all duration-200 whitespace-nowrap"
                    title="View SEO Plans"
                  >
                    📊 Plans
                  </button>

                  <button
                    onClick={() => handleNavigate('/contact')}
                    className="glass-pill-btn px-4 py-2 text-sm font-medium text-foreground hover:bg-white/10 rounded-full transition-all duration-200 whitespace-nowrap"
                    title="Get Free Audit"
                  >
                    ✓ Audit
                  </button>

                  {/* Expand Button */}
                  <button
                    onClick={() => setIsExpanded(true)}
                    className="glass-pill-expand px-3 py-2 text-foreground hover:bg-white/10 rounded-full transition-all duration-200 flex items-center gap-1"
                    title="More options"
                  >
                    <ChevronDown size={16} />
                  </button>
                </>
              )}

              {/* Expanded State - Show All Buttons */}
              {isExpanded && (
                <div className="flex items-center gap-1 flex-wrap">
                  {navigationItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleNavigate(item.href)}
                      className="glass-pill-btn px-3 py-2 text-xs font-medium text-foreground hover:bg-white/10 rounded-full transition-all duration-200 whitespace-nowrap"
                      title={item.label}
                    >
                      {item.icon} {item.label}
                    </button>
                  ))}

                  {/* Collapse Button */}
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="glass-pill-collapse px-3 py-2 text-foreground hover:bg-white/10 rounded-full transition-all duration-200"
                    title="Collapse"
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>
          </GlassSurface>
        </div>
      </div>

      {/* Overlay to close pill when clicking outside */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-50"
          style={{ pointerEvents: 'auto' }}
          onClick={() => setIsExpanded(false)}
        />
      )}
    </>
  );
};

export default GlassPill;
