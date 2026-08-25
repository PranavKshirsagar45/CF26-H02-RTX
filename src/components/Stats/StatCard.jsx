import { Calendar, ClipboardList, FileEdit, Wallet, HeartPulse, ArrowRight } from 'lucide-react'

const ICONS = { Calendar, ClipboardList, FileEdit, Wallet, HeartPulse }

export default function StatCard({ stat }) {
  const Icon = ICONS[stat.icon]

  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-card">
      <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.iconBg} ${stat.iconColor}`}>
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-sm text-slate-400">{stat.label}</p>
        <p className="text-2xl font-bold text-slate-900">
          {stat.value}
          {stat.suffix && <span className="text-base font-medium text-slate-400">{stat.suffix}</span>}
        </p>
      </div>
      <button className={`flex items-center gap-1 text-xs font-semibold ${stat.linkColor} hover:underline`}>
        {stat.linkLabel}
        {!stat.isStatus && <ArrowRight className="h-3.5 w-3.5" />}
      </button>
    </div>
  )
}
