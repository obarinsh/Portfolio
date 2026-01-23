import { useState } from 'react';
import { useBrand } from '../BrandContext';
import { generateBrandGuidelines } from './generateJson';
import { generateTailwindConfig, generateTailwindConfigSnippet } from './generateTailwind';
import { generateCssVariables, generateGoogleFontsLink } from './generateCssVars';
import { Download, Copy, Check, FileJson, FileCode, Palette } from 'lucide-react';

type ExportTab = 'json' | 'tailwind' | 'css';

export function ExportPanel() {
  const { state } = useBrand();
  const [activeTab, setActiveTab] = useState<ExportTab>('json');
  const [copied, setCopied] = useState(false);

  const guidelines = generateBrandGuidelines(state);

  const getExportContent = () => {
    switch (activeTab) {
      case 'json':
        return JSON.stringify(guidelines, null, 2);
      case 'tailwind':
        return generateTailwindConfig(guidelines);
      case 'css':
        return generateCssVariables(guidelines);
    }
  };

  const getFileName = () => {
    switch (activeTab) {
      case 'json':
        return 'brand-guidelines.json';
      case 'tailwind':
        return 'tailwind.config.js';
      case 'css':
        return 'brand-variables.css';
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(getExportContent());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const content = getExportContent();
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = getFileName();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const tabs = [
    { id: 'json' as const, label: 'JSON', icon: FileJson },
    { id: 'tailwind' as const, label: 'Tailwind', icon: FileCode },
    { id: 'css' as const, label: 'CSS Variables', icon: Palette },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-2 font-[family-name:var(--font-heading)]">
          Export Brand Guidelines
        </h3>
        <p className="text-sm text-[--color-muted-foreground]">
          Download your brand guidelines in different formats for use in your projects.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 p-1 bg-[--color-muted] rounded-xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-[--color-card] text-[--color-foreground] shadow-sm'
                : 'text-[--color-muted-foreground] hover:text-[--color-foreground]'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Description */}
      <div className="p-4 rounded-xl bg-[--color-muted] border border-[--color-border]">
        {activeTab === 'json' && (
          <div>
            <h4 className="font-medium text-sm mb-1">Full Brand Guidelines JSON</h4>
            <p className="text-sm text-[--color-muted-foreground]">
              Complete brand documentation including colors, typography, layout DNA, components,
              and motion settings. Use as a single source of truth for your design system.
            </p>
          </div>
        )}
        {activeTab === 'tailwind' && (
          <div>
            <h4 className="font-medium text-sm mb-1">Tailwind CSS Configuration</h4>
            <p className="text-sm text-[--color-muted-foreground]">
              Ready-to-use Tailwind config with your brand colors, fonts, and design tokens.
              Merge with your existing tailwind.config.js.
            </p>
          </div>
        )}
        {activeTab === 'css' && (
          <div>
            <h4 className="font-medium text-sm mb-1">CSS Custom Properties</h4>
            <p className="text-sm text-[--color-muted-foreground]">
              CSS variables compatible with shadcn/ui and other component libraries.
              Add to your globals.css file.
            </p>
          </div>
        )}
      </div>

      {/* Code Preview */}
      <div className="relative">
        <div className="absolute top-3 right-3 flex gap-2 z-10">
          <button
            onClick={handleCopy}
            className="p-2 rounded-lg bg-[--color-card] border border-[--color-border] hover:bg-[--color-muted] transition-colors"
            title="Copy to clipboard"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-600" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={handleDownload}
            className="p-2 rounded-lg bg-[--color-primary] text-[--color-primary-foreground] hover:opacity-90 transition-opacity"
            title="Download file"
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
        <pre className="p-4 pt-14 rounded-xl bg-[--color-card] border border-[--color-border] overflow-auto max-h-96 text-sm font-mono">
          <code>{getExportContent()}</code>
        </pre>
      </div>

      {/* Additional Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl border border-[--color-border]">
          <h4 className="font-medium text-sm mb-2">Google Fonts Link</h4>
          <p className="text-xs text-[--color-muted-foreground] mb-2">
            Add this to your HTML head:
          </p>
          <code className="text-xs bg-[--color-muted] px-2 py-1 rounded block overflow-auto">
            {`<link href="${generateGoogleFontsLink(guidelines)}" rel="stylesheet">`}
          </code>
        </div>

        <div className="p-4 rounded-xl border border-[--color-border]">
          <h4 className="font-medium text-sm mb-2">Quick Start</h4>
          <ol className="text-xs text-[--color-muted-foreground] space-y-1">
            <li>1. Download the JSON for documentation</li>
            <li>2. Add CSS variables to globals.css</li>
            <li>3. Extend Tailwind config with colors/fonts</li>
            <li>4. Add Google Fonts link to HTML</li>
          </ol>
        </div>
      </div>

      {/* Tailwind Snippet */}
      {activeTab === 'tailwind' && (
        <div className="p-4 rounded-xl bg-[--color-muted] border border-[--color-border]">
          <h4 className="font-medium text-sm mb-2">Snippet for Existing Config</h4>
          <p className="text-xs text-[--color-muted-foreground] mb-3">
            If you already have a tailwind.config.js, add these to theme.extend:
          </p>
          <pre className="text-xs bg-[--color-card] p-3 rounded-lg overflow-auto max-h-48">
            <code>{generateTailwindConfigSnippet(guidelines)}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
