import { FileEdit, Pill } from 'lucide-react'
import { prescriptions } from '../../data/dashboardData'

export default function RecentPrescriptions() {
  return (
    <section className="rounded-2xl bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 font-semibold text-slate-800">
          <FileEdit className="h-4 w-4 text-brand-500" />
          Recent Prescriptions
        </h3>
        <button className="text-xs font-semibold text-brand-600 hover:underline">View All</button>
      </div>

      <ul className="mt-4 flex flex-col divide-y divide-slate-50">
        {prescriptions.map((item) => (
          <li key={item.id} className="flex items-center justify-between gap-3 py-3">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-400">
                <Pill className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-800">{item.name}</p>
                <p className="text-xs text-slate-400">{item.schedule}</p>
              </div>
            </div>
            <span className="shrink-0 text-xs text-slate-400">{item.date}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
