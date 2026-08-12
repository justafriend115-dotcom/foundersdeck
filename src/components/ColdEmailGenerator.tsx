import React, { useState } from 'react'
import { HealthSignal } from './HealthSignal'

interface ColdEmailGeneratorProps {
  open: boolean
  onToggle: (open: boolean) => void
  onGenerate: (answers: {
    recipientName: string
    company: string
    problem: string
    yourSolution: string
    ask: string
  }) => void
}

export const ColdEmailGenerator = ({
  open,
  onToggle,
  onGenerate
}: ColdEmailGeneratorProps) => {
  const [answers, setAnswers] = useState<{
    recipientName: string
    company: string
    problem: string
    yourSolution: string
    ask: string
  }>({
    recipientName: '',
    company: '',
    problem: '',
    yourSolution: '',
    ask: '',
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
          <h3 className="font-medium text-lg">Cold Email Generator</h3>
          <p className="text-sm text-secondary mt-1">Personalized investor / customer outreach</p>
        </div>

        <div className="p-4 pt-6 max-h-[70vh] overflow-y-auto">
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-secondary mb-2">Recipient name</label>
              <input
                type="text"
                value={answers.recipientName}
                onChange={(e) => setAnswers({ ...answers, recipientName: e.target.value })}
                className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-lg text-primary placeholder-secondary focus-ring-2 focus-visible:ring-primary focus-visible:outline-none transition-colors"
                placeholder="e.g., Sarah Chen"
              />
            </div>

            <div>
              <label className="block text-sm text-secondary mb-2">Company</label>
              <input
                type="text"
                value={answers.company}
                onChange={(e) => setAnswers({ ...answers, company: e.target.value })}
                className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-lg text-primary placeholder-secondary focus-ring-2 focus-visible:ring-primary focus-visible:outline-none transition-colors"
                placeholder="e.g., Sequoia Capital"
              />
            </div>

            <div>
              <label className="block text-sm text-secondary mb-2">Problem you solve</label>
              <textarea
                value={answers.problem}
                onChange={(e) => setAnswers({ ...answers, problem: e.target.value })}
                className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-lg text-primary placeholder-secondary resize-min h-20 focus-ring-2 focus-visible:ring-primary focus-visible:outline-none transition-colors"
                rows={3}
                placeholder="e.g., inefficient fundraising processes..."
              /></textarea>
            </div>

            <div>
              <label className="block text-sm text-secondary mb-2">Your solution</label>
              <textarea
                value={answers.yourSolution}
                onChange={(e) => setAnswers({ ...answers, yourSolution: e.target.value })}
                className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-lg text-primary placeholder-secondary resize-min h-20 focus-ring-2 focus-visible:ring-primary focus-visible:outline-none transition-colors"
                rows={3}
                placeholder="e.g., AI-powered deal flow automation..."
              /></textarea>
            </div>

            <div>
              <label className="block text-sm text-secondary mb-2">What you're asking for</label>
              <textarea
                value={answers.ask}
                onChange={(e) => setAnswers({ ...answers, ask: e.target.value })}
                className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-lg text-primary placeholder-secondary resize-min h-20 focus-ring-2 focus-visible:ring-primary focus-visible:outline-none transition-colors"
                rows={3}
                placeholder="e.g., 15-min call, intro to partner network..."
              /></textarea>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={handleGenerate}
                className="w-full rounded-md px-4 py-2.5 text-medium transition-colors bg-accent text-white hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-background"
              >
                Generate Personalized Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}