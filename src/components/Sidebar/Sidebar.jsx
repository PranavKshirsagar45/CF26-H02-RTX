import {
  LayoutDashboard,
  CalendarDays,
  HeartPulse,
  FileEdit,
  FlaskConical,
  CreditCard,
  Users,
  FileText,
  Shield,
  Mail,
  Settings,
  HelpCircle,
  LogOut,
  Heart,
  X,
  PhoneCall,
} from 'lucide-react'
import { navItems } from '../../data/dashboardData'

const ICONS = {
  LayoutDashboard,
  CalendarDays,
  HeartPulse,
  FileEdit,
  FlaskConical,
  CreditCard,
  Users,
  FileText,
  Shield,
  Mail,
  Settings,
  HelpCircle,
}

export default function Sidebar({ activeItem = 'dashboard', onNavigate, isOpen, onClose }) {
  const handleNavigate = (id) => {
    onNavigate?.(id)
    onClose?.()
  }

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 flex w-72 shrink-0 flex-col justify-between
        bg-white border-r border-slate-100 px-4 py-6 transition-transform duration-300 ease-in-out
        lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div>
          <div className="flex items-center justify-between px-2 mb-8">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Heart className="h-5 w-5" fill="currentColor" />
              </span>
              <div className="leading-tight">
                <p className="font-bold text-slate-900 text-[15px]">CityCare Hospital</p>
                <p className="text-xs text-slate-400">Patient Portal</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden text-slate-400 hover:text-slate-600"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const Icon = ICONS[item.icon]
              const isActive = item.id === activeItem
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-colors
                    ${
                      isActive
                        ? 'bg-brand-600 text-white shadow-soft'
                        : 'text-slate-500 hover:bg-brand-50 hover:text-brand-700'
                    }`}
                >
                  <span className="flex items-center gap-3">
                    <Icon className={`h-[18px] w-[18px] ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-brand-600'}`} />
                    {item.label}
                  </span>
                  {item.badge && (
                    <span
                      className={`flex h-5 min-w-[20px] items-center justify-center rounded-full px-1 text-[11px] font-semibold
                      ${isActive ? 'bg-white/20 text-white' : 'bg-brand-100 text-brand-700'}`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              )
            })}
          </nav>

          <button
            onClick={() => handleNavigate('logout')}
            className="mt-2 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-700"
          >
            <LogOut className="h-[18px] w-[18px] text-slate-400" />
            Logout
          </button>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-5 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
            <PhoneCall className="h-4 w-4" />
          </span>
          <p className="mt-3 text-sm font-semibold">Need Emergency Help?</p>
          <p className="text-xs text-white/70">24/7 Support</p>
          <p className="mt-2 text-lg font-bold tracking-wide">1800 123 4567</p>
        </div>
      </aside>
    </>
  )
}
