/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface FooterProps {
  brandName?: string;
  onNavigateSection?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  brandName = 'Dawat Invitations',
  onNavigateSection 
}) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (onNavigateSection) {
      onNavigateSection(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#241A1C] text-[#D8CECA] border-t border-[#3D2E31]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-[#3D2E31]">
          
          {/* Brand & Purpose (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-sm bg-[#5C131F] flex items-center justify-center text-[#E5C992] text-sm font-bold font-serif-wedding">
                D
              </span>
              <span className="font-serif-wedding text-2xl font-bold tracking-tight text-[#FAF7F2]">
                {brandName}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#A89C98] leading-relaxed max-w-sm">
              A bespoke digital wedding stationery platform honoring South Asian and contemporary marriage celebrations. Engineered with cultural reverence, typographic precision, and accessible design.
            </p>

            <div className="pt-2 text-xs text-[#8F817D]">
              <span>Active Milestone: </span>
              <span className="text-[#E5C992] font-semibold">Step 1 — Product Foundation</span>
            </div>
          </div>

          {/* Quick Navigation Mirror (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-wedding text-sm font-semibold tracking-wider uppercase text-[#FAF7F2]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#A89C98]">
              <li>
                <a 
                  href="#templates" 
                  onClick={(e) => handleLinkClick(e, 'templates')}
                  className="hover:text-[#FAF7F2] transition-colors"
                >
                  Browse Template Gallery
                </a>
              </li>
              <li>
                <a 
                  href="#traditions" 
                  onClick={(e) => handleLinkClick(e, 'traditions')}
                  className="hover:text-[#FAF7F2] transition-colors"
                >
                  Wedding Traditions (Barat, Walima, Mehndi)
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works" 
                  onClick={(e) => handleLinkClick(e, 'how-it-works')}
                  className="hover:text-[#FAF7F2] transition-colors"
                >
                  How Creation Works
                </a>
              </li>
              <li>
                <a 
                  href="#personalisation" 
                  onClick={(e) => handleLinkClick(e, 'personalisation')}
                  className="hover:text-[#FAF7F2] transition-colors"
                >
                  Personalisation Capabilities
                </a>
              </li>
              <li>
                <a 
                  href="#roadmap" 
                  onClick={(e) => handleLinkClick(e, 'roadmap')}
                  className="hover:text-[#FAF7F2] transition-colors"
                >
                  Milestones &amp; Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Design Traditions (Col 4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif-wedding text-sm font-semibold tracking-wider uppercase text-[#FAF7F2]">
              Traditions Covered
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#A89C98]">
              <span>· Barat &amp; Shaadi Banquets</span>
              <span>· Walima Receptions</span>
              <span>· Mehndi &amp; Mayun Nights</span>
              <span>· Solemnization of Nikkah</span>
              <span>· Sangeet &amp; Dholak</span>
              <span>· Contemporary Minimalist</span>
            </div>

            <div className="mt-4 p-3 rounded-xs bg-[#2E2124] border border-[#3E2E32] text-[11px] text-[#A89C98]">
              <strong className="text-[#FAF7F2]">Founder Note:</strong> Built iteratively as a computer science student capstone. Committed to sustainable, test-driven product development.
            </div>
          </div>

        </div>

        {/* Quiet Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8F817D]">
          <p>
            &copy; {new Date().getFullYear()} {brandName}. All rights reserved. Designed for real couples.
          </p>

          <div className="flex items-center gap-6">
            <span>Original design schemas</span>
            <span aria-hidden="true">·</span>
            <span>WCAG AA accessible</span>
            <span aria-hidden="true">·</span>
            <a 
              href="#top" 
              onClick={(e) => handleLinkClick(e, 'top')}
              className="text-[#E5C992] hover:underline"
            >
              Back to top ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
