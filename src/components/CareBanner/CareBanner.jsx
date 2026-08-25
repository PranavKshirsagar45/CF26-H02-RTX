import { ShieldPlus } from 'lucide-react'

export default function CareBanner() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-6 text-white flex flex-col justify-between min-h-[220px]">
      <div>
        <h3 className="text-lg font-bold">We Care For You</h3>
        <p className="mt-2 max-w-[220px] text-sm text-white/70">
          Your health is important to us. Get timely care and support whenever you need.
        </p>
      </div>

      <div className="absolute -right-4 -bottom-2 opacity-90">
        <span className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white/10">
          <ShieldPlus className="h-12 w-12 text-white/80" />
        </span>
      </div>
    </section>
  )
}
