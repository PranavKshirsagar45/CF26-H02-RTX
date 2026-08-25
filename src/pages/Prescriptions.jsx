import {
  Pill,
  Clock3,
  CalendarDays,
  UserRound,
  ChevronRight,
  Plus,
} from "lucide-react";

import { dashboardData } from "../data/dashboardData";

function Prescriptions() {
  const prescriptions = dashboardData.prescriptions || [];

  return (
    <div className="simple-page">

      {/* ================= HEADER ================= */}

      <div className="page-header">

        <div>
          <h1>Prescriptions</h1>

          <p>
            View and manage your current medicines and prescriptions.
          </p>
        </div>

        <button
          type="button"
          className="primary-btn"
          onClick={() => {
            console.log("Request prescription");
          }}
        >
          <Plus size={16} />
          Request Prescription
        </button>

      </div>

      {/* ================= SUMMARY ================= */}

      <div className="stats-grid prescription-stats">

        <div className="stat-card purple">

          <div className="stat-top">

            <div className="stat-icon">
              <Pill size={23} />
            </div>

            <div className="stat-info">

              <span>Active Medicines</span>

              <div className="stat-number">
                <strong>{prescriptions.length}</strong>
              </div>

            </div>

          </div>

        </div>

        <div className="stat-card blue">

          <div className="stat-top">

            <div className="stat-icon">
              <CalendarDays size={23} />
            </div>

            <div className="stat-info">

              <span>Last Updated</span>

              <div className="stat-number">
                <strong>20</strong>
                <small>May</small>
              </div>

            </div>

          </div>

        </div>

        <div className="stat-card green">

          <div className="stat-top">

            <div className="stat-icon">
              <UserRound size={23} />
            </div>

            <div className="stat-info">

              <span>Prescribed By</span>

              <div className="stat-number">
                <strong>Dr.</strong>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ================= CURRENT PRESCRIPTIONS ================= */}

      <div className="page-section">

        <div className="section-heading">

          <div>
            <h2>Current Prescriptions</h2>

            <p>
              Medicines currently prescribed by your doctor.
            </p>
          </div>

          <span className="prescription-count">
            {prescriptions.length} Medicines
          </span>

        </div>

        <div className="prescriptions-page-list">

          {prescriptions.length === 0 ? (

            <div className="empty-state">
              <Pill size={30} />

              <h3>No prescriptions found</h3>

              <p>
                Your current prescriptions will appear here.
              </p>
            </div>

          ) : (

            prescriptions.map((prescription) => (

              <div
                className="prescription-page-card"
                key={prescription.id}
              >

                {/* Medicine Icon */}

                <div className="prescription-icon">
                  <Pill size={22} />
                </div>

                {/* Medicine Details */}

                <div className="prescription-main">

                  <h3>
                    {prescription.medicine}
                  </h3>

                  <div className="prescription-details">

                    <span>
                      <Clock3 size={14} />
                      {prescription.dosage}
                    </span>

                    <span>
                      {prescription.instruction}
                    </span>

                  </div>

                </div>

                {/* Date */}

                <div className="prescription-date">

                  <CalendarDays size={14} />

                  <span>
                    {prescription.date}
                  </span>

                </div>

                {/* Action */}

                <button
                  type="button"
                  className="prescription-action"
                  aria-label="View prescription"
                >
                  <ChevronRight size={19} />
                </button>

              </div>

            ))

          )}

        </div>

      </div>

      {/* ================= MEDICATION REMINDER ================= */}

      <div className="medication-reminder">

        <div className="reminder-icon">
          <Clock3 size={22} />
        </div>

        <div className="reminder-content">

          <h3>
            Take your medicines on time
          </h3>

          <p>
            Following your prescribed schedule regularly
            helps your treatment work effectively.
          </p>

        </div>

        <button
          type="button"
          className="reminder-button"
          onClick={() => {
            console.log("Medication reminder");
          }}
        >
          Set Reminder
        </button>

      </div>

    </div>
  );
}

export default Prescriptions;