import {
  CalendarDays,
  Clock3,
  MapPin,
  Video,
  Stethoscope,
  Plus,
  MoreVertical,
} from "lucide-react";

const appointments = [
  {
    id: 1,
    doctor: "Dr. Priya Mehta",
    specialty: "Cardiologist",
    date: "24 May 2024",
    time: "10:30 AM",
    location: "OPD - 3",
    type: "In-person",
    status: "Confirmed",
    initials: "PM",
  },
  {
    id: 2,
    doctor: "Dr. Arjun Patel",
    specialty: "General Physician",
    date: "28 May 2024",
    time: "02:00 PM",
    location: "OPD - 1",
    type: "In-person",
    status: "Confirmed",
    initials: "AP",
  },
  {
    id: 3,
    doctor: "Dr. Neha Kapoor",
    specialty: "Dermatologist",
    date: "02 June 2024",
    time: "11:15 AM",
    location: "Online",
    type: "Video Consultation",
    status: "Pending",
    initials: "NK",
  },
];

function Appointments() {
  return (
    <div className="simple-page">

      {/* ================= HEADER ================= */}

      <div className="page-header">

        <div>
          <h1>Appointments</h1>

          <p>
            Manage your upcoming and previous doctor appointments.
          </p>
        </div>

        <button
          type="button"
          className="primary-btn"
          onClick={() => {
            console.log("Book appointment");
          }}
        >
          <Plus size={16} />
          Book Appointment
        </button>

      </div>

      {/* ================= SUMMARY ================= */}

      <div className="stats-grid appointment-stats">

        <div className="stat-card purple">
          <div className="stat-top">
            <div className="stat-icon">
              <CalendarDays size={23} />
            </div>

            <div className="stat-info">
              <span>Upcoming</span>

              <div className="stat-number">
                <strong>3</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="stat-card green">
          <div className="stat-top">
            <div className="stat-icon">
              <Stethoscope size={23} />
            </div>

            <div className="stat-info">
              <span>Completed</span>

              <div className="stat-number">
                <strong>9</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="stat-card orange">
          <div className="stat-top">
            <div className="stat-icon">
              <Clock3 size={23} />
            </div>

            <div className="stat-info">
              <span>Pending</span>

              <div className="stat-number">
                <strong>1</strong>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ================= APPOINTMENT LIST ================= */}

      <div className="page-section">

        <div className="section-heading">
          <div>
            <h2>Upcoming Appointments</h2>
            <p>Your scheduled doctor visits.</p>
          </div>

          <button
            type="button"
            className="view-all"
          >
            View Calendar
          </button>
        </div>

        <div className="appointments-list">

          {appointments.map((appointment) => (

            <div
              className="appointment-page-card"
              key={appointment.id}
            >

              {/* Doctor Avatar */}

              <div className="doctor-avatar">
                {appointment.initials}
              </div>

              {/* Doctor Info */}

              <div className="appointment-doctor-info">

                <h3>
                  {appointment.doctor}
                </h3>

                <p>
                  {appointment.specialty}
                </p>

                <div className="appointment-meta">

                  <span>
                    <CalendarDays size={14} />
                    {appointment.date}
                  </span>

                  <span>
                    <Clock3 size={14} />
                    {appointment.time}
                  </span>

                  <span>
                    {appointment.type === "Video Consultation" ? (
                      <Video size={14} />
                    ) : (
                      <MapPin size={14} />
                    )}

                    {appointment.location}
                  </span>

                </div>

              </div>

              {/* Status */}

              <div
                className={`appointment-status ${
                  appointment.status.toLowerCase()
                }`}
              >
                {appointment.status}
              </div>

              {/* Actions */}

              <button
                type="button"
                className="appointment-more"
                aria-label="Appointment options"
              >
                <MoreVertical size={18} />
              </button>

            </div>

          ))}

        </div>

      </div>

      {/* ================= EMPTY / INFO CARD ================= */}

      <div className="appointment-info-card">

        <div className="appointment-info-icon">
          <CalendarDays size={23} />
        </div>

        <div>
          <h3>Need a new appointment?</h3>

          <p>
            Book a consultation with one of our specialists
            and take the next step toward better health.
          </p>
        </div>

        <button
          type="button"
          className="primary-btn"
          onClick={() => {
            console.log("Find doctor");
          }}
        >
          Find a Doctor
        </button>

      </div>

    </div>
  );
}

export default Appointments;