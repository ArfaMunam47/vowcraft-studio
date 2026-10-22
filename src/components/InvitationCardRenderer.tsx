/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { WeddingTemplate } from '../types/template';

interface InvitationCardRendererProps {
  template: WeddingTemplate;
  size?: 'compact' | 'standard' | 'large';
  interactive?: boolean;
}

export const InvitationCardRenderer: React.FC<InvitationCardRendererProps> = ({
  template,
  size = 'standard',
}) => {
  const { palette, sampleData, ornamentType } = template;

  // Extract initials for the seal monogram
  const firstInitial = sampleData.couplePrimary.charAt(0);
  const secondInitial = sampleData.coupleSecondary.charAt(0);

  const isCompact = size === 'compact';
  const isLarge = size === 'large';

  return (
    <div
      className={`relative w-full aspect-[3/4] rounded-sm overflow-hidden select-none transition-transform duration-300 shadow-md ${
        isCompact ? 'p-3.5 sm:p-4' : isLarge ? 'p-6 sm:p-8' : 'p-5 sm:p-6'
      }`}
      style={{
        backgroundColor: palette.cardBg,
        boxShadow: `0 10px 30px -10px ${palette.background}80, inset 0 0 0 1px ${palette.cardBorder}33`
      }}
      aria-label={`Wedding Invitation Card for ${sampleData.couplePrimary} and ${sampleData.coupleSecondary}`}
    >
      {/* Subtle organic paper texture layer */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(${palette.cardBorder} 0.75px, transparent 0.75px)`,
          backgroundSize: '16px 16px'
        }}
        aria-hidden="true"
      />

      {/* Decorative Outer Hairline Border */}
      <div 
        className="absolute inset-2 sm:inset-3 border pointer-events-none transition-colors"
        style={{ borderColor: `${palette.cardBorder}66` }}
        aria-hidden="true"
      />

      {/* Decorative Inner Border with Corner Accents */}
      <div 
        className="absolute inset-3 sm:inset-4 border pointer-events-none transition-colors"
        style={{ borderColor: palette.cardBorder }}
        aria-hidden="true"
      >
        {/* Four Corner Rosette Ornaments */}
        <div 
          className="absolute -top-1 -left-1 w-2 h-2 rotate-45"
          style={{ backgroundColor: palette.cardBorder }}
        />
        <div 
          className="absolute -top-1 -right-1 w-2 h-2 rotate-45"
          style={{ backgroundColor: palette.cardBorder }}
        />
        <div 
          className="absolute -bottom-1 -left-1 w-2 h-2 rotate-45"
          style={{ backgroundColor: palette.cardBorder }}
        />
        <div 
          className="absolute -bottom-1 -right-1 w-2 h-2 rotate-45"
          style={{ backgroundColor: palette.cardBorder }}
        />
      </div>

      {/* Architectural & Cultural Motifs */}
      {ornamentType === 'mughal-arch' && (
        <svg
          className="absolute inset-x-0 top-3 sm:top-4 mx-auto w-4/5 h-20 opacity-30 pointer-events-none"
          viewBox="0 0 200 60"
          fill="none"
          stroke={palette.accentGold}
          strokeWidth="0.75"
          aria-hidden="true"
        >
          <path d="M 20 60 Q 20 25, 60 20 Q 85 18, 100 2 Q 115 18, 140 20 Q 180 25, 180 60" />
          <path d="M 30 60 Q 30 30, 65 25 Q 85 22, 100 8 Q 115 22, 135 25 Q 170 30, 170 60" strokeDasharray="2,2" />
          <circle cx="100" cy="15" r="3" fill={palette.accentGold} />
        </svg>
      )}

      {ornamentType === 'geometric-jaali' && (
        <svg
          className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
          stroke={palette.accentGold}
          strokeWidth="0.5"
          aria-hidden="true"
        >
          <pattern id={`jaali-${template.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="5" y="5" width="10" height="10" transform="rotate(45 10 10)" fill="none" stroke={palette.accentGold} strokeWidth="0.5" />
            <circle cx="10" cy="10" r="1.5" fill={palette.accentGold} />
          </pattern>
          <rect width="100%" height="100%" fill={`url(#jaali-${template.id})`} />
        </svg>
      )}

      {ornamentType === 'floral-botanical' && (
        <svg
          className="absolute inset-x-0 top-3 sm:top-4 mx-auto w-3/4 h-16 opacity-35 pointer-events-none"
          viewBox="0 0 160 40"
          fill="none"
          stroke={palette.accentGold}
          strokeWidth="0.8"
          aria-hidden="true"
        >
          <path d="M 20 25 C 50 15, 70 30, 80 15 C 90 30, 110 15, 140 25" />
          <path d="M 80 15 C 75 5, 85 5, 80 15 Z" fill={palette.accentGold} />
          <circle cx="50" cy="20" r="2" fill={palette.accentGold} />
          <circle cx="110" cy="20" r="2" fill={palette.accentGold} />
        </svg>
      )}

      {/* Main Card Typography & Content Layout */}
      <div className="relative z-10 h-full flex flex-col justify-between items-center text-center px-2 py-1">
        
        {/* Header Block: Calligraphy & Traditional Invocation */}
        <div className="flex flex-col items-center pt-1 sm:pt-2 max-w-full">
          {sampleData.bismillahUrdu ? (
            <div
              className={`font-urdu-calligraphy leading-tight tracking-wider mb-1 ${
                isCompact ? 'text-sm sm:text-base' : isLarge ? 'text-xl sm:text-2xl' : 'text-base sm:text-lg'
              }`}
              style={{ color: palette.accentGold }}
              dir="rtl"
            >
              {sampleData.bismillahUrdu}
            </div>
          ) : (
            <div 
              className="w-12 h-px my-2" 
              style={{ backgroundColor: `${palette.cardBorder}80` }}
            />
          )}

          <p 
            className={`font-serif-wedding italic tracking-wide px-2 line-clamp-1 ${
              isCompact ? 'text-[9px] sm:text-[10px]' : isLarge ? 'text-xs sm:text-sm' : 'text-[11px] sm:text-xs'
            }`}
            style={{ color: palette.secondaryText }}
          >
            {sampleData.headerKicker}
          </p>

          {sampleData.parentsKicker && !isCompact && (
            <p 
              className="text-[10px] sm:text-[11px] font-sans px-3 mt-1 leading-snug line-clamp-2"
              style={{ color: palette.secondaryText }}
            >
              {sampleData.parentsKicker}
            </p>
          )}
        </div>

        {/* Centerpiece: Couple Names & Event Title */}
        <div className="my-auto py-1 sm:py-2 flex flex-col items-center max-w-full">
          <div className="flex flex-col items-center">
            <h3 
              className={`font-serif-wedding font-semibold tracking-wide capitalize leading-none ${
                isCompact 
                  ? 'text-base sm:text-lg' 
                  : isLarge 
                    ? 'text-2xl sm:text-3xl' 
                    : 'text-xl sm:text-2xl'
              }`}
              style={{ color: palette.primaryText }}
            >
              {sampleData.couplePrimary}
            </h3>

            <div 
              className={`font-serif-wedding italic my-0.5 sm:my-1 ${
                isCompact ? 'text-xs' : isLarge ? 'text-lg' : 'text-sm'
              }`}
              style={{ color: palette.accentGold }}
            >
              &amp;
            </div>

            <h3 
              className={`font-serif-wedding font-semibold tracking-wide capitalize leading-none ${
                isCompact 
                  ? 'text-base sm:text-lg' 
                  : isLarge 
                    ? 'text-2xl sm:text-3xl' 
                    : 'text-xl sm:text-2xl'
              }`}
              style={{ color: palette.primaryText }}
            >
              {sampleData.coupleSecondary}
            </h3>
          </div>

          <div 
            className="flex items-center gap-2 mt-2 sm:mt-3 px-3 py-0.5"
            style={{ borderTop: `1px solid ${palette.cardBorder}40`, borderBottom: `1px solid ${palette.cardBorder}40` }}
          >
            <span 
              className={`font-display-wedding tracking-[0.18em] uppercase ${
                isCompact ? 'text-[8px] sm:text-[9px]' : isLarge ? 'text-xs' : 'text-[10px] sm:text-[11px]'
              }`}
              style={{ color: palette.accentGold }}
            >
              {sampleData.eventTitle}
            </span>
          </div>
        </div>

        {/* Footer Block: Date, Venue & Monogram Seal */}
        <div className="w-full flex flex-col items-center pb-1">
          {/* Date & Time */}
          <div className="flex flex-col items-center mb-1 sm:mb-2">
            <span 
              className={`font-serif-wedding font-medium tracking-wide ${
                isCompact ? 'text-[10px] sm:text-xs' : isLarge ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
              }`}
              style={{ color: palette.primaryText }}
            >
              {sampleData.eventDateFormatted}
            </span>
            <span 
              className={`text-[9px] sm:text-[10px] font-sans tracking-wider ${
                isCompact ? 'hidden sm:inline' : 'inline'
              }`}
              style={{ color: palette.secondaryText }}
            >
              {sampleData.eventTime}
            </span>
          </div>

          {/* Venue & City */}
          <p 
            className={`font-sans tracking-wide px-2 leading-tight ${
              isCompact ? 'text-[8px] sm:text-[9px] line-clamp-1' : isLarge ? 'text-xs' : 'text-[10px] line-clamp-1'
            }`}
            style={{ color: palette.secondaryText }}
          >
            {sampleData.venueName} · {sampleData.cityCountry}
          </p>

          {/* Golden Seal Monogram */}
          <div 
            className={`mt-1.5 sm:mt-2 rounded-full flex items-center justify-center border transition-transform ${
              isCompact ? 'w-5 h-5 text-[8px]' : isLarge ? 'w-8 h-8 text-xs' : 'w-6 h-6 text-[9px]'
            }`}
            style={{
              borderColor: palette.accentGold,
              backgroundColor: `${palette.cardBg}`,
              color: palette.accentGold,
              boxShadow: `0 0 10px ${palette.accentGold}25`
            }}
            title={`${firstInitial} & ${secondInitial} Monogram Seal`}
          >
            <span className="font-serif-wedding font-bold tracking-tighter">
              {firstInitial}&amp;{secondInitial}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
