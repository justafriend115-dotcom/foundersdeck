import React, { useState } from 'react'

interface CommandPaletteProps {
  open: boolean
  onToggle: (open: boolean) => void
  onSelect: (item: { id: string; label: string }) => void
}

export const CommandPalette = ({ open, onToggle, onSelect }: CommandPaletteProps) => {
  const items = [
    { id: 'financial', label: 'Financial Calculator' },
    { id: 'revenue', label: 'Revenue Projection' },
    { id: 'cap-table', label: 'Cap Table' },
    { id: 'safe', label: 'SAFE Dilution' },
    { id: 'legal', label: 'Legal Docs' },
    { id: 'pitch', label: 'Pitch Deck' },
    { id: 'team', label: 'Hiring Tools' },
    { id: 'gtm', label: 'Go-to-Market' },
  ]

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[zIndex.modal] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div
        className="bg-[color:var(--surface)] rounded-xl w-full max-w-md max-h-[80vh] overflow-hidden border border-border"
      >
        <div className="p-4 border-b border-border">
          <h3 className="font-medium text-lg">Command Palette (⌘K)</h3>
          <p className="text-sm text-secondary mt-1">Jump to any tool instantly</p>
        </div>

        <div className="p-4 max-h-[60vh] overflow-y-auto">
          <div className="space-y-1">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelect(item)}
                className={`w-full flex items-center rounded-md px-3 py-2 text-left text-sm transition-colors focus:outline-none focus:bg-accent/5 focus:text-accent ${
                  // Simple active state - first item or matched
                }`}
                aria-label={item.label}
              >
                <svg
                  className="w-4 h-4 mr-3 shrink-0 opacity-60"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}