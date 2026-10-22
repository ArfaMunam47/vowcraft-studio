/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Compass, PenTool, Film, Share2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      stepNumber: '01',
      title: 'Choose Tradition & Aesthetic',
      status: 'Live in Step 1',
      isLive: true,
      icon: Compass,
      description: 'Explore curated designs tuned for Barat, Mehndi, Walima, Nikkah, and modern celebrations. Select a template honoring your cultural heritage, event palette, and architectural preferences.',
      details: 'Browsing, tradition classification, and high-fidelity stationery schemas are active now.'
    },
    {
      stepNumber: '02',
      title: 'Personalise Details & Typography',
      status: 'Coming in Step 2',
      isLive: false,
      icon: PenTool,
      description: 'Input couple names, parental hosts, ceremony venues, and celebration timelines. Toggle bilingual Urdu & English calligraphy, adjust color accents, and customize border ornaments.',
      details: 'Full interactive form editor and real-time canvas updates arrive in our next milestone.'
    },
    {
      stepNumber: '03',
      title: 'Sequence Motion & Transitions',
      status: 'Planned for Step 4',
      isLive: false,
      icon: Film,
      description: 'Design multi-scene animated stories: from the sacred opening Bismillah to the wedding schedule, couple photo reveal, and RSVP details with cinematic motion easing.',
      details: 'Timeline choreography and scene transition controls will be built in Step 4.'
    },
    {
      stepNumber: '04',
      title: 'Render Audio & Share Digitally',
      status: 'Planned for Step 5',
      isLive: false,
      icon: Share2,
      description: 'Select licensed classical background music (shehnai, rubab, or ambient strings), preview volume levels, and render high-definition video invitations for WhatsApp and social sharing.',
      details: 'Client-side video rendering and audio composition will be integrated in Step 5.'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E7DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#8C1D30]">
            Transparent Product Roadmap
          </p>
          <h2 className="mt-2 font-serif-wedding text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2B1116] leading-tight">
            How the creation process is engineered.
          </h2>
          <p className="mt-4 text-base text-[#5F5651] leading-relaxed">
            Rather than building a fragile prototype, we are developing our wedding invitation platform systematically. Here is the exact path from our current foundation to full animated video export.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div 
                key={step.stepNumber}
                className="relative bg-white rounded-sm border border-[#E7DFD5] p-6 flex flex-col justify-between hover:border-[#8C1D30] transition-colors"
              >
                <div>
                  {/* Step Header: Natural editorial numbering & live status indicator */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#F0EAE1]">
                    <span className="font-serif-wedding text-2xl font-bold text-[#8C1D30]">
                      {step.stepNumber}
                    </span>
                    <span 
                      className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-xs ${
                        step.isLive 
                          ? 'bg-[#EBF5EE] text-[#1B5E20] border border-[#C8E6C9]' 
                          : 'bg-[#F5F2EB] text-[#7A6E65] border border-[#E0D7C9]'
                      }`}
                    >
                      {step.status}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="mt-4 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xs bg-[#FAF7F2] border border-[#E7DFD5] flex items-center justify-center text-[#5C131F]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif-wedding text-lg font-bold text-[#2B1116]">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-[#5F5651] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Engineering Milestone Note */}
                <div className="mt-6 pt-3 border-t border-[#F0EAE1]">
                  <p className="text-[11px] text-[#7A6E65] italic">
                    {step.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Founder Commitment Banner */}
        <div className="mt-12 p-6 rounded-sm bg-[#F5EFE6] border border-[#E0D5C5]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h4 className="font-serif-wedding text-lg font-bold text-[#2B1116]">
                Built for longevity, accessibility, and real couples
              </h4>
              <p className="text-xs sm:text-sm text-[#5F5651] mt-1 max-w-2xl">
                We believe in authentic functionality before cosmetic marketing. Each feature in this sequence undergoes rigorous cross-device testing and visual inspection before release.
              </p>
            </div>
            <a
              href="#roadmap"
              className="text-xs font-semibold text-[#8C1D30] hover:text-[#5C131F] uppercase tracking-wider whitespace-nowrap self-start md:self-center"
            >
              Inspect Milestone Roadmap →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
