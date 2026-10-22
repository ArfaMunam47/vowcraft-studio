/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FOUNDATION_TEMPLATES } from '../data/templates';
import { InvitationCardRenderer } from './InvitationCardRenderer';
import { ArrowDown, CheckCircle2, ChevronRight } from 'lucide-react';

interface HeroProps {
  onBrowseTemplates: () => void;
  onViewHowItWorks: () => void;
  onPreviewTemplate: (templateId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onBrowseTemplates,
  onViewHowItWorks,
  onPreviewTemplate
}) => {
  // Let user toggle between 3 spotlight designs in the hero display
  const spotlightTemplates = FOUNDATION_TEMPLATES.slice(0, 3);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeTemplate = spotlightTemplates[selectedIdx] || spotlightTemplates[0];

  return (
    <section id="top" className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-[#E7DFD5]">
      {/* Subtle background ambient warmth */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 -z-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 20%, #E5C992 0%, transparent 60%)'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Foundation Notice: Honest product stage indicator */}
        <div className="mb-6 flex items-center justify-start">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-[#7A6348] border-b border-[#D5C2A5] pb-1">
            <span>Milestone 1 · Product Foundation</span>
            <span aria-hidden="true">·</span>
            <span>South Asian &amp; Contemporary Wedding Collection</span>
          </div>
        </div>

        {/* 2-Column Split: Hero Proposition + Live Interactive Invitation Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Value Proposition & Clear Actions (Col 7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <h1 className="font-serif-wedding text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#2B1116] leading-[1.12] [text-wrap:balance]">
              Bespoke digital wedding invitations, crafted with cultural reverence.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#5F5651] leading-relaxed max-w-2xl">
              From grand Barat processions and joyous Mehndi celebrations to sacred Nikkahs and contemporary receptions. We are building a refined platform for creating premium, animated digital wedding stationery without graphic design complexity.
            </p>

            {/* Truthful status callout */}
            <div className="mt-6 p-4 rounded-sm bg-[#F5EFE6] border border-[#E2D5C3] max-w-xl">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8C1D30] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#5C4F44] leading-normal">
                  <strong className="font-semibold text-[#2B1116]">Real Product In Active Development:</strong> Step 1 establishes our curated template architecture and design system. Interactive personalization and scene customisation will arrive in Step 2.
                </p>
              </div>
            </div>

            {/* Actions: Primary and Secondary */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onBrowseTemplates}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#5C131F] hover:bg-[#430C16] active:bg-[#340911] transition-all rounded-sm shadow hover:shadow-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C1D30]"
              >
                <span>Browse Foundational Templates</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onViewHowItWorks}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#4A423D] bg-white border border-[#D5C2A5] hover:bg-[#F8F4EE] hover:text-[#2B1116] transition-colors rounded-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C1D30]"
              >
                <span>How Creation Works</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trust and Cultural Inclusivity Indicators (No fake stats) */}
            <div className="mt-10 pt-6 border-t border-[#E7DFD5] grid grid-cols-3 gap-4">
              <div>
                <p className="font-serif-wedding text-lg font-semibold text-[#2B1116]">Barat &amp; Shaadi</p>
                <p className="text-xs text-[#7A6E65] mt-0.5">Imperial gold &amp; crimson</p>
              </div>
              <div>
                <p className="font-serif-wedding text-lg font-semibold text-[#2B1116]">Mehndi &amp; Mayun</p>
                <p className="text-xs text-[#7A6E65] mt-0.5">Festive saffron &amp; teal</p>
              </div>
              <div>
                <p className="font-serif-wedding text-lg font-semibold text-[#2B1116]">Walima &amp; Nikkah</p>
                <p className="text-xs text-[#7A6E65] mt-0.5">Warm ivory &amp; sacred emerald</p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Showcase Card (Col 5) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Template Selector Tabs for Showcase */}
            <div className="w-full max-w-sm mb-3 flex items-center justify-between p-1 bg-[#EFE9DF] rounded-sm border border-[#E0D5C5]">
              {spotlightTemplates.map((tpl, idx) => (
                <button
                  key={tpl.id}
                  type="button"
                  onClick={() => setSelectedIdx(idx)}
                  className={`flex-1 py-1.5 px-2 text-[11px] font-medium transition-colors rounded-xs whitespace-nowrap text-center ${
                    selectedIdx === idx 
                      ? 'bg-white text-[#2B1116] shadow-xs font-semibold' 
                      : 'text-[#6A6059] hover:text-[#2B1116]'
                  }`}
                >
                  {tpl.traditionLabel.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* The Live Rendered Card Canvas */}
            <div className="w-full max-w-sm relative group">
              <div 
                className="cursor-pointer"
                onClick={() => onPreviewTemplate(activeTemplate.id)}
                title="Click to inspect this invitation in detail"
              >
                <InvitationCardRenderer 
                  template={activeTemplate} 
                  size="standard" 
                />
              </div>

              {/* Inspect Overlay Trigger */}
              <div className="mt-3 flex items-center justify-between px-1">
                <span className="text-xs text-[#7A6E65] font-serif-wedding italic">
                  {activeTemplate.title}
                </span>
                <button
                  type="button"
                  onClick={() => onPreviewTemplate(activeTemplate.id)}
                  className="text-xs font-medium text-[#5C131F] hover:underline cursor-pointer"
                >
                  Inspect Template Details →
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
