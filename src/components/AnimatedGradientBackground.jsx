import React, { useMemo } from "react";

const AnimatedGradientBackground = () => {
  // Generate random positions for each blob on component mount
  const blobPositions = useMemo(() => {
    const generatePosition = () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 64 + Math.random() * 32, // 64px to 96px (w-16 to w-24)
    });

    return {
      primary: [
        generatePosition(),
        generatePosition(),
        generatePosition(),
      ],
      secondary: [
        generatePosition(),
        generatePosition(),
        generatePosition(),
      ],
      particles: [
        { ...generatePosition(), size: 8 + Math.random() * 8 }, // smaller for particles
        { ...generatePosition(), size: 6 + Math.random() * 6 },
        { ...generatePosition(), size: 4 + Math.random() * 4 },
        { ...generatePosition(), size: 2 + Math.random() * 2 },
        { ...generatePosition(), size: 2 + Math.random() * 2 },
      ],
      rays: [
        Math.random() * 100, // Random left positions for rays
        Math.random() * 100,
        Math.random() * 100,
      ]
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-800"></div>
      
      {/* Primary animated blobs with random positions */}
      <div className="absolute inset-0">
        <div 
          className="absolute bg-gradient-to-r from-blue-400/60 to-cyan-300/60 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob"
          style={{
            top: `${blobPositions.primary[0].top}%`,
            left: `${blobPositions.primary[0].left}%`,
            width: `${blobPositions.primary[0].size * 1.5}px`,
            height: `${blobPositions.primary[0].size * 1.5}px`,
            transform: `translate(-50%, -50%)`,
          }}
        ></div>
        <div 
          className="absolute bg-gradient-to-r from-slate-400/60 to-blue-400/60 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
          style={{
            top: `${blobPositions.primary[1].top}%`,
            left: `${blobPositions.primary[1].left}%`,
            width: `${blobPositions.primary[1].size * 1.25}px`,
            height: `${blobPositions.primary[1].size * 1.25}px`,
            transform: `translate(-50%, -50%)`,
          }}
        ></div>
        <div 
          className="absolute bg-gradient-to-r from-indigo-400/60 to-blue-500/60 rounded-full mix-blend-multiply filter blur-xl opacity-18 animate-blob animation-delay-4000"
          style={{
            top: `${blobPositions.primary[2].top}%`,
            left: `${blobPositions.primary[2].left}%`,
            width: `${blobPositions.primary[2].size * 1.25}px`,
            height: `${blobPositions.primary[2].size * 1.25}px`,
            transform: `translate(-50%, -50%)`,
          }}
        ></div>
      </div>
      
      {/* Secondary layer with random positions */}
      <div className="absolute inset-0">
        <div 
          className="absolute bg-gradient-to-br from-slate-500/50 to-blue-500/50 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-blob-slow"
          style={{
            top: `${blobPositions.secondary[0].top}%`,
            left: `${blobPositions.secondary[0].left}%`,
            width: `${blobPositions.secondary[0].size}px`,
            height: `${blobPositions.secondary[0].size}px`,
            transform: `translate(-50%, -50%)`,
          }}
        ></div>
        <div 
          className="absolute bg-gradient-to-br from-cyan-400/50 to-teal-500/50 rounded-full mix-blend-multiply filter blur-2xl opacity-18 animate-blob-slow animation-delay-3000"
          style={{
            top: `${blobPositions.secondary[1].top}%`,
            left: `${blobPositions.secondary[1].left}%`,
            width: `${blobPositions.secondary[1].size * 0.8}px`,
            height: `${blobPositions.secondary[1].size * 0.8}px`,
            transform: `translate(-50%, -50%)`,
          }}
        ></div>
        <div 
          className="absolute bg-gradient-to-br from-blue-600/50 to-indigo-600/50 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob-slow animation-delay-6000"
          style={{
            top: `${blobPositions.secondary[2].top}%`,
            left: `${blobPositions.secondary[2].left}%`,
            width: `${blobPositions.secondary[2].size}px`,
            height: `${blobPositions.secondary[2].size}px`,
            transform: `translate(-50%, -50%)`,
          }}
        ></div>
      </div>

      {/* Floating particles with random positions */}
      <div className="absolute inset-0 opacity-10">
        {blobPositions.particles.map((particle, index) => (
          <div
            key={index}
            className={`absolute rounded-full ${
              index < 3 ? 'animate-ping' : 'animate-pulse'
            } ${
              index === 0 ? 'bg-blue-400/60 animation-delay-1000' :
              index === 1 ? 'bg-cyan-400/60 animation-delay-3000' :
              index === 2 ? 'bg-slate-400/60 animation-delay-5000' :
              index === 3 ? 'bg-blue-300/80 animation-delay-2000' :
              'bg-indigo-300/80 animation-delay-4000'
            }`}
            style={{
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              transform: `translate(-50%, -50%)`,
            }}
          ></div>
        ))}
      </div>

      {/* Subtle grid overlay for tech aesthetic */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Animated rays/beams with random positions */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400/50 to-transparent animate-pulse animation-delay-1000"
          style={{ left: `${blobPositions.rays[0]}%` }}
        ></div>
        <div 
          className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent animate-pulse animation-delay-3000"
          style={{ left: `${blobPositions.rays[1]}%` }}
        ></div>
        <div 
          className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-slate-400/50 to-transparent animate-pulse animation-delay-5000"
          style={{ left: `${blobPositions.rays[2]}%` }}
        ></div>
      </div>
    </div>
  );
};

export default AnimatedGradientBackground;
