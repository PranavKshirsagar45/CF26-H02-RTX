import { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import HeroBanner from './components/Hero/HeroBanner'
import StatsCards from './components/Stats/StatsCards'
import HealthSummary from './components/HealthSummary/HealthSummary'
import RecentLabReports from './components/LabReports/RecentLabReports'
import RecentPrescriptions from './components/Prescriptions/RecentPrescriptions'
import QuickActions from './components/QuickActions/QuickActions'
import CareBanner from './components/CareBanner/CareBanner'
import Footer from './components/Footer/Footer'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('dashboard')

  return (
    <div className="flex min-h-screen bg-[#F6F5FB]">
      <Sidebar
        activeItem={activeItem}
        onNavigate={setActiveItem}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex flex-col gap-6 p-4 sm:p-6 lg:p-8">
          <HeroBanner />

          <StatsCards />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <HealthSummary />
            <RecentLabReports />
            <RecentPrescriptions />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
            <QuickActions />
            <CareBanner />
          </div>

          <Footer />
        </main>
      </div>
    </div>
  )
}
