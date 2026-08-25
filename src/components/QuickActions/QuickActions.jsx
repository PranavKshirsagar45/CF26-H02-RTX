import { CalendarPlus, UploadCloud, Video, Stethoscope, ShieldPlus } from 'lucide-react'
import { quickActions } from '../../data/dashboardData'

const ICONS = { CalendarPlus, UploadCloud, Video, Stethoscope, ShieldPlus }

export default function QuickActions() {
  return (
    <section className="rounded-2xl bg-white p-5 shadow-card">
      <h3 className="font-semibold text-slate-800">Quick Actions</h3>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {quickActions.map((action) => {
          const Icon = ICONS[action.icon]
          return (
            <button
              key={action.id}
              className="flex flex-col items-start gap-3 rounded-xl border border-slate-100 p-4 text-left hover:border-brand-200 hover:bg-brand-50/50 transition-colors"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-800">{action.label}</p>
                <p className="text-xs text-slate-400">{action.sub}</p>
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}
