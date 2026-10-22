/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { EventTradition } from '../types/template';
import { Sparkles, Calendar, HeartHandshake, Compass } from 'lucide-react';

interface TraditionsSectionProps {
  onSelectTradition: (tradition: EventTradition) => void;
}

interface TraditionItem {
  id: EventTradition;
  name: string;
  urduName: string;
  paletteDescription: string;
  accentBg: string;
  borderHex: string;
  description: string;
  keyElements: string[];
}

const TRADITIONS: TraditionItem[] = [
  {
    id: 'barat',
    name: 'Barat & Shaadi',
    urduName: 'بارات و شادی',
    paletteDescription: 'Deep Crimson Velvet, Antique Gold Foil & Lapis Lazuli',
    accentBg: '#3B121B',
    borderHex: '#D4AF37',
    description: 'The monumental wedding procession where the groom arrives with family and friends. Designs capture imperial court grandeur with regal Mughal arches and formal parental invitations.',
    keyElements: ['Mughal cusped archways', 'Formal parental host listings', 'Antique 24k gold leaf borders']
  },
  {
    id: 'mehndi',
    name: 'Mehndi & Mayun',
    urduName: 'مہندی و مایوں',
    paletteDescription: 'Warm Saffron Yellow, Sangeet Teal & Marigold Amber',
    accentBg: '#1B3526',
    borderHex: '#F3B72C',
    description: 'The vibrant musical night of henna patterns, rhythmic dholak singing, and choreography. Designs celebrate joyful botanical garlands, playful color harmonies, and performance schedules.',
    keyElements: ['Hand-painted marigold garlands', 'Musical performance timelines', 'Lively jewel-tone palettes']
  },
  {
    id: 'walima',
    name: 'Walima & Reception',
    urduName: 'دعوتِ ولیمہ',
    paletteDescription: 'Warm Ivory, Soft Champagne Gold & Dusty Rose Parchment',
    accentBg: '#FAF7F2',
    borderHex: '#C5A059',
    description: 'The gracious banquet hosted by the groom’s family to celebrate the newly formed union. Emphasizes understated modern luxury, serene whitespace, and debossed floral accents.',
    keyElements: ['Debossed cotton paper textures', 'Refined serif typography', 'Subtle foliage hairline details']
  },
  {
    id: 'nikkah',
    name: 'Aqd-e-Nikkah',
    urduName: 'عقدِ نکاح',
    paletteDescription: 'Sacred Emerald, Polished Brass & Islamic Geometric Lattice',
    accentBg: '#133527',
    borderHex: '#D8B155',
    description: 'The sacred Islamic marriage covenant ceremony. Centered around solemn Quranic verses ("And We created you in pairs"), dignified Arabic calligraphy, and peaceful geometric jaali tracery.',
    keyElements: ['Bismillah & Quranic vows', 'Geometric jaali sanctuary borders', 'Intimate ceremony timelines']
  },
  {
    id: 'contemporary',
    name: 'Contemporary Minimal',
    urduName: 'جدید سادگی',
    paletteDescription: 'Sandstone, Alabaster, Warm Charcoal & Minimalist Foil',
    accentBg: '#F5F2EB',
    borderHex: '#8A7D70',
    description: 'For modern intercultural and intimate celebration aesthetics. Prioritizes quiet editorial restraint, generous typography tracking, and timeless balance without heavy ornamentation.',
    keyElements: ['Modern editorial typography', 'Understated monochromatic balance', 'Cross-cultural versatility']
  }
];

export const TraditionsSection: React.FC<TraditionsSectionProps> = ({ onSelectTradition }) => {
  return (
    <section id="traditions" className="py-16 md:py-24 bg-[#F5EFE6] border-b border-[#E7DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#8C1D30]">
            Cultural Heritage &amp; Design Architecture
          </p>
          <h2 className="mt-2 font-serif-wedding text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2B1116] leading-tight">
            Designed for every chapter of the celebration.
          </h2>
          <p className="mt-4 text-base text-[#5F5651] leading-relaxed">
            South Asian and traditional weddings are not single events—they are multi-day journeys with distinct emotional tones, rituals, and aesthetic expectations. Our template library honors each occasion with deliberate visual languages.
          </p>
        </div>

        {/* 5-Column Grid of Wedding Traditions */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRADITIONS.map((tradition) => {
            const isDark = tradition.id !== 'walima' && tradition.id !== 'contemporary';

            return (
              <div 
                key={tradition.id}
                className="group relative bg-[#FAF7F2] rounded-sm border border-[#E0D5C5] p-6 hover:border-[#8C1D30] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header with cultural script title */}
                  <div className="flex items-start justify-between gap-3 pb-3 border-b border-[#E7DFD5]">
                    <div>
                      <h3 className="font-serif-wedding text-xl font-bold text-[#2B1116]">
                        {tradition.name}
                      </h3>
                      <p className="text-xs text-[#7A6E65] mt-0.5">
                        {tradition.paletteDescription}
                      </p>
                    </div>
                    <span 
                      className="font-urdu-calligraphy text-lg font-bold shrink-0 text-[#8C1D30]" 
                      dir="rtl"
                    >
                      {tradition.urduName}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-[#5F5651] leading-relaxed">
                    {tradition.description}
                  </p>

                  {/* Signature Elements */}
                  <div className="mt-5 space-y-1.5">
                    <p className="text-[11px] font-semibold text-[#3B121B] uppercase tracking-wider">
                      Signature Elements
                    </p>
                    <ul className="text-xs text-[#6A6059] space-y-1">
                      {tradition.keyElements.map((el, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#8C1D30]" />
                          <span>{el}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Working Action to filter the gallery directly */}
                <div className="mt-6 pt-4 border-t border-[#E7DFD5]">
                  <button
                    type="button"
                    onClick={() => onSelectTradition(tradition.id)}
                    className="w-full py-2.5 px-3 text-xs font-semibold tracking-wider uppercase text-[#2B1116] bg-white border border-[#D5C2A5] hover:bg-[#5C131F] hover:text-white hover:border-[#5C131F] transition-all rounded-sm flex items-center justify-center gap-1.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C1D30]"
                  >
                    <span>View {tradition.name.split(' ')[0]} Templates</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
