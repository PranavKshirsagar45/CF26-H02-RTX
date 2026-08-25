import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const PatientLayout = () => {
  return (
    <div className="patient-layout">
      
      <Sidebar />

      <div className="patient-main">
        <Header />

        <main className="patient-content">
          <Outlet />
        </main>
      </div>

    </div>
  );
};

export default PatientLayout;