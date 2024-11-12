// components/TailwindStyleBackground.tsx
import React from 'react';

interface BackgroundProps {
  className?: string;
  opacity?: number;
}

const TailwindStyleBackground: React.FC<BackgroundProps> = ({
                                                              className = "",
                                                              opacity = 1
                                                            }) => {
  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden bg-gray-900 ${className}`}>
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        style={{ opacity }}
      >
        <defs>
          {/* Base radial gradient */}
          <radialGradient id="radialDark" cx="50%" cy="50%" r="70%">
            <stop offset="0%" style={{ stopColor: '#0f172a', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#020617', stopOpacity: 1 }} />
          </radialGradient>

          {/* Gradient for blobs */}
          <linearGradient id="blob1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.3 }} />
          </linearGradient>

          <linearGradient id="blob2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.3 }} />
          </linearGradient>

          {/* Noise filter */}
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0.1" />
            <feBlend in="SourceGraphic" mode="overlay" />
          </filter>

          {/* Blur filter for blobs */}
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="60" />
          </filter>
        </defs>

        {/* Dark background */}
        <rect
          width="100%"
          height="100%"
          fill="url(#radialDark)"
        />

        {/* Blurred gradient blobs */}
        <circle
          cx="30%"
          cy="30%"
          r="400"
          fill="url(#blob1)"
          filter="url(#blur)"
          opacity="0.6"
        />

        <circle
          cx="70%"
          cy="60%"
          r="500"
          fill="url(#blob2)"
          filter="url(#blur)"
          opacity="0.5"
        />

        {/* Mesh pattern */}
        <path
          d="M0 40h1920M0 80h1920M0 120h1920M0 160h1920M0 200h1920"
          stroke="rgba(148, 163, 184, 0.05)"
          strokeWidth="0.5"
          strokeDasharray="8 4"
        />
        <path
          d="M40 0v1080M80 0v1080M120 0v1080M160 0v1080M200 0v1080"
          stroke="rgba(148, 163, 184, 0.05)"
          strokeWidth="0.5"
          strokeDasharray="8 4"
        />

        {/* Subtle noise overlay */}
        <rect
          width="100%"
          height="100%"
          filter="url(#noise)"
          opacity="0.05"
        />
      </svg>

      {/* Optional gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/10 to-transparent"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
        }}
      />
    </div>
  );
};

export default TailwindStyleBackground;

// Example usage with Layout component
interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
  return (
    <div className={`relative min-h-screen ${className}`}>
      <TailwindStyleBackground />
      <div className="relative">
        {children}
      </div>
    </div>
  );
};