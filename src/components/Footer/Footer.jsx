import { Headset, ShieldCheck, Award } from 'lucide-react'
import { trustBadges } from '../../data/dashboardData'

const ICONS = { Headset, ShieldCheck, Award }

export default function Footer() {
  return (
    <footer className="rounded-2xl bg-white p-5 shadow-card grid grid-cols-1 sm:grid-cols-3 gap-4">
      {trustBadges.map((badge) => {
        const Icon = ICONS[badge.icon]
        return (
          <div key={badge.id} className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-600 shrink-0">
              <Icon className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-800">{badge.title}</p>
              <p className="text-xs text-slate-400">{badge.sub}</p>
            </div>
          </div>
        )
      })}
    </footer>
  )
}
