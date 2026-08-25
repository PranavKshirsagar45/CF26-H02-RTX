import { CalendarDays, Clock, ChevronDown } from 'lucide-react'
import { upcomingAppointment as appt } from '../../data/dashboardData'

export default function UpcomingAppointment() {
  return (
    <div className="w-full lg:w-80 shrink-0 rounded-2xl bg-white/95 backdrop-blur p-5 shadow-soft">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-700">Upcoming Appointment</p>
        <CalendarDays className="h-4 w-4 text-brand-400" />
      </div>

      <div className="mt-4 flex items-center gap-4">
        <div className="flex flex-col items-center justify-center rounded-xl bg-brand-50 px-3 py-2 text-brand-700">
          <span className="text-2xl font-bold leading-none">{appt.day}</span>
          <span className="text-xs font-medium">{appt.month}</span>
        </div>
        <div>
          <p className="font-semibold text-slate-900">{appt.doctor}</p>
          <p className="text-sm text-slate-400">{appt.specialty}</p>
          <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-400">
            <Clock className="h-3.5 w-3.5" />
            {appt.time} &bull; {appt.room}
          </p>
        </div>
      </div>

      <button className="mt-5 flex w-full items-center justify-center gap-1.5 rounded-xl border border-brand-200 py-2.5 text-sm font-semibold text-brand-600 hover:bg-brand-50 transition-colors">
        <ChevronDown className="h-4 w-4" />
        View Appointment Details
      </button>
    </div>
  )
}
