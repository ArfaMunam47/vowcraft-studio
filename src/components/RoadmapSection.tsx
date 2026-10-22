/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

export const RoadmapSection: React.FC = () => {
  const milestones = [
    {
      step: 'STEP 1',
      title: 'Product Foundation & Visual Design System',
      status: 'Current Milestone · Active',
      isCurrent: true,
      isComplete: false,
      deliverables: [
        'Application identity, brand wordmark, and top bar contract',
        'Curated sample template dataset (Barat, Walima, Mehndi, Nikkah)',
        'Full vector & typography card preview architecture',
        'Live search and category filtering with instant reset',
        'Responsive mobile navigation & zero-pill design discipline'
      ]
    },
    {
      step: 'STEP 2',
      title: 'Template Selection & Personalisation Editor',
      status: 'Next Milestone',
      isCurrent: false,
      isComplete: false,
      deliverables: [
        'Interactive text form inputs for couple names, dates, and venues',
        'Real-time card canvas re-rendering as user types',
        'Bilingual Urdu calligraphy toggles & parental blessing inputs',
        'Draft template state management without fake persistence'
      ]
    },
    {
      step: 'STEP 3',
      title: 'Advanced Styling, Badges & Photo Uploads',
      status: 'Planned',
      isCurrent: false,
      isComplete: false,
      deliverables: [
        'Color palette swappers and hex gradient customizers',
        'Cultural ornament pickers (Mughal arch, jaali, botanical wreaths)',
        'Couple photo upload with circular/arch cropping and frames',
        'Live typography scaling and letter-spacing sliders'
      ]
    },
    {
      step: 'STEP 4',
      title: 'Multi-Scene Story & Motion Choreography',
      status: 'Planned',
      isCurrent: false,
      isComplete: false,
      deliverables: [
        'Multi-scene timeline: Invocation → Details → Timeline → RSVP',
        'Smooth animation easing for text entry and gold shimmer',
        'Interactive playback scrubber and scene duration controls'
      ]
    },
    {
      step: 'STEP 5',
      title: 'Licensed Audio & Client-Side Video Export',
      status: 'Planned',
      isCurrent: false,
      isComplete: false,
      deliverables: [
        'Properly licensed South Asian instrumental music tracks',
        'Volume curve and audio-sync preview',
        'High-definition MP4/WebM video rendering for WhatsApp sharing'
      ]
    },
    {
      step: 'STEP 6',
      title: 'User Accounts & Project Persistence',
      status: 'Planned',
      isCurrent: false,
      isComplete: false,
      deliverables: [
        'Secure user authentication and project cloud saving',
        'Collaborative editing with family members',
        'Multiple draft projects per couple'
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E7DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#8C1D30]">
            Engineering Integrity
          </p>
          <h2 className="mt-2 font-serif-wedding text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2B1116] leading-tight">
            Six-month incremental development roadmap.
          </h2>
          <p className="mt-4 text-base text-[#5F5651] leading-relaxed">
            In accordance with our project master brief, we do not ship half-baked, non-functional code. Each milestone is built deliberately, tested on real devices, and confirmed with the founder before moving forward.
          </p>
        </div>

        {/* Milestone Cards Timeline */}
        <div className="mt-12 space-y-4">
          {milestones.map((m) => (
            <div
              key={m.step}
              className={`p-6 rounded-sm border transition-colors ${
                m.isCurrent 
                  ? 'bg-white border-[#8C1D30] shadow-sm ring-1 ring-[#8C1D30]/20' 
                  : 'bg-[#FAF7F2] border-[#E7DFD5] opacity-90'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-[#F0EAE1]">
                <div className="flex items-center gap-3">
                  {m.isCurrent ? (
                    <Clock className="w-5 h-5 text-[#8C1D30] shrink-0" />
                  ) : (
                    <Circle className="w-5 h-5 text-[#A3978C] shrink-0" />
                  )}
                  <div>
                    <span className="text-xs font-bold text-[#8C1D30] tracking-wider uppercase">
                      {m.step}
                    </span>
                    <h3 className="font-serif-wedding text-lg sm:text-xl font-bold text-[#2B1116]">
                      {m.title}
                    </h3>
                  </div>
                </div>

                <span 
                  className={`text-[11px] font-semibold px-2.5 py-1 rounded-xs uppercase tracking-wider self-start md:self-center ${
                    m.isCurrent
                      ? 'bg-[#5C131F] text-[#FAF7F2]'
                      : 'bg-[#EFE9DF] text-[#7A6E65]'
                  }`}
                >
                  {m.status}
                </span>
              </div>

              {/* Deliverables List */}
              <div className="mt-4">
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {m.deliverables.map((d, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#5F5651]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8C1D30] mt-1.5 shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
