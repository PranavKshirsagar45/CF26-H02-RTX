import { Heart, ArrowRight } from 'lucide-react'
import { healthSummary as h } from '../../data/dashboardData'

export default function HealthSummary() {
  const radius = 46
  const circumference = 2 * Math.PI * radius
  const progress = (h.score / 100) * circumference

  return (
    <section className="rounded-2xl bg-white p-5 shadow-card flex flex-col">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 font-semibold text-slate-800">
          <Heart className="h-4 w-4 text-rose-400" fill="currentColor" />
          Health Summary
        </h3>
        <span className="text-xs text-slate-400">Updated: {h.updated}</span>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <div className="text-sm">
          <p className="text-slate-400">Blood Group</p>
          <p className="font-bold text-slate-900 text-lg">{h.bloodGroup}</p>
          <p className="mt-3 text-slate-400">Height</p>
          <p className="font-bold text-slate-900 text-lg">{h.height}</p>
        </div>

        <div className="relative flex h-32 w-32 shrink-0 items-center justify-center">
          <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
            <circle cx="50" cy="50" r={radius} fill="none" stroke="#ECFDF5" strokeWidth="8" />
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke="#10B981"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - progress}
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-2xl font-extrabold text-slate-900">{h.score}</span>
            <span className="text-xs font-medium text-emerald-500">{h.status}</span>
          </div>
        </div>

        <div className="text-sm text-right">
          <p className="text-slate-400">Weight</p>
          <p className="font-bold text-slate-900 text-lg">{h.weight}</p>
          <p className="mt-3 text-slate-400">BMI</p>
          <p className="font-bold text-slate-900 text-lg">{h.bmi}</p>
        </div>
      </div>

      <button className="mt-5 flex items-center justify-center gap-1.5 rounded-xl bg-brand-50 py-2.5 text-sm font-semibold text-brand-600 hover:bg-brand-100 transition-colors">
        View Full Health Record
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </section>
  )
}
