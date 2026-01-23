import { useState } from 'react';
import { BrandProvider } from './BrandContext';
import { MetaPanel } from './panels/MetaPanel';
import { ColorPalettePanel } from './panels/ColorPalettePanel';
import { TypographyPanel } from './panels/TypographyPanel';
import { LayoutDnaPanel } from './panels/LayoutDnaPanel';
import { ExportPanel } from './export/ExportPanel';
import { ComponentPreview } from './previews/ComponentPreview';
import { HeroPreview } from './previews/HeroPreview';
import { CardPreview } from './previews/CardPreview';
import { ColorSwatches } from './previews/ColorSwatches';
import {
  Palette,
  Type,
  Layout,
  Layers,
  Download,
  Eye,
  User,
  ChevronRight,
} from 'lucide-react';

type Tab = 'meta' | 'colors' | 'typography' | 'layout' | 'export';
type PreviewTab = 'components' | 'hero' | 'cards' | 'swatches';

const tabs = [
  { id: 'meta' as const, label: 'Brand Identity', icon: User },
  { id: 'colors' as const, label: 'Colors', icon: Palette },
  { id: 'typography' as const, label: 'Typography', icon: Type },
  { id: 'layout' as const, label: 'Layout DNA', icon: Layout },
  { id: 'export' as const, label: 'Export', icon: Download },
];

const previewTabs = [
  { id: 'hero' as const, label: 'Hero' },
  { id: 'components' as const, label: 'Components' },
  { id: 'cards' as const, label: 'Cards' },
  { id: 'swatches' as const, label: 'Swatches' },
];

function BrandGeneratorContent() {
  const [activeTab, setActiveTab] = useState<Tab>('meta');
  const [activePreview, setActivePreview] = useState<PreviewTab>('hero');
  const [showPreview, setShowPreview] = useState(true);

  const renderPanel = () => {
    switch (activeTab) {
      case 'meta':
        return <MetaPanel />;
      case 'colors':
        return <ColorPalettePanel />;
      case 'typography':
        return <TypographyPanel />;
      case 'layout':
        return <LayoutDnaPanel />;
      case 'export':
        return <ExportPanel />;
    }
  };

  const renderPreview = () => {
    switch (activePreview) {
      case 'components':
        return <ComponentPreview />;
      case 'hero':
        return <HeroPreview />;
      case 'cards':
        return <CardPreview />;
      case 'swatches':
        return <ColorSwatches />;
    }
  };

  return (
    <div className="min-h-screen bg-[--color-background]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[--color-border] bg-[--color-background]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-[family-name:var(--font-heading)]">
              Brand Guidelines Generator
            </h1>
            <p className="text-sm text-[--color-muted-foreground]">
              Create your visual identity with live previews
            </p>
          </div>
          <button
            onClick={() => setShowPreview(!showPreview)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${
              showPreview
                ? 'bg-[--color-primary] text-[--color-primary-foreground] border-transparent'
                : 'border-[--color-border] hover:bg-[--color-muted]'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span className="hidden sm:inline">Preview</span>
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className={`grid gap-8 ${showPreview ? 'lg:grid-cols-2' : 'lg:grid-cols-1 max-w-3xl mx-auto'}`}>
          {/* Left Panel - Controls */}
          <div className="space-y-6">
            {/* Tab Navigation */}
            <nav className="flex gap-1 p-1 bg-[--color-muted] rounded-xl overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-[--color-card] text-[--color-foreground] shadow-sm'
                      : 'text-[--color-muted-foreground] hover:text-[--color-foreground]'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </nav>

            {/* Progress Indicator */}
            <div className="flex items-center gap-2 text-sm text-[--color-muted-foreground]">
              {tabs.map((tab, index) => (
                <div key={tab.id} className="flex items-center">
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-[--color-primary] text-[--color-primary-foreground]'
                        : tabs.findIndex((t) => t.id === activeTab) > index
                        ? 'bg-[--color-primary]/20 text-[--color-primary]'
                        : 'bg-[--color-muted] text-[--color-muted-foreground]'
                    }`}
                  >
                    {index + 1}
                  </button>
                  {index < tabs.length - 1 && (
                    <ChevronRight className="w-4 h-4 mx-1 text-[--color-border]" />
                  )}
                </div>
              ))}
            </div>

            {/* Panel Content */}
            <div className="bg-[--color-card] rounded-2xl border border-[--color-border] p-6">
              {renderPanel()}
            </div>
          </div>

          {/* Right Panel - Preview */}
          {showPreview && (
            <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              {/* Preview Tab Navigation */}
              <div className="flex items-center gap-4">
                <Layers className="w-5 h-5 text-[--color-muted-foreground]" />
                <div className="flex gap-2">
                  {previewTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActivePreview(tab.id)}
                      className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                        activePreview === tab.id
                          ? 'bg-[--color-primary] text-[--color-primary-foreground]'
                          : 'text-[--color-muted-foreground] hover:text-[--color-foreground] hover:bg-[--color-muted]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preview Content */}
              <div className="bg-[--color-card] rounded-2xl border border-[--color-border] p-6 min-h-[500px]">
                {renderPreview()}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function BrandGenerator() {
  return (
    <BrandProvider>
      <BrandGeneratorContent />
    </BrandProvider>
  );
}
