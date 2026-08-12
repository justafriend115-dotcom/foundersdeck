import React, { useState } from 'react'
import { HealthSignal } from './HealthSignal'

interface PitchDeckGeneratorProps {
  open: boolean
  onToggle: (open: boolean) => void
  onGenerate: (answers: {
    problem: string
    solution: string
    market: string
    traction: string
    team: string
  }) => void
}

export const PitchDeckGenerator = ({
  open,
  onToggle,
  onGenerate
}: PitchDeckGeneratorProps) => {
  const [answers, setAnswers] = useState<{
    problem: string
    solution: string
    market: string
    traction: string
    team: string
  }>({
    problem: '',
    solution: '',
    market: '',
    traction: '',
    team: '',
  })

  const handleGenerate = () => {
    onGenerate(answers)
    onToggle(false)
  }

  return (
    <div
      className="fixed inset-0 z-[zIndex.modal] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div
        className="bg-[color:var(--surface)] rounded-xl w-full max-w-md max-h-[90vh] overflow-hidden border border-border"
      >
        <div className="p-4 border-b border-border">
          <h3 className="font-medium text-lg">Pitch Deck Generator</h3>
          <p className="text-sm text-secondary mt-1">Answer 5 questions to generate a 10-slide deck</p>
        </div>

        <div className="p-4 pt-6 max-h-[70vh] overflow-y-auto">
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-secondary mb-2">Problem you solve</label>
              <textarea
                value={answers.problem}
                onChange={(e) => setAnswers({ ...answers, problem: e.target.value })}
                className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-lg text-primary placeholder-secondary resize-min h-24 focus-ring-2 focus-visible:ring-primary focus-visible:outline-none transition-colors"
                rows={3}
                placeholder="e.g., Founders struggle to raise funding without technical decks..."
              /></textarea>
            </div>

            <div>
              <label className="block text-sm text-secondary mb-2">Your solution</label>
              <textarea
                value={answers.solution}
                onChange={(e) => setAnswers({ ...answers, solution: e.target.value })}
                className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-lg text-primary placeholder-secondary resize-min h-24 focus-ring-2 focus-visible:ring-primary focus-visible:outline-none transition-colors"
                rows={3}
                placeholder="e.g., We build AI-powered pitch deck generators that automate slide creation..."
              /></textarea>
            </div>

            <div>
              <label className="block text-sm text-secondary mb-2">Target market</label>
              <textarea
                value={answers.market}
                onChange={(e) => setAnswers({ ...answers, market: e.target.value })}
                className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-lg text-primary placeholder-secondary resize-min h-16 focus-ring-2 focus-visible:ring-primary focus-visible:outline-none transition-colors"
                rows={2}
                placeholder="e.g., SaaS B2B AI, $50B TAM..."
              /></textarea>
            </div>

            <div>
              <label className="block text-sm text-secondary mb-2"> traction</label>
              <textarea
                value={answers.traction}
                onChange={(e) => setAnswers({ ...answers, traction: e.target.value })}
                className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-lg text-primary placeholder-secondary resize-min h-16 focus-ring-2 focus-visible:ring-primary focus-visible:outline-none transition-colors"
                rows={2}
                placeholder="e.g., 500 users, $40k MRR, 3-month waitlist..."
              /></textarea>
            </div>

            <div>
              <label className="block text-sm text-secondary mb-2">Co-founders / team</label>
              <textarea
                value={answers.team}
                onChange={(e) => setAnswers({ ...answers, team: e.target.value })}
                className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-lg text-primary placeholder-secondary resize-min h-16 focus-ring-2 focus-visible:ring-primary focus-visible:outline-none transition-colors"
                rows={2}
                placeholder="e.g., 2 technical + 1 business founder, YC S23 batch..."
              /></textarea>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={handleGenerate}
                className="w-full rounded-md px-4 py-2.5 text-medium transition-colors bg-accent text-white hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-background"
              >
                Generate 10-slide Deck
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}