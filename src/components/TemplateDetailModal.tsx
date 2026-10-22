/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { WeddingTemplate } from '../types/template';
import { InvitationCardRenderer } from './InvitationCardRenderer';
import { X, Lock, Sparkles, Palette, Calendar, MapPin, Type, Layers, Info } from 'lucide-react';

interface TemplateDetailModalProps {
  template: WeddingTemplate | null;
  isOpen: boolean;
  onClose: () => void;
}

export const TemplateDetailModal: React.FC<TemplateDetailModalProps> = ({
  template,
  isOpen,
  onClose
}) => {
  const [showMilestoneExplainer, setShowMilestoneExplainer] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !template) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-template-title"
    >
      <div 
        className="relative w-full max-w-4xl bg-[#FAF7F2] rounded-sm shadow-2xl border border-[#D5C2A5] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E7DFD5] bg-[#F5EFE6]">
          <div className="flex items-center gap-2">
            <span className="font-serif-wedding font-bold text-lg text-[#2B1116]">
              Invitation Inspection
            </span>
            <span className="text-xs text-[#7A6E65]">·</span>
            <span className="text-xs font-medium text-[#8C1D30]">
              {template.traditionLabel}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1 text-[#6A6059] hover:text-[#2B1116] hover:bg-[#EBE3D6] rounded-xs transition-colors cursor-pointer"
            aria-label="Close template preview modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: 2-Column Split (Card Preview on left, Specifications on right) */}
        <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Full-Sized Card Canvas (Col 5) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm">
              <InvitationCardRenderer template={template} size="large" />
            </div>
            <p className="mt-3 text-center text-xs text-[#7A6E65] font-serif-wedding italic">
              Interactive stationery preview with authentic vector detailing
            </p>
          </div>

          {/* Right Column: Architectural & Cultural Specification (Col 7) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Title & Tagline */}
            <div>
              <div className="flex items-center gap-2 text-xs text-[#7A6E65] mb-1">
                <span>{template.culturalOrigin}</span>
                <span aria-hidden="true">·</span>
                <span>{template.styleLabel}</span>
              </div>
              <h2 id="modal-template-title" className="font-serif-wedding text-2xl sm:text-3xl font-bold text-[#2B1116]">
                {template.title}
              </h2>
              <p className="mt-1 text-sm text-[#5F5651]">
                {template.tagline}
              </p>
            </div>

            {/* Design Notes & Cultural Context */}
            <div className="p-4 rounded-sm bg-white border border-[#E7DFD5] text-xs sm:text-sm text-[#5F5651] space-y-2">
              <p><strong className="text-[#2B1116] font-semibold">Concept:</strong> {template.description}</p>
              <p><strong className="text-[#2B1116] font-semibold">Editorial Guidance:</strong> {template.designNotes}</p>
            </div>

            {/* Structured Specifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Color Scheme */}
              <div className="p-3 bg-white rounded-sm border border-[#E7DFD5]">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#2B1116] mb-2">
                  <Palette className="w-3.5 h-3.5 text-[#8C1D30]" />
                  <span>Color Architecture</span>
                </div>
                <p className="text-xs text-[#6A6059] mb-2">{template.palette.name}</p>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-[11px] font-mono text-[#7A6E65]">
                    <span 
                      className="w-4 h-4 rounded-xs border border-black/15 shrink-0" 
                      style={{ backgroundColor: template.palette.cardBg }} 
                    />
                    <span>{template.palette.cardBg}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-[#7A6E65]">
                    <span 
                      className="w-4 h-4 rounded-xs border border-black/15 shrink-0" 
                      style={{ backgroundColor: template.palette.accentGold }} 
                    />
                    <span>{template.palette.accentGold}</span>
                  </div>
                </div>
              </div>

              {/* Typography Structure */}
              <div className="p-3 bg-white rounded-sm border border-[#E7DFD5]">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#2B1116] mb-2">
                  <Type className="w-3.5 h-3.5 text-[#8C1D30]" />
                  <span>Typography Pairings</span>
                </div>
                <p className="text-xs text-[#6A6059]">
                  Display: <span className="font-serif-wedding font-medium text-[#2B1116]">Cormorant &amp; Cinzel</span>
                </p>
                <p className="text-xs text-[#6A6059] mt-0.5">
                  Body: <span className="font-medium text-[#2B1116]">Plus Jakarta Sans</span>
                </p>
                {template.sampleData.bismillahUrdu && (
                  <p className="text-xs text-[#6A6059] mt-0.5">
                    Script: <span className="font-urdu-calligraphy text-sm text-[#8C1D30]">Amiri Nastaliq</span>
                  </p>
                )}
              </div>

              {/* Ceremony Details */}
              <div className="p-3 bg-white rounded-sm border border-[#E7DFD5]">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#2B1116] mb-2">
                  <Calendar className="w-3.5 h-3.5 text-[#8C1D30]" />
                  <span>Sample Date &amp; Time</span>
                </div>
                <p className="text-xs font-medium text-[#2B1116]">{template.sampleData.eventDateFormatted}</p>
                <p className="text-[11px] text-[#7A6E65]">{template.sampleData.eventTime}</p>
              </div>

              {/* Venue Details */}
              <div className="p-3 bg-white rounded-sm border border-[#E7DFD5]">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#2B1116] mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[#8C1D30]" />
                  <span>Sample Venue</span>
                </div>
                <p className="text-xs font-medium text-[#2B1116] line-clamp-1">{template.sampleData.venueName}</p>
                <p className="text-[11px] text-[#7A6E65]">{template.sampleData.cityCountry}</p>
              </div>

            </div>

            {/* Truthful Milestone 2 Callout */}
            <div className="p-4 bg-[#F2EDE4] border border-[#DDD1C0] rounded-sm">
              <div className="flex items-start gap-2.5">
                <Info className="w-4 h-4 text-[#8C1D30] shrink-0 mt-0.5" />
                <div className="text-xs text-[#5C4F44] space-y-1">
                  <p className="font-semibold text-[#2B1116]">
                    Milestone 1 Preview Status
                  </p>
                  <p>
                    This template's layout geometry, color architecture, and cultural parameters have been verified. In <strong>Milestone 2</strong>, the full personalization editor will launch to let you customize couple names, parental hosts, dates, venues, color themes, and Urdu scripts.
                  </p>
                </div>
              </div>

              {showMilestoneExplainer && (
                <div className="mt-3 pt-3 border-t border-[#D5C2A5] text-xs text-[#4A423D] bg-white p-3 rounded-xs animate-in fade-in duration-200">
                  <p className="font-semibold text-[#8C1D30] mb-1">
                    Planned Milestone 2 Features for this Template:
                  </p>
                  <ul className="list-disc pl-4 space-y-1 text-[#6A6059]">
                    <li>Direct inline editing of names: "{template.sampleData.couplePrimary}" &amp; "{template.sampleData.coupleSecondary}"</li>
                    <li>Date picker with hijri / gregorian date synchronization</li>
                    <li>Toggle Arabic/Urdu calligraphy invocation headers</li>
                    <li>Palette color theme swapper and custom hex inputs</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Action Buttons: Honest Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={() => setShowMilestoneExplainer(!showMilestoneExplainer)}
                className="flex-1 py-3 px-4 text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#5C131F] hover:bg-[#430C16] transition-colors rounded-sm shadow-xs flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C1D30]"
              >
                <Lock className="w-3.5 h-3.5 text-[#E5C992]" />
                <span>Personalization Editor (Unlocks in Step 2)</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="py-3 px-5 text-xs font-semibold tracking-wider uppercase text-[#4A423D] bg-white border border-[#D5C2A5] hover:bg-[#F8F4EE] transition-colors rounded-sm cursor-pointer"
              >
                Close Preview
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
