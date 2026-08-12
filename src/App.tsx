import React, { useState } from 'react'
import './src/styles/globals.css'
import { NavRail } from './components/NavRail'
import { CalculatorCard } from './components/CalculatorCard'
import { HealthSignal } from './components/HealthSignal'
import { CommandPalette } from './components/CommandPalette'
import { PitchDeckGenerator } from './components/PitchDeckGenerator'
import { ColdEmailGenerator } from './components/ColdEmailGenerator'
import { HistorySidebar } from './components/HistorySidebar'

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [project, setProject] = useState('financial')
  const [pitchOpen, setPitchOpen] = useState(false)
  const [emailOpen, setEmailOpen] = useState(false)
  const [historyVisible, setHistoryVisible] = useState(false)

  // History state
  const [history, setHistory] = useState<any[]>([])
  const [currentProject, setCurrentProject] = useState('financial')

  // Load history on project change
  const loadProjectHistory = (project: string) => {
    setCurrentProject(project)
    // In a real app, would fetch from backend; using localStorage mock
    const stored = localStorage.getItem(`founderkit-history-${project}`)
    if (stored) {
      setHistory(JSON.parse(stored))
    } else {
      setHistory([])
    }
  }

  // Save handler - adds to history
  const handleSave = (result: any) => {
    setHistory(prev => {
      const updated = [...prev, { ...result, id: Date.now().toString() }]
      // Save to localStorage for this project
      try {
        localStorage.setItem(`founderkit-history-${currentProject}`, JSON.stringify(updated))
      } catch {}
      return updated
    })
  }

  const generatePitchDeck = (answers) => {
    console.log('Generating pitch deck with:', answers)
    handleSave({
      type: 'ai-generator',
      title: 'Pitch Deck',
      problem: answers.problem,
      solution: answers.solution,
      market: answers.market,
      traction: answers.traction,
      team: answers.team
    })
    alert('Deck generated and saved to project!')
    setPitchOpen(false)
  }

  const generateColdEmail = (answers) => {
    console.log('Generating cold email with:', answers)
    handleSave({
      type: 'ai-generator',
      title: 'Cold Email',
      recipient: answers.recipientName,
      company: answers.company,
      problem: answers.problem,
      solution: answers.yourSolution,
      ask: answers.ask
    })
    alert('Email generated and saved to project!')
    setEmailOpen(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <NavRail setProject={setProject} />
      <main className="flex-1 overflow-y-auto p-6">
        <CommandPalette
          open={paletteOpen}
          onToggle={setPaletteOpen}
          onSelect={({ id }) => setProject(id)}
        />
        
        <ProjectSwitcher project={project} setProject={setProject} />

        {/* History sidebar toggle */}
        <button
          onClick={() => setHistoryVisible(!historyVisible)}
          className="mb-4 flex items-center gap-2 text-sm text-accent hover-underline opacity-80 transition-opacity"
        >
          ⏱️ History
          <span className="w-1 h-1 rounded-full bg-accent"></span>
        </button>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CalculatorCard
            title="Revenue Projection"
            description="Three-scenario revenue projections with LTV:CAC and payback period"
            type="revenue"
            onSave={handleSave}
          />
          <CalculatorCard
            title="Cap Table"
            description="Ownership dilution and equity split calculator"
            type="cap-table"
            onSave={handleSave}
          />
          <CalculatorCard
            title="SAFE Dilution"
            description="Investment amount and ownership percentage calculator"
            type="safe"
            onSave={handleSave}
          />
          <CalculatorCard
            title="Unit Economics"
            description="LTV:CAC, payback period, and contribution margin analysis"
            type="unit-economics"
            onSave={handleSave}
          />
        </section>

        {/* AI Tools section */}
        <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <PitchDeckGenerator
              open={pitchOpen}
              onToggle={setPitchOpen}
              onGenerate={generatePitchDeck}
            />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <ColdEmailGenerator
              open={emailOpen}
              onToggle={setEmailOpen}
              onGenerate={generateColdEmail}
            />
          </div>
        </section>

        {/* History sidebar */}
        {historyVisible && (
          <HistorySidebar
            projects={currentProject}
            onHistorySelect={() => {/* handle selection */}}
            setHistoryVisible={setHistoryVisible}
          />
        )}
      </main>
    </div>
  )
}

function ProjectSwitcher({ project, setProject }: { project: string; setProject: (project: string) => void }) {
  const projects = [
    { key: 'financial', name: 'Financial', industry: 'SaaS', stage: 'Seed' },
    { key: 'pitch', name: 'Pitch', industry: 'AI', stage: 'Pre-Seed' },
    { key: 'legal', name: 'Legal', industry: 'Marketplace', stage: 'Series A' },
    { key: 'gtm', name: 'Go-to-Market', industry: 'Fintech', stage: 'Seed' },
    { key: 'team', name: 'Team', industry: 'Healthtech', stage: 'Series B' },
  ]

  return (
    <div className="mb-6">
      <p className="text-xs uppercase tracking-wider text-secondary mb-2">Project</p>
      <div className="flex gap-2">
        {projects.map((p) => {
          const isActive = project === p.key
          return (
            <button
              key={p.key}
              onClick={() => {
                setProject(p.key)
                loadProjectHistory(p.key)
              }}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                isActive ? 'bg-accent/10 text-accent' : 'text-secondary hover:bg-accent/10 hover:text-accent'
              }`}
            >
              {p.name}
            </button>
          )
        })}
      </div>
    </div>
  )
}