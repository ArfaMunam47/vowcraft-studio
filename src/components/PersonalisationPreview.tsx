/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Type, Palette, Scissors, CalendarClock, Check, Sparkles } from 'lucide-react';

export const PersonalisationPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'typography' | 'colors' | 'ornaments' | 'timeline'>('typography');

  return (
    <section id="personalisation" className="py-16 md:py-24 bg-[#F5EFE6] border-b border-[#E7DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#8C1D30]">
            Upcoming Personalisation Engine
          </p>
          <h2 className="mt-2 font-serif-wedding text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2B1116] leading-tight">
            Designed for intimate customization.
          </h2>
          <p className="mt-4 text-base text-[#5F5651] leading-relaxed">
            In Milestone 2 and 3, our personalization engine will give couples complete creative ownership over their invitations without needing Photoshop, Canva, or graphic design training.
          </p>
        </div>

        {/* Feature Tabs Selector */}
        <div className="mt-10 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveTab('typography')}
            className={`py-2.5 px-4 text-xs font-semibold rounded-sm whitespace-nowrap transition-colors flex items-center gap-2 cursor-pointer border ${
              activeTab === 'typography'
                ? 'bg-[#5C131F] text-[#FAF7F2] border-[#5C131F]'
                : 'bg-white text-[#5F5651] border-[#D5C2A5] hover:text-[#2B1116]'
            }`}
          >
            <Type className="w-4 h-4" />
            <span>Bilingual Typography</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('colors')}
            className={`py-2.5 px-4 text-xs font-semibold rounded-sm whitespace-nowrap transition-colors flex items-center gap-2 cursor-pointer border ${
              activeTab === 'colors'
                ? 'bg-[#5C131F] text-[#FAF7F2] border-[#5C131F]'
                : 'bg-white text-[#5F5651] border-[#D5C2A5] hover:text-[#2B1116]'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>Palettes &amp; Gold Foils</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('ornaments')}
            className={`py-2.5 px-4 text-xs font-semibold rounded-sm whitespace-nowrap transition-colors flex items-center gap-2 cursor-pointer border ${
              activeTab === 'ornaments'
                ? 'bg-[#5C131F] text-[#FAF7F2] border-[#5C131F]'
                : 'bg-white text-[#5F5651] border-[#D5C2A5] hover:text-[#2B1116]'
            }`}
          >
            <Scissors className="w-4 h-4" />
            <span>Architectural Motifs</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('timeline')}
            className={`py-2.5 px-4 text-xs font-semibold rounded-sm whitespace-nowrap transition-colors flex items-center gap-2 cursor-pointer border ${
              activeTab === 'timeline'
                ? 'bg-[#5C131F] text-[#FAF7F2] border-[#5C131F]'
                : 'bg-white text-[#5F5651] border-[#D5C2A5] hover:text-[#2B1116]'
            }`}
          >
            <CalendarClock className="w-4 h-4" />
            <span>Multi-Event Timelines</span>
          </button>
        </div>

        {/* Interactive Tab Showcase Content */}
        <div className="mt-8 bg-white rounded-sm border border-[#E0D5C5] p-6 lg:p-10 shadow-xs">
          
          {/* TAB 1: Typography */}
          {activeTab === 'typography' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-semibold text-[#8C1D30] uppercase tracking-wider">
                  Script Support
                </span>
                <h3 className="font-serif-wedding text-2xl sm:text-3xl font-bold text-[#2B1116]">
                  Fluent in English &amp; Urdu Calligraphy
                </h3>
                <p className="text-sm text-[#5F5651] leading-relaxed">
                  Invitations require respect for traditional invocations. Our typography engine supports Quranic verses (Bismillah, Ayat-un-Noor), parental blessings in Nastaliq Urdu, and modern serif typography for international guest comprehension.
                </p>
                <div className="pt-2 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#4A423D]">
                    <Check className="w-4 h-4 text-[#8C1D30]" />
                    <span>Traditional Urdu calligraphic headers (Amiri &amp; Nastaliq)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#4A423D]">
                    <Check className="w-4 h-4 text-[#8C1D30]" />
                    <span>Timeless display serifs (Cormorant Garamond, Cinzel)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#4A423D]">
                    <Check className="w-4 h-4 text-[#8C1D30]" />
                    <span>Accessible body typography for venues, addresses, and maps</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 p-6 rounded-sm bg-[#FAF7F2] border border-[#E7DFD5] text-center space-y-4">
                <p className="font-urdu-calligraphy text-2xl text-[#8C1D30]" dir="rtl">
                  بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
                </p>
                <p className="font-serif-wedding text-xl italic text-[#5F5651]">
                  "And We created you in pairs"
                </p>
                <div className="w-24 h-px bg-[#D5C2A5] mx-auto" />
                <h4 className="font-serif-wedding text-2xl font-bold text-[#2B1116]">
                  Hamza Tariq &amp; Ayesha Farooq
                </h4>
                <p className="text-xs font-sans text-[#7A6E65] tracking-widest uppercase">
                  Friday, 18th December 2026 · Lahore
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: Colors */}
          {activeTab === 'colors' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-semibold text-[#8C1D30] uppercase tracking-wider">
                  Color Harmony
                </span>
                <h3 className="font-serif-wedding text-2xl sm:text-3xl font-bold text-[#2B1116]">
                  Curated Wedding Palettes &amp; Metallic Foils
                </h3>
                <p className="text-sm text-[#5F5651] leading-relaxed">
                  Every wedding has an intentional wardrobe and floral aesthetic. Our color system provides pre-tested harmonious palettes with realistic gold, champagne, and rose-gold metallic foil trims.
                </p>
                <div className="pt-2 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#4A423D]">
                    <Check className="w-4 h-4 text-[#8C1D30]" />
                    <span>High-contrast WCAG AA accessible text combinations</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#4A423D]">
                    <Check className="w-4 h-4 text-[#8C1D30]" />
                    <span>Realistic metallic foil shimmer gradients</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#4A423D]">
                    <Check className="w-4 h-4 text-[#8C1D30]" />
                    <span>Custom background textures: Cotton paper, silk weave, velvet</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-sm bg-[#3B121B] text-[#F7E7CE] border border-[#D4AF37]">
                  <p className="text-xs font-semibold text-[#D4AF37]">Royal Barat</p>
                  <p className="font-serif-wedding text-base mt-1">Velvet Crimson &amp; Gold</p>
                </div>
                <div className="p-4 rounded-sm bg-[#FAF7F2] text-[#2C2623] border border-[#C5A059]">
                  <p className="text-xs font-semibold text-[#C5A059]">Walima Reception</p>
                  <p className="font-serif-wedding text-base mt-1">Ivory &amp; Champagne</p>
                </div>
                <div className="p-4 rounded-sm bg-[#133527] text-[#FBF7EE] border border-[#D8B155]">
                  <p className="text-xs font-semibold text-[#D8B155]">Sacred Nikkah</p>
                  <p className="font-serif-wedding text-base mt-1">Emerald &amp; Brass Jaali</p>
                </div>
                <div className="p-4 rounded-sm bg-[#481732] text-[#FFF5F0] border border-[#E5B84B]">
                  <p className="text-xs font-semibold text-[#E5B84B]">Festive Mehndi</p>
                  <p className="font-serif-wedding text-base mt-1">Plum Wine &amp; Saffron</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Ornaments */}
          {activeTab === 'ornaments' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-semibold text-[#8C1D30] uppercase tracking-wider">
                  Heritage Geometry
                </span>
                <h3 className="font-serif-wedding text-2xl sm:text-3xl font-bold text-[#2B1116]">
                  Mughal Arches, Jaali &amp; Botanical Tracery
                </h3>
                <p className="text-sm text-[#5F5651] leading-relaxed">
                  Wedding invitations are sacred keepsakes. Rather than generic clip art, our ornament library draws from historic Mughal architectural arches, geometric sanctuary screens, and delicate hand-drawn botanicals.
                </p>
                <div className="pt-2 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#4A423D]">
                    <Check className="w-4 h-4 text-[#8C1D30]" />
                    <span>Cusped Mughal arches with filigree crests</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#4A423D]">
                    <Check className="w-4 h-4 text-[#8C1D30]" />
                    <span>Islamic 8-point geometric jaali lattice patterns</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#4A423D]">
                    <Check className="w-4 h-4 text-[#8C1D30]" />
                    <span>Hand-crafted couple monogram seals &amp; wax stamps</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 p-6 rounded-sm bg-[#FAF7F2] border border-[#E7DFD5] flex flex-col items-center justify-center text-center">
                <svg className="w-48 h-24 stroke-[#8C1D30] fill-none" viewBox="0 0 200 80">
                  <path d="M 20 80 Q 20 30, 60 25 Q 85 20, 100 2 Q 115 20, 140 25 Q 180 30, 180 80" strokeWidth="1.5" />
                  <circle cx="100" cy="18" r="4" fill="#8C1D30" />
                </svg>
                <p className="font-serif-wedding text-lg font-bold text-[#2B1116] mt-2">
                  Imperial Cusped Arch
                </p>
                <p className="text-xs text-[#7A6E65] max-w-xs mt-1">
                  Historically used in royal palaces across Lahore, Agra, and Delhi to symbolize dignified entrance and celebration.
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: Timelines */}
          {activeTab === 'timeline' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-semibold text-[#8C1D30] uppercase tracking-wider">
                  Event Sequencing
                </span>
                <h3 className="font-serif-wedding text-2xl sm:text-3xl font-bold text-[#2B1116]">
                  Complete Multi-Day Wedding Suites
                </h3>
                <p className="text-sm text-[#5F5651] leading-relaxed">
                  South Asian weddings rarely happen in a single evening. The upcoming editor will allow you to generate cohesive multi-event suites where Mehndi, Barat, and Walima cards share typography and motifs while having distinct color palettes.
                </p>
                <div className="pt-2 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#4A423D]">
                    <Check className="w-4 h-4 text-[#8C1D30]" />
                    <span>Synchronized couple names and parental hosts across events</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#4A423D]">
                    <Check className="w-4 h-4 text-[#8C1D30]" />
                    <span>Distinct dress code announcements (e.g. Traditional Mehndi Green)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#4A423D]">
                    <Check className="w-4 h-4 text-[#8C1D30]" />
                    <span>RSVP contact details for both families</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-3">
                <div className="p-3 bg-[#FAF7F2] border border-[#E7DFD5] rounded-sm flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#8C1D30]">Day 1: Mehndi &amp; Sangeet</span>
                    <p className="text-[11px] text-[#6A6059]">Wednesday, 16th Dec · 7:00 PM · Festive Attire</p>
                  </div>
                  <span className="text-[11px] font-semibold text-[#1B5E20] bg-[#EBF5EE] px-2 py-0.5 rounded-xs">Suite Linked</span>
                </div>
                <div className="p-3 bg-[#FAF7F2] border border-[#E7DFD5] rounded-sm flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#8C1D30]">Day 2: Grand Barat Banquet</span>
                    <p className="text-[11px] text-[#6A6059]">Friday, 18th Dec · 8:00 PM · Formal Attire</p>
                  </div>
                  <span className="text-[11px] font-semibold text-[#1B5E20] bg-[#EBF5EE] px-2 py-0.5 rounded-xs">Suite Linked</span>
                </div>
                <div className="p-3 bg-[#FAF7F2] border border-[#E7DFD5] rounded-sm flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#8C1D30]">Day 3: Walima Reception</span>
                    <p className="text-[11px] text-[#6A6059]">Sunday, 20th Dec · 8:00 PM · Elegant Evening</p>
                  </div>
                  <span className="text-[11px] font-semibold text-[#1B5E20] bg-[#EBF5EE] px-2 py-0.5 rounded-xs">Suite Linked</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
