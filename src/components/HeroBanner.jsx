import {
  CalendarPlus,
  CalendarDays,
  Clock3,
  MapPin,
  MoreVertical,
} from "lucide-react";

import { dashboardData } from "../data/dashboardData";

function HeroBanner() {
  const { patient, appointment } = dashboardData;

  return (
    <section className="hero-section">

      <div className="hero-content">

        {/* ================= HERO TEXT ================= */}

        <div className="hero-text">

          <h2>
            Your Health,
            <br />
            <span>Our Priority.</span>
          </h2>

          <p>
            Stay on top of your health with easy access
            <br />
            to appointments, reports and medical records.
          </p>

          <button
            type="button"
            className="primary-btn"
            onClick={() => {
              console.log("Book appointment clicked");
            }}
          >
            <CalendarPlus size={16} />

            Book Appointment
          </button>

        </div>

        {/* ================= DOCTOR IMAGE ================= */}

        <div className="doctor-image">

          <img
            src="/assets/doctor.jpg"
            alt="Doctor"
          />

        </div>

        {/* ================= APPOINTMENT CARD ================= */}

        <div className="appointment-card">

          <div className="appointment-heading">

            <h3>Upcoming Appointment</h3>

            <button
              type="button"
              aria-label="Appointment options"
              style={{
                background: "transparent",
                padding: 0,
              }}
            >
              <MoreVertical size={18} />
            </button>

          </div>

          <div className="appointment-info">

            {/* Date */}

            <div className="appointment-date">

              <strong>
                {appointment.date}
              </strong>

              <span>
                {appointment.month}
              </span>

            </div>

            {/* Doctor Information */}

            <div>

              <h4>
                {appointment.doctor}
              </h4>

              <p>
                {appointment.specialty}
              </p>

              <div className="appointment-time">

                <Clock3 size={13} />

                <span>
                  {appointment.time}
                </span>

                <span>•</span>

                <MapPin size={13} />

                <span>
                  {appointment.location}
                </span>

              </div>

            </div>

          </div>

          <button
            type="button"
            className="appointment-btn"
            onClick={() => {
              console.log("Appointment details clicked");
            }}
          >
            <CalendarDays size={14} />

            View Appointment Details
          </button>

        </div>

      </div>

    </section>
  );
}

export default HeroBanner;