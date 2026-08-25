import { BrowserRouter, Routes, Route } from "react-router-dom";

import PatientLayout from "./layouts/PatientLayout";

import Dashboard from "./pages/Dashboard";
import Appointments from "./pages/Appointments";
import Health from "./pages/Health";
import Prescriptions from "./pages/Prescriptions";
import LabReports from "./pages/LabReports";
import Bills from "./pages/Bills";
import Doctors from "./pages/Doctors";
import MedicalRecords from "./pages/MedicalRecords";
import Insurance from "./pages/Insurance";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* ==============================
            PATIENT PORTAL LAYOUT
        ============================== */}

        <Route element={<PatientLayout />}>

          {/* Dashboard */}
          <Route
            path="/"
            element={<Dashboard />}
          />

          {/* Appointments */}
          <Route
            path="/appointments"
            element={<Appointments />}
          />

          {/* Health */}
          <Route
            path="/health"
            element={<Health />}
          />

          {/* Prescriptions */}
          <Route
            path="/prescriptions"
            element={<Prescriptions />}
          />

          {/* Lab Reports */}
          <Route
            path="/lab-reports"
            element={<LabReports />}
          />

          {/* Bills */}
          <Route
            path="/bills"
            element={<Bills />}
          />

          {/* Doctors */}
          <Route
            path="/doctors"
            element={<Doctors />}
          />

          {/* Medical Records */}
          <Route
            path="/medical-records"
            element={<MedicalRecords />}
          />

          {/* Insurance */}
          <Route
            path="/insurance"
            element={<Insurance />}
          />

          {/* Messages */}
          <Route
            path="/messages"
            element={<Messages />}
          />

          {/* Settings */}
          <Route
            path="/settings"
            element={<Settings />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;