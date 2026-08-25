import { FlaskConical, User } from 'lucide-react'
import { labReports } from '../../data/dashboardData'

const statusStyles = {
  Normal: 'bg-emerald-50 text-emerald-600',
  Borderline: 'bg-amber-50 text-amber-600',
  Critical: 'bg-rose-50 text-rose-600',
}

export default function RecentLabReports() {
  return (
    <section className="rounded-2xl bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 font-semibold text-slate-800">
          <FlaskConical className="h-4 w-4 text-brand-500" />
          Recent Lab Reports
        </h3>
        <button className="text-xs font-semibold text-brand-600 hover:underline">View All</button>
      </div>

      <ul className="mt-4 flex flex-col divide-y divide-slate-50">
        {labReports.map((report) => (
          <li key={report.id} className="flex items-center justify-between gap-3 py-3">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-400">
                <User className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-800">{report.name}</p>
                <p className="text-xs text-slate-400">{report.date}</p>
              </div>
            </div>
            <span
              className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[report.status]}`}
            >
              {report.status}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
