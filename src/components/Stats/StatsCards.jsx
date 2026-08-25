import { statCards } from '../../data/dashboardData'
import StatCard from './StatCard'

export default function StatsCards() {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {statCards.map((stat) => (
        <StatCard key={stat.id} stat={stat} />
      ))}
    </section>
  )
}
