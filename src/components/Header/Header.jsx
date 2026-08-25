import { Search, Bell, ChevronDown, Menu } from 'lucide-react'
import { patient } from '../../data/dashboardData'

export default function Header({ onMenuClick }) {
  return (
    <header className="flex flex-col gap-4 border-b border-slate-100 bg-white px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="lg:hidden text-slate-500 hover:text-brand-600"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
              Hello, {patient.name} <span aria-hidden>👋</span>
            </h1>
            <p className="hidden sm:block text-sm text-slate-400">
              Take charge of your health and stay updated.
            </p>
          </div>
        </div>

        <div className="hidden lg:block w-full max-w-xs">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search for doctors, departments..."
              className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-brand-400 focus:bg-white"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-5">
          <button
            className="relative hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-500 hover:text-brand-600"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
            {patient.notifications > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white">
                {patient.notifications}
              </span>
            )}
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src={patient.avatar}
              alt={patient.name}
              className="h-10 w-10 rounded-full object-cover ring-2 ring-brand-100"
            />
            <div className="hidden md:block leading-tight">
              <p className="text-sm font-semibold text-slate-800">{patient.name}</p>
              <p className="text-xs text-slate-400">Patient ID: {patient.id}</p>
            </div>
            <ChevronDown className="hidden sm:block h-4 w-4 text-slate-400" />
          </div>
        </div>
      </div>

      <div className="relative lg:hidden">
        <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search for doctors, departments..."
          className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-brand-400"
        />
      </div>
    </header>
  )
}
