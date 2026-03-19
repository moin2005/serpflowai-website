import React, { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
      {/* Animated gradient blobs */}
      <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
        {/* Blob 1 - Top Left */}
        <div
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl animate-blob"
          style={{
            background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
            top: '-10%',
            left: '-5%',
            animation: 'blob 8s infinite',
          }}
        />

        {/* Blob 2 - Top Right */}
        <div
          className="absolute w-80 h-80 rounded-full opacity-15 blur-3xl animate-blob"
          style={{
            background: 'linear-gradient(135deg, #3498db 0%, #2ecc71 100%)',
            top: '5%',
            right: '-8%',
            animation: 'blob 10s infinite 2s',
          }}
        />

        {/* Blob 3 - Bottom Center */}
        <div
          className="absolute w-72 h-72 rounded-full opacity-10 blur-3xl animate-blob"
          style={{
            background: 'linear-gradient(135deg, #2ecc71 0%, #2c3e50 100%)',
            bottom: '-15%',
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'blob 12s infinite 4s',
          }}
        />

        {/* Blob 4 - Middle Right */}
        <div
          className="absolute w-64 h-64 rounded-full opacity-12 blur-3xl animate-blob"
          style={{
            background: 'linear-gradient(135deg, #9b59b6 0%, #3498db 100%)',
            top: '50%',
            right: '10%',
            transform: 'translateY(-50%)',
            animation: 'blob 11s infinite 1s',
          }}
        />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating circle 1 */}
        <div
          className="absolute w-32 h-32 border-2 border-blue-200 rounded-full opacity-20"
          style={{
            top: '15%',
            right: '20%',
            animation: 'float 6s ease-in-out infinite',
          }}
        />

        {/* Floating circle 2 */}
        <div
          className="absolute w-24 h-24 border border-slate-300 rounded-full opacity-15"
          style={{
            top: '60%',
            left: '10%',
            animation: 'float 8s ease-in-out infinite 1s',
          }}
        />

        {/* Floating square */}
        <div
          className="absolute w-20 h-20 border border-blue-300 opacity-10"
          style={{
            top: '40%',
            right: '5%',
            animation: 'float 7s ease-in-out infinite 2s',
            transform: 'rotate(45deg)',
          }}
        />
      </div>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/20" />
    </div>
  );
}
