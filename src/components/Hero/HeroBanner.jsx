import { CalendarPlus, Heart } from 'lucide-react'
import UpcomingAppointment from './UpcomingAppointment'

export default function HeroBanner() {
  return (
    <section
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-100 via-brand-50 to-white
      px-6 py-8 sm:px-10 sm:py-10"
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-6">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Your Health, <br />
            Our{' '}
            <span className="text-brand-600 inline-flex items-center gap-2">
              Priority <Heart className="h-7 w-7 sm:h-8 sm:w-8" fill="currentColor" />
            </span>
          </h2>
          <p className="mt-4 max-w-md text-slate-500">
            Compassionate care. Advanced technology. Better health outcomes.
          </p>
          <button className="mt-6 flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-brand-700 transition-colors">
            <CalendarPlus className="h-4 w-4" />
            Book an Appointment
          </button>
        </div>

        <div className="hidden lg:block flex-1 max-w-md">
          <img
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80&auto=format&fit=crop"
            alt="Doctor consulting with a patient"
            className="h-56 w-full rounded-2xl object-cover shadow-soft"
          />
        </div>

        <UpcomingAppointment />
      </div>
    </section>
  )
}
