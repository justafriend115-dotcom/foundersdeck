import React, { useState } from 'react'

interface HistoryItem {
  id: string
  type: 'calculator' | 'ai-generator'
  title: string
  timestamp: string
  data: any
  project: string
}

export const HistorySidebar = () => {
  const [projects, setProjects] = useState<'financial' | 'pitch' | 'legal' | 'gtm' | 'team'>('financial')
  const [history, setHistory] = useState<HistoryItem[]>([])
  const [newItem, setNewItem] = useState<{ title: string; type: string; project: string }>({
    title: '',
    type: 'calculator',
    project: 'financial',
  })

  // Load history from localStorage per project
  const loadHistory = (project: string) => {
    try {
      const stored = localStorage.getItem(`founderkit-history-${project}`)
      if (stored) {
        setHistory(JSON.parse(stored))
      }
    } catch {
      setHistory([])
    }
  }

  // Save history to localStorage
  const saveHistory = (items: HistoryItem[]) => {
    try {
      localStorage.setItem(`founderkit-history-${projects}`, JSON.stringify(items))
    } catch {
      // fallback - history in memory only
    }
  }

  const addHistoryItem = (item: Omit<HistoryItem, 'id' | 'timestamp'>) => {
    const newItem: HistoryItem = {
      id: Date.now().toString(),
      type: item.type,
      title: item.title,
      timestamp: new Date().toLocaleString(),
      data: item.data,
      project: projects,
    }

    setHistory(prev => {
      const updated = [...prev, newItem]
      saveHistory(updated)
      return updated
    })
  }

  const clearHistory = () => {
    setHistory([])
    try {
      localStorage.removeItem(`founderkit-history-${projects}`)
    } catch {}
  }

  return (
    <div className="fixed right-0 top-0 bottom-0 w-80 bg-[color:var(--surface)] border-l border-border z-[var(--zIndex.drawer)] p-6 transform transition-transform ${
      // open by default on mobile, or could have toggle
    }">
      <h2 className="font-medium text-lg uppercase tracking-wider text-secondary mb-6">History</h2>

      {/* Project filter */}
      <div className="mb-6 border-b border-border pb-4">
        <p className="text-xs uppercase tracking-wider text-secondary mb-2">Project</p>
        <div className="flex gap-2">
          {['financial', 'pitch', 'legal', 'gtm', 'team'].map((key) => {
            const isActive = projects === key
            return (
              <button
                key={key}
                onClick={() => {
                  setProjects(key)
                  loadHistory(key)
                }}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  isActive ? 'bg-accent/10 text-accent' : 'text-secondary hover:bg-accent/10 hover:text-accent'
                }`}
              >
                {key === 'financial' ? 'Financial' : key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            )
          })}
        </div>
      </div>

      {/* Empty state */}
      {history.length === 0 && (
        <div className="py-12 text-center text-secondary">
          <p>No history yet</p>
          <p className="mt-2 text-sm">Generate calculators or AI content to see here</p>
        </div>
      )}

      {/* History list */}
      <div className="space-y-3 max-h-[calc(100%-140px)] overflow-y-auto">
        {history.map((item) => (
          <div
            key={item.id}
            className={`rounded-md p-3 transition-colors hover:bg-accent/5 ${
              item.type === 'calculator' ? 'border border-transparent' : 'border-transparent'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium tabular-nums">{item.title}</span>
              <span className="text-xs text-secondary">{item.timestamp}</span>
            </div>
            <p className="text-xs text-secondary tabular-nums">
              {item.data?.inputs?.arpu || item.data?.ownership !== undefined
                ? 'Calculator result'
                : item.data?.problem || item.data?.recipientName
                ? 'AI generated'
                : '—'}
            </p>
          </div>
        ))}
      </div>

      {/* Clear button */}
      {history.length > 0 && (
        <button
          onClick={clearHistory}
          className="mt-4 w-full rounded-md px-4 py-2 text-sm text-red-600 hover:text-red-800 transition-colors"
        >
          Clear history
        </button>
      </div>
    </div>
  )
}