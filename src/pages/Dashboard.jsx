import HeroBanner from "../components/HeroBanner";
import StatCard from "../components/StatCard";
import HealthSummary from "../components/HealthSummary";
import LabReports from "../components/LabReports";
import Prescriptions from "../components/Prescriptions";
import QuickActions from "../components/QuickActions";
import CareCard from "../components/CareCard";
import BottomFeatures from "../components/BottomFeatures";

import { dashboardData } from "../data/dashboardData";

function Dashboard() {
  return (
    <div className="dashboard-page">

      <div className="dashboard-content">

        <HeroBanner />

        <section className="stats-grid">
          {dashboardData.stats.map((stat) => (
            <StatCard
              key={stat.id}
              stat={stat}
            />
          ))}
        </section>

        <section className="middle-grid">

          <HealthSummary />

          <LabReports />

          <Prescriptions />

        </section>

        <section className="bottom-grid">

          <QuickActions />

          <CareCard />

        </section>

        <BottomFeatures />

      </div>

    </div>
  );
}

export default Dashboard;