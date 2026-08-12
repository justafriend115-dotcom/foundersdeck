import React from 'react'

export const NavRail = ({ setProject }: { setProject: (project: string) => void }) => {
  const projects = [
    { key: 'financial', name: 'Financial', industry: 'SaaS', stage: 'Seed' },
    { key: 'pitch', name: 'Pitch', industry: 'AI', stage: 'Pre-Seed' },
    { key: 'legal', name: 'Legal', industry: 'Marketplace', stage: 'Series A' },
    { key: 'gtm', name: 'Go-to-Market', industry: 'Fintech', stage: 'Seed' },
    { key: 'team', name: 'Team', industry: 'Healthtech', stage: 'Series B' },
  ]

  const activeProject = projects.find(p => p.key === setProject)

  return (
    <nav className="fixed left-0 top-0 bottom-0 w-64 bg-[color:var(--surface)] border-r border-border z-[var(--zIndex.header)] p-4 flex flex-col gap-2">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-medium text-sm uppercase tracking-wider text-secondary">FounderKit</h2>
        <button aria-label="Open command palette" className="p-2 rounded hover:bg-accent/10 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none">
          ⌘K
        </button>
      </div>

      <nav className="space-y 1">
        {projects.map((proj) => {
          const isActive = proj.key === setProject
          return (
            <button
              key={proj.key}
              onClick={() => setProject(proj.key)}
              className={`flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-accent/10 text-accent'
                  : 'text-secondary hover:bg-accent/10 hover:text-accent'
            }`}
            aria-current={isActive ? 'page' : undefined}
            disabled={isActive}
          >
            <svg
              className="w-4 h-4 mr-2 shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a2 2 0 002 2h10a2 2 0 002-2V10M9 19H5a2 2 0 01-2-2V7a2 2 0 012-2h2m2 6h8a2 2 0 002-2v-5 5z" />
            </svg>
            {proj.name}
          </button>
        })}
      </nav>

      <div className="mt-auto p-3 bg-card rounded-md border border-border text-xs text-secondary">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /></span>
          <span>Active project: {activeProject?.name || 'Financial'}</span>
        </div>
        <p className="mt-1 text-[10px] opacity-60">{activeProject?.industry || 'SaaS'} • {activeProject?.stage || 'Seed'}</p>
      </div>
    </nav>
  )
}