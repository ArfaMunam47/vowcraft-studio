/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { EventTradition } from './types/template';
import { FOUNDATION_TEMPLATES } from './data/templates';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TraditionsSection } from './components/TraditionsSection';
import { TemplateGallery } from './components/TemplateGallery';
import { HowItWorks } from './components/HowItWorks';
import { PersonalisationPreview } from './components/PersonalisationPreview';
import { RoadmapSection } from './components/RoadmapSection';
import { TemplateDetailModal } from './components/TemplateDetailModal';
import { Footer } from './components/Footer';

// Configurable product branding as requested in Scope A
export const PRODUCT_CONFIG = {
  brandName: 'Dawat Invitations',
  tagline: 'Personalised Wedding Invitations & Digital Keepsakes',
  milestone: 'Step 1 — Product Foundation',
};

export default function App() {
  const [selectedTradition, setSelectedTradition] = useState<EventTradition | 'all'>('all');
  const [activePreviewTemplateId, setActivePreviewTemplateId] = useState<string | null>(null);

  const activeTemplate = FOUNDATION_TEMPLATES.find(t => t.id === activePreviewTemplateId) || null;

  const handleBrowseTemplates = () => {
    const el = document.getElementById('templates');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectTradition = (tradition: EventTradition) => {
    setSelectedTradition(tradition);
    const el = document.getElementById('templates');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenPreview = (templateId: string) => {
    setActivePreviewTemplateId(templateId);
  };

  const handleClosePreview = () => {
    setActivePreviewTemplateId(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#242120] font-sans">
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#5C131F] focus:text-white focus:rounded-sm focus:shadow-md"
      >
        Skip to main content
      </a>

      {/* Primary Top Bar Navigation */}
      <Navbar 
        brandName={PRODUCT_CONFIG.brandName} 
        onExploreClick={handleBrowseTemplates}
      />

      {/* Main Page Landmark */}
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <Hero 
          onBrowseTemplates={handleBrowseTemplates}
          onViewHowItWorks={handleViewHowItWorks}
          onPreviewTemplate={handleOpenPreview}
        />

        {/* Wedding Traditions Cultural Architecture */}
        <TraditionsSection 
          onSelectTradition={handleSelectTradition}
        />

        {/* Foundational Template Gallery */}
        <TemplateGallery 
          selectedTradition={selectedTradition}
          onSelectTradition={setSelectedTradition}
          onPreviewTemplate={handleOpenPreview}
        />

        {/* How It Works (Roadmap & Workflow) */}
        <HowItWorks />

        {/* Upcoming Personalisation Engine Preview */}
        <PersonalisationPreview />

        {/* Engineering Milestone Roadmap */}
        <RoadmapSection />
      </main>

      {/* Detailed Template Inspection Modal */}
      <TemplateDetailModal 
        template={activeTemplate}
        isOpen={activePreviewTemplateId !== null}
        onClose={handleClosePreview}
      />

      {/* Quiet, Informative Footer */}
      <Footer 
        brandName={PRODUCT_CONFIG.brandName}
      />
    </div>
  );
}
