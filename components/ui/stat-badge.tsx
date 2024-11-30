"use client"

interface StatBadgeProps {
  icon: React.ReactNode
  value: number | string
  label?: string
  className?: string
}

export function StatBadge({ icon, value, label, className = "" }: StatBadgeProps) {
  return (
    <div className={`flex items-center gap-1 text-gray-500 ${className}`}>
      {icon}
      <span className="hidden sm:inline">{value}</span>
      {label && <span className="hidden sm:inline">{label}</span>}
    </div>
  )
}