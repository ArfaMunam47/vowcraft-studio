/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type EventTradition = 
  | 'barat'
  | 'mehndi'
  | 'walima'
  | 'nikkah'
  | 'contemporary';

export type VisualStyle = 
  | 'royal-heritage'
  | 'floral-botanical'
  | 'minimal-modern'
  | 'ornamental-arch'
  | 'festive-vibrant';

export interface ColorPalette {
  name: string;
  background: string;
  cardBg: string;
  cardBorder: string;
  primaryText: string;
  secondaryText: string;
  accentGold: string;
  motifFill: string;
}

export interface SampleInvitationData {
  bismillahUrdu?: string;
  headerKicker: string;
  couplePrimary: string;
  coupleSecondary: string;
  parentsKicker?: string;
  eventTitle: string;
  eventDateFormatted: string;
  eventTime: string;
  venueName: string;
  cityCountry: string;
  rsvpNote?: string;
}

export interface WeddingTemplate {
  id: string;
  title: string;
  tagline: string;
  tradition: EventTradition;
  traditionLabel: string;
  style: VisualStyle;
  styleLabel: string;
  palette: ColorPalette;
  sampleData: SampleInvitationData;
  ornamentType: 'mughal-arch' | 'floral-botanical' | 'geometric-jaali' | 'minimalist-trim' | 'paisley-mandala';
  description: string;
  designNotes: string;
  culturalOrigin: string;
  tags: string[];
  status: 'foundation_preview';
}
