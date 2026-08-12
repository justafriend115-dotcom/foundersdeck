import React from 'react'

interface HealthSignalProps {
  className?: string
  status: 'green' | 'amber' | 'red'
}

export const HealthSignal = ({ className, status }: HealthSignalProps) => {
  const statusMap = {
    green: {
      bg: 'rgba(16, 185, 129, 0.2)',
      border: '#10B981',
    },
    amber: {
      bg: 'rgba(245, 158, 11, 0.2)',
      border: '#F59E0B',
    },
    red: {
      bg: 'rgba(239, 68, 68, 0.2)',
      border: '#EF4444',
    },
  }

  const style = statusMap[status]

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`}
      style={{ backgroundColor: status.bg, borderColor: status.border }}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  )
}