/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  WeddingTemplate, 
  EventTradition, 
  VisualStyle 
} from '../types/template';
import { 
  FOUNDATION_TEMPLATES, 
  EVENT_TRADITION_TABS, 
  VISUAL_STYLE_OPTIONS 
} from '../data/templates';
import { InvitationCardRenderer } from './InvitationCardRenderer';
import { Search, RotateCcw, Eye, Lock, SlidersHorizontal } from 'lucide-react';

interface TemplateGalleryProps {
  selectedTradition: EventTradition | 'all';
  onSelectTradition: (tradition: EventTradition | 'all') => void;
  onPreviewTemplate: (templateId: string) => void;
}

export const TemplateGallery: React.FC<TemplateGalleryProps> = ({
  selectedTradition,
  onSelectTradition,
  onPreviewTemplate,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<VisualStyle | 'all'>('all');

  // Filter templates based on tradition, style, and search query
  const filteredTemplates = useMemo(() => {
    return FOUNDATION_TEMPLATES.filter((template) => {
      // 1. Tradition filter
      if (selectedTradition !== 'all' && template.tradition !== selectedTradition) {
        return false;
      }

      // 2. Style filter
      if (selectedStyle !== 'all' && template.style !== selectedStyle) {
        return false;
      }

      // 3. Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = template.title.toLowerCase().includes(query);
        const matchesTradition = template.traditionLabel.toLowerCase().includes(query);
        const matchesStyle = template.styleLabel.toLowerCase().includes(query);
        const matchesTags = template.tags.some(tag => tag.toLowerCase().includes(query));
        const matchesCouple = 
          template.sampleData.couplePrimary.toLowerCase().includes(query) ||
          template.sampleData.coupleSecondary.toLowerCase().includes(query);
        const matchesVenue = template.sampleData.venueName.toLowerCase().includes(query);

        return matchesTitle || matchesTradition || matchesStyle || matchesTags || matchesCouple || matchesVenue;
      }

      return true;
    });
  }, [selectedTradition, selectedStyle, searchQuery]);

  const handleResetFilters = () => {
    setSearchQuery('');
    onSelectTradition('all');
    setSelectedStyle('all');
  };

  const isFiltered = selectedTradition !== 'all' || selectedStyle !== 'all' || searchQuery.trim() !== '';

  return (
    <section id="templates" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E7DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E7DFD5]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#8C1D30] mb-2">
              <span>Template Catalogue</span>
              <span aria-hidden="true">·</span>
              <span>Milestone 1 Architecture</span>
            </div>
            <h2 className="font-serif-wedding text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2B1116] leading-tight">
              Curated Foundational Collection
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#5F5651]">
              Explore our initial collection of authentic wedding invitations. Each design is structurally composed with customizable typography, colors, and motifs ready for our Step 2 editor.
            </p>
          </div>

          {/* Result Count and Reset Button */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-medium text-[#7A6E65] tabular-nums">
              Showing {filteredTemplates.length} of {FOUNDATION_TEMPLATES.length} templates
            </span>
            {isFiltered && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#8C1D30] hover:text-[#5C131F] bg-[#FAF2F2] border border-[#E9C8CE] rounded-sm transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Filter Controls Row: Search & Dropdowns */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          
          {/* Live Search Input (Col 6) */}
          <div className="md:col-span-6 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C827A] pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, event, couple, city, or style..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-[#D5C2A5] rounded-sm placeholder-[#9C928A] text-[#2B1116] focus:outline-none focus:ring-1 focus:ring-[#8C1D30] focus:border-[#8C1D30] transition-colors"
              aria-label="Search templates by keyword"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C827A] hover:text-[#2B1116] px-1"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Aesthetic Style Selector (Col 6) */}
          <div className="md:col-span-6 flex items-center justify-start md:justify-end gap-2">
            <label htmlFor="style-select" className="text-xs font-medium text-[#6A6059] whitespace-nowrap flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Aesthetic:</span>
            </label>
            <select
              id="style-select"
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value as VisualStyle | 'all')}
              className="py-2.5 px-3 text-xs bg-white border border-[#D5C2A5] rounded-sm text-[#2B1116] focus:outline-none focus:ring-1 focus:ring-[#8C1D30] focus:border-[#8C1D30] cursor-pointer"
            >
              {VISUAL_STYLE_OPTIONS.map((style) => (
                <option key={style.id} value={style.id}>
                  {style.label}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Tradition Filter Tabs (Segmented Button Controls) */}
        <div className="mt-6 flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {EVENT_TRADITION_TABS.map((tab) => {
            const isActive = selectedTradition === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onSelectTradition(tab.id as EventTradition | 'all')}
                className={`py-2 px-4 text-xs font-medium rounded-sm whitespace-nowrap shrink-0 transition-colors cursor-pointer border ${
                  isActive
                    ? 'bg-[#5C131F] text-[#FAF7F2] border-[#5C131F] shadow-xs'
                    : 'bg-white text-[#5F5651] border-[#D5C2A5] hover:border-[#8C1D30] hover:text-[#2B1116]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid or Empty State */}
        {filteredTemplates.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {filteredTemplates.map((template) => {
              return (
                <div
                  key={template.id}
                  className="group bg-white rounded-sm border border-[#E7DFD5] hover:border-[#8C1D30] hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Card Preview Container */}
                  <div 
                    className="p-4 bg-[#F8F4EE] cursor-pointer relative"
                    onClick={() => onPreviewTemplate(template.id)}
                    title={`Inspect ${template.title}`}
                  >
                    <InvitationCardRenderer 
                      template={template} 
                      size="compact" 
                    />

                    {/* Quick View Hover Indicator */}
                    <div className="absolute inset-0 bg-[#2B1116]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-2 bg-white text-[#2B1116] text-xs font-semibold uppercase tracking-wider rounded-xs shadow-md">
                        <Eye className="w-3.5 h-3.5 text-[#8C1D30]" />
                        <span>Preview Details</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Information: Anti-Slop Zero-Pill Typography */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Clean Unboxed Metadata */}
                      <div className="flex items-center gap-1.5 text-[11px] text-[#7A6E65]">
                        <span className="font-medium text-[#8C1D30]">{template.traditionLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span>{template.styleLabel}</span>
                      </div>

                      <h3 className="mt-1.5 font-serif-wedding text-lg font-bold text-[#2B1116] group-hover:text-[#8C1D30] transition-colors line-clamp-1">
                        {template.title}
                      </h3>

                      <p className="mt-1 text-xs text-[#6A6059] line-clamp-2 leading-relaxed">
                        {template.description}
                      </p>

                      {/* Color Palette Preview Swatches */}
                      <div className="mt-3 flex items-center gap-1.5">
                        <span className="text-[10px] text-[#8C827A]">Palette:</span>
                        <div className="flex items-center gap-1">
                          <span 
                            className="w-3 h-3 rounded-full border border-black/10" 
                            style={{ backgroundColor: template.palette.cardBg }} 
                            title="Card Base"
                          />
                          <span 
                            className="w-3 h-3 rounded-full border border-black/10" 
                            style={{ backgroundColor: template.palette.cardBorder }} 
                            title="Border & Accents"
                          />
                          <span 
                            className="w-3 h-3 rounded-full border border-black/10" 
                            style={{ backgroundColor: template.palette.accentGold }} 
                            title="Gold Foil"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Honest Actions Block: Truthful status & Preview trigger */}
                    <div className="mt-5 pt-3 border-t border-[#F0EAE1] flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => onPreviewTemplate(template.id)}
                        className="flex-1 py-2 px-2.5 text-[11px] font-semibold tracking-wider uppercase text-[#2B1116] bg-[#FAF7F2] hover:bg-[#5C131F] hover:text-white border border-[#D5C2A5] hover:border-[#5C131F] transition-all rounded-xs text-center cursor-pointer"
                      >
                        Preview
                      </button>

                      {/* Explicit Step 2 milestone indicator */}
                      <div 
                        className="py-2 px-2.5 text-[10px] text-[#7A6E65] bg-[#F2EDE4] rounded-xs flex items-center gap-1 cursor-not-allowed"
                        title="Interactive editor unlocks in Milestone 2"
                      >
                        <Lock className="w-3 h-3 text-[#998A7D]" />
                        <span>Step 2</span>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search / Filter State */
          <div className="mt-12 p-12 text-center bg-white rounded-sm border border-[#E7DFD5]">
            <p className="font-serif-wedding text-2xl font-medium text-[#2B1116]">
              No invitation templates match your criteria
            </p>
            <p className="mt-2 text-sm text-[#7A6E65] max-w-md mx-auto">
              We could not find any templates matching "{searchQuery}" under the selected filters.
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={handleResetFilters}
                className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#5C131F] hover:bg-[#430C16] transition-colors rounded-sm cursor-pointer"
              >
                Clear Filters &amp; Show All Templates
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
