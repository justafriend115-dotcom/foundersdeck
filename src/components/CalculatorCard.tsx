import React, { useState } from 'react'
import { HealthSignal } from './HealthSignal'

interface CalculatorCardProps {
  title: string
  description: string
  type: 'revenue' | 'cap-table' | 'safe' | 'unit-economics'
  onSave?: (result: any) => void
}

interface CalculatorCardState {
  inputs: any
  results: any
}

export const CalculatorCard = ({
  title,
  description,
  type,
  onSave
}: CalculatorCardProps) => {
  const [inputs, setInputs] = useState<'arpu' | 'churn' | 'investment' | 'ownership' | 'dilution' | 'ltv' | 'cac' | 'avg-order' | 'margin'>(() => {
    if (type === 'revenue') return ['arpu', 'churn']
    if (type === 'cap-table') return ['ownership', 'dilution']
    if (type === 'safe') return ['investment', 'ownership']
    return ['ltv', 'cac', 'avg-order', 'margin']
  })

  const [results, setResults] = useState<'arpu' | 'churn' | 'ownership' | 'dilution' | 'dilution2' | 'payback' | 'ownership2' | 'ltv' | 'cac' | 'margin' | 'payback2'>()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputs(prev => {
      if (type === 'revenue') {
        if (e.target.name === 'arpu') return { arpu: value, churn: prev.churn }
        return { arpu: prev.arpu, churn: value }
      }
      if (type === 'cap-table') {
        if (e.target.name === 'ownership') return { ownership: value, dilution: prev.dilution }
        return { ownership: prev.ownership, dilution: value }
      }
      if (type === 'safe') {
        if (e.target.name === 'investment') return { investment: value, ownership: prev.ownership }
        return { investment: prev.investment, ownership: value }
      }
      // unit economics
      if (e.target.name === 'ltv') return { ltv: value, cac: prev.cac, avgOrder: prev.avgOrder, margin: prev.margin }
      if (e.target.name === 'cac') return { ltv: prev.ltv, cac: value, avgOrder: prev.avgOrder, margin: prev.margin }
      if (e.target.name === 'avg-order') return { ltv: prev.ltv, cac: prev.cac, avgOrder: value, margin: prev.margin }
      return { ltv: prev.ltv, cac: prev.cac, avgOrder: prev.avgOrder, margin: value }
    })

    calculateResults(type, inputs, setResults)
  }

  const calculateResults = (type: string, inputs: any, setResults: any) => {
    let ltv = 0, cac = 0, avgOrder = 0, margin = 0

    if (type === 'unit-economics') {
      ltv = parseFloat(inputs.ltv) || 0
      cac = parseFloat(inputs.cac) || 0
      avgOrder = parseFloat(inputs.avgOrder) || 0
      margin = ltv > 0 ? ((ltv - cac) / ltv) * 100 : 0
      const payback = ltv > cac ? Math.round(cac / (ltv / 12)) : 999
      setResults({ ltv, cac, margin, payback })
    }

    if (type === 'revenue') {
      const arpu = parseFloat(inputs.arpu) || 0
      const churn = parseFloat(inputs.churn) || 0
      const ltv = arpu / Math.max(churn, 0.01)
      const payback = Math.round(12 / (ltv * 0.2))
      setResults({ ltv, payback })
    }

    if (type === 'cap-table') {
      const ownership = parseFloat(inputs.ownership) || 0
      const dilution = parseFloat(inputs.dilution) || 0
      setResults({ ownership, dilution })
    }

    if (type === 'safe') {
      const investment = parseFloat(inputs.investment) || 0
      const ownership = parseFloat(inputs.ownership) || 0
      const postMoney = investment / (ownership / 100)
      const newOwnership = 100 - (ownership * 0.8)
      setResults({ ownership: newOwnership })
    }
  }

  let healthClass: 'green' | 'amber' | 'red'
  if (type === 'revenue') {
    healthClass = results?.ltv > 3 ? 'green' : results?.ltv > 1.5 ? 'amber' : 'red'
  } else if (type === 'cap-table') {
    healthClass = inputs.ownership > 30 ? 'green' : inputs.ownership > 15 ? 'amber' : 'red'
  } else if (type === 'safe') {
    healthClass = 'green'
  } else if (type === 'unit-economics') {
    healthClass = margin > 30 ? 'green' : margin > 15 ? 'amber' : 'red'
  }

  const saveResult = () => {
    let resultData: any = { type, title, timestamp: new Date().toISOString() }

    if (type === 'revenue') {
      resultData = {
        type: 'revenue',
        title: 'Revenue Projection',
        ltv: results?.ltv,
        payback: results?.payback,
        inputs: { arpu: inputs.arpu, churn: inputs.churn }
      }
    }

    if (type === 'cap-table') {
      resultData = {
        type: 'cap-table',
        title: 'Cap Table',
        ownership: inputs.ownership,
        dilution: inputs.dilution,
        postDilution: Math.round((100 - inputs.dilution) * 10) / 10
      }
    }

    if (type === 'safe') {
      resultData = {
        type: 'safe',
        title: 'SAFE Dilution',
        investment: inputs.investment,
        ownership: inputs.ownership,
        postMoneyOwnership: Math.round((100 - inputs.investment / 5 * 20) * 10) / 10
      }
    }

    if (type === 'unit-economics') {
      resultData = {
        type: 'unit-economics',
        title: 'Unit Economics',
        ltv: inputs.ltv,
        cac: inputs.cac,
        margin: inputs.margin,
        payback: Math.round((inputs.ltv / (inputs.cac / 12)) * 10) / 10
      }
    }

    onSave?.(resultData)
  }

  return (
    <div className="bg-card border border-rounded-lg p-6 min-h-[320px] max-w-sm">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-secondary mb-4">{description}</p>

      <div className="space-y-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-secondary mb-2">Inputs</p>
          <div className="space-y-3">
            {type === 'revenue' && (
              <>
                <div>
                  <label className="block text-sm text-secondary mb-1">ARPU (Monthly)</label>
                  <input
                    type="number"
                    name="arpu"
                    value={inputs.arpu || ''}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-lg text-primary placeholder-secondary focus-ring-2 focus-visible:ring-primary focus-visible:outline-none transition-colors"
                    defaultValue="45"
                  />
                  <span className="text-sm text-secondary ml-2">€</span>
                </div>
                <div>
                  <label className="block text-sm text-secondary mb-1">Churn Rate (% monthly)</label>
                  <input
                    type="number"
                    name="churn"
                    value={inputs.churn || ''}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-lg text-primary placeholder-secondary focus-ring-2 focus-visible:ring-primary focus-visible:outline-none transition-colors"
                    defaultValue="2"
                  />
                  <span className="text-sm text-secondary ml-2">%</span>
                </div>
              </>
            )}

            {type === 'cap-table' && (
              <>
                <div>
                  <label className="block text-sm text-secondary mb-1">Current Ownership (%)</label>
                  <input
                    type="number"
                    name="ownership"
                    value={inputs.ownership || ''}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-lg text-primary placeholder-secondary focus-ring-2 focus-visible:ring-primary focus-visible:outline-none transition-colors"
                    defaultValue="60"
                  />
                  <span className="text-sm text-secondary ml-2">%</span>
                </div>
                <div>
                  <label className="block text-sm text-secondary mb-1">New Dilution (%)</label>
                  <input
                    type="number"
                    name="dilution"
                    value={inputs.dilution || ''}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-lg text-primary placeholder-secondary focus-ring-2 focus-visible:ring-primary focus-visible:outline-none transition-colors"
                    defaultValue="15"
                  />
                  <span className="text-sm text-secondary ml-2">%</span>
                </div>
              </>
            )}

            {type === 'safe' && (
              <>
                <div>
                  <label className="block text-sm text-secondary mb-1">Investment Amount ($M)</label>
                  <input
                    type="number"
                    name="investment"
                    value={inputs.investment || ''}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-lg text-primary placeholder-secondary focus-ring-2 focus-visible:ring-primary focus-visible:outline-none transition-colors"
                    defaultValue="5"
                  />
                  <span className="text-sm text-secondary ml-2">M</span>
                </div>
                <div>
                  <label className="block text-sm text-secondary mb-1">Pre-money Ownership (%)</label>
                  <input
                    type="number"
                    name="ownership"
                    value={inputs.ownership || ''}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-lg text-primary placeholder-secondary focus-ring-2 focus-visible:ring-primary focus-visible:outline-none transition-colors"
                    defaultValue="20"
                  />
                  <span className="text-sm text-secondary ml-2">%</span>
                </div>
              </>
            )}

            {type === 'unit-economics' && (
              <>
                <div>
                  <label className="block text-sm text-secondary mb-1">LTV ($)</label>
                  <input
                    type="number"
                    name="ltv"
                    value={inputs.ltv || ''}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-lg text-primary placeholder-secondary focus-ring-2 focus-visible:ring-primary focus-visible:outline-none transition-colors"
                    defaultValue="200"
                  />
                  <span className="text-sm text-secondary ml-2">$</span>
                </div>
                <div>
                  <label className="block text-sm text-secondary mb-1">CAC ($)</label>
                  <input
                    type="number"
                    name="cac"
                    value={inputs.cac || ''}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-lg text-primary placeholder-secondary focus-ring-2 focus-visible:ring-primary focus-visible:outline-none transition-colors"
                    defaultValue="150"
                  />
                  <span className="text-sm text-secondary ml-2">$</span>
                </div>
                <div>
                  <label className="block text-sm text-secondary mb-1">Avg Order Value ($)</label>
                  <input
                    type="number"
                    name="avg-order"
                    value={inputs.avgOrder || ''}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-lg text-primary placeholder-secondary focus-ring-2 focus-visible:ring-primary focus-visible:outline-none transition-colors"
                    defaultValue="80"
                  />
                  <span className="text-sm text-secondary ml-2">$</span>
                </div>
                <div>
                  <label className="block text-sm text-secondary mb-1">Gross Margin (%)</label>
                  <input
                    type="number"
                    name="margin"
                    value={inputs.margin || ''}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-lg text-primary placeholder-secondary focus-ring-2 focus-visible:ring-primary focus-visible:outline-none transition-colors"
                    defaultValue={Math.round((200 - 150) / 200 * 100)}
                  />
                  <span className="text-sm text-secondary ml-2">%</span>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-xs uppercase tracking-wider text-secondary mb-3">Live Results</p>
          <div className="grid grid-cols-2 gap-3">
            {type === 'revenue' && (
              <>
                <div>
                  <p className="text-sm text-secondary">LTV:CAC</p>
                  <HealthSignal className="text-xl" status={healthClass} />
                  <p className="text-lg font-medium tabular-nums">{results?.ltv?.toFixed(2)}:1</p>
                </div>
                <div>
                  <p className="text-sm text-secondary">Payback Period (months)</p>
                  <HealthSignal className="text-xl" status="amber" />
                  <p className="text-lg font-medium tabular-nums">{results?.payback}mo</p>
                </div>
              </>
            )}

            {type === 'cap-table' && (
              <>
                <div>
                  <p className="text-sm text-secondary">Post-dilution Ownership</p>
                  <HealthSignal className="text-xl" status={healthClass} />
                  <p className="text-lg font-medium tabular-nums">{Math.round((100 - inputs.dilution) * 10) / 10}%</p>
                </div>
                <div>
                  <p className="text-sm text-secondary">Founder Retention</p>
                  <HealthSignal className="text-xl" status={healthClass} />
                  <p className="text-lg font-medium tabular-nums">{Math.round(inputs.ownership * (1 - inputs.dilution/100) * 10) / 10}%</p>
                </div>
              </>
            )}

            {type === 'safe' && (
              <>
                <div>
                  <p className="text-sm text-secondary">Post-money Ownership</p>
                  <HealthSignal className="text-xl" status={healthClass} />
                  <p className="text-lg font-medium tabular-nums">{Math.round((100 - inputs.investment / 5 * 20) * 10) / 10}%</p>
                </div>
                <div>
                  <p className="text-sm text-secondary">Pre-money Valuation</p>
                  <p className="text-lg font-medium tabular-nums">${Math.round(inputs.investment / 0.2)}M</p>
                </div>
              </>
            )}

            {type === 'unit-economics' && (
              <>
                <div>
                  <p className="text-sm text-secondary">LTV:CAC Ratio</p>
                  <HealthSignal className="text-xl" status={healthClass} />
                  <p className="text-lg font-medium tabular-nums">{((inputs.ltv / inputs.cac) * 100) / 100}</p>
                </div>
                <div>
                  <p className="text-sm text-secondary">Gross Margin</p>
                  <HealthSignal className="text-xl" status={healthClass} />
                  <p className="text-lg font-medium tabular-nums">{Math.round(inputs.margin)}%</p>
                </div>
                <div>
                  <p className="text-sm text-secondary">Payback Period (months)</p>
                  <HealthSignal className="text-xl" status={healthClass} />
                  <p className="text-lg font-medium tabular-nums">{Math.round((inputs.ltv / (inputs.cac / 12)) * 10) / 10}mo</p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Save button */}
        {onSave && (
          <div className="pt-4 border-t border-border">
            <button
              onClick={saveResult}
              className="w-full rounded-md px-4 py-2 text-sm text-accent text-white hover:bg-accent/10 transition-colors"
            >
              Save to project
            </button>
          </div>
        )}
      </div>
    </div>
  )
}