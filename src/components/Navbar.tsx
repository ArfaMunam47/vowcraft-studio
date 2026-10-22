/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  brandName?: string;
  onExploreClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  brandName = 'Dawat Invitations',
  onExploreClick 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleActionClick = () => {
    setMobileMenuOpen(false);
    if (onExploreClick) {
      onExploreClick();
    } else {
      const element = document.getElementById('templates');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E7DFD5]">
      {/* 3-Zone Contract: Brand, Links, Primary Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single Text Element Brand Wordmark */}
        <a 
          href="#top" 
          onClick={(e) => handleNavClick(e, 'top')}
          className="flex items-center gap-2 group whitespace-nowrap shrink-0 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C1D30] rounded-sm"
        >
          <span className="w-8 h-8 rounded-sm bg-[#5C131F] flex items-center justify-center text-[#E5C992] shadow-sm group-hover:bg-[#480F18] transition-colors">
            <span className="font-serif-wedding font-bold text-lg leading-none">D</span>
          </span>
          <span className="font-serif-wedding text-2xl font-bold tracking-tight text-[#2B1116] group-hover:text-[#5C131F] transition-colors">
            {brandName}
          </span>
        </a>

        {/* Zone 2: 4-5 Concise Single-Line Navigation Links */}
        <nav 
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5F5651]"
          aria-label="Main Navigation"
        >
          <a
            href="#templates"
            onClick={(e) => handleNavClick(e, 'templates')}
            className="hover:text-[#2B1116] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#8C1D30] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Browse Templates
          </a>
          <a
            href="#traditions"
            onClick={(e) => handleNavClick(e, 'traditions')}
            className="hover:text-[#2B1116] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#8C1D30] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Design Traditions
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => handleNavClick(e, 'how-it-works')}
            className="hover:text-[#2B1116] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#8C1D30] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            How It Works
          </a>
          <a
            href="#personalisation"
            onClick={(e) => handleNavClick(e, 'personalisation')}
            className="hover:text-[#2B1116] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#8C1D30] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Personalisation
          </a>
          <a
            href="#roadmap"
            onClick={(e) => handleNavClick(e, 'roadmap')}
            className="hover:text-[#2B1116] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#8C1D30] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Roadmap
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={handleActionClick}
            type="button"
            className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#5C131F] hover:bg-[#430C16] active:bg-[#340911] transition-all rounded-sm shadow-sm hover:shadow whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C1D30] focus-visible:ring-offset-2"
          >
            Explore Catalogue
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#4A423D] hover:text-[#2B1116] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C1D30] rounded-sm"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E7DFD5] bg-[#FAF7F2] px-5 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            <a
              href="#templates"
              onClick={(e) => handleNavClick(e, 'templates')}
              className="text-base font-medium text-[#4A423D] hover:text-[#5C131F] py-1 transition-colors"
            >
              Browse Templates
            </a>
            <a
              href="#traditions"
              onClick={(e) => handleNavClick(e, 'traditions')}
              className="text-base font-medium text-[#4A423D] hover:text-[#5C131F] py-1 transition-colors"
            >
              Design Traditions
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => handleNavClick(e, 'how-it-works')}
              className="text-base font-medium text-[#4A423D] hover:text-[#5C131F] py-1 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#personalisation"
              onClick={(e) => handleNavClick(e, 'personalisation')}
              className="text-base font-medium text-[#4A423D] hover:text-[#5C131F] py-1 transition-colors"
            >
              Personalisation
            </a>
            <a
              href="#roadmap"
              onClick={(e) => handleNavClick(e, 'roadmap')}
              className="text-base font-medium text-[#4A423D] hover:text-[#5C131F] py-1 transition-colors"
            >
              Roadmap &amp; Milestones
            </a>
          </nav>

          <div className="pt-3 border-t border-[#E7DFD5]">
            <button
              onClick={handleActionClick}
              type="button"
              className="w-full py-3 text-center text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#5C131F] hover:bg-[#430C16] transition-colors rounded-sm shadow-sm"
            >
              Explore Catalogue
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
