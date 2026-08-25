import { useEffect, useState } from "react";

import {
  CalendarDays,
  Clock3,
  MapPin,
  Video,
  Stethoscope,
  Plus,
  MoreVertical,
} from "lucide-react";

import {
  getMyAppointments,
  cancelAppointment,
} from "../services/appointmentService";

function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getMyAppointments();

      setAppointments(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to load appointments:", err);

      setError(
        err.response?.data?.message ||
          "Unable to load appointments."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async (id) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this appointment?"
    );

    if (!confirmCancel) return;

    try {
      await cancelAppointment(id);

      await loadAppointments();
    } catch (err) {
      console.error("Cancel appointment failed:", err);

      alert(
        err.response?.data?.message ||
          "Unable to cancel appointment."
      );
    }
  };

  const upcomingCount = appointments.filter(
    (appointment) =>
      appointment.status?.toLowerCase() === "confirmed" ||
      appointment.status?.toLowerCase() === "pending"
  ).length;

  const completedCount = appointments.filter(
    (appointment) =>
      appointment.status?.toLowerCase() === "completed"
  ).length;

  const pendingCount = appointments.filter(
    (appointment) =>
      appointment.status?.toLowerCase() === "pending"
  ).length;

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
                <strong>{upcomingCount}</strong>
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
                <strong>{completedCount}</strong>
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
                <strong>{pendingCount}</strong>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ================= APPOINTMENTS ================= */}

      <div className="page-section">

        <div className="section-heading">
          <div>
            <h2>Upcoming Appointments</h2>

            <p>
              Your scheduled doctor visits.
            </p>
          </div>

          <button
            type="button"
            className="view-all"
          >
            View Calendar
          </button>
        </div>

        {/* Loading */}

        {loading && (
          <div className="appointment-loading">
            Loading appointments...
          </div>
        )}

        {/* Error */}

        {!loading && error && (
          <div className="appointment-error">
            <p>{error}</p>

            <button
              type="button"
              className="primary-btn"
              onClick={loadAppointments}
            >
              Retry
            </button>
          </div>
        )}

        {/* Empty */}

        {!loading &&
          !error &&
          appointments.length === 0 && (
            <div className="appointment-empty">
              <CalendarDays size={40} />

              <h3>No appointments found</h3>

              <p>
                You don't have any appointments yet.
              </p>
            </div>
          )}

        {/* Appointment List */}

        {!loading &&
          !error &&
          appointments.length > 0 && (
            <div className="appointments-list">

              {appointments.map((appointment) => {

                const doctorName =
                  appointment.doctor ||
                  appointment.doctorName ||
                  "Doctor";

                const specialty =
                  appointment.specialty ||
                  appointment.doctorSpecialty ||
                  "Specialist";

                const date =
                  appointment.date ||
                  appointment.appointmentDate ||
                  "Date not available";

                const time =
                  appointment.time ||
                  appointment.appointmentTime ||
                  "Time not available";

                const location =
                  appointment.location ||
                  appointment.room ||
                  "Hospital";

                const type =
                  appointment.type ||
                  "In-person";

                const status =
                  appointment.status ||
                  "Pending";

                const initials = doctorName
                  .replace("Dr. ", "")
                  .split(" ")
                  .map((name) => name[0])
                  .join("")
                  .substring(0, 2)
                  .toUpperCase();

                return (
                  <div
                    className="appointment-page-card"
                    key={appointment.id}
                  >

                    {/* Doctor Avatar */}

                    <div className="doctor-avatar">
                      {initials}
                    </div>

                    {/* Doctor Info */}

                    <div className="appointment-doctor-info">

                      <h3>
                        {doctorName}
                      </h3>

                      <p>
                        {specialty}
                      </p>

                      <div className="appointment-meta">

                        <span>
                          <CalendarDays size={14} />
                          {date}
                        </span>

                        <span>
                          <Clock3 size={14} />
                          {time}
                        </span>

                        <span>
                          {type === "Video Consultation" ? (
                            <Video size={14} />
                          ) : (
                            <MapPin size={14} />
                          )}

                          {location}
                        </span>

                      </div>
                    </div>

                    {/* Status */}

                    <div
                      className={`appointment-status ${status.toLowerCase()}`}
                    >
                      {status}
                    </div>

                    {/* Actions */}

                    <button
                      type="button"
                      className="appointment-more"
                      aria-label="Appointment options"
                      onClick={() => {
                        if (
                          status.toLowerCase() !==
                          "cancelled"
                        ) {
                          handleCancel(appointment.id);
                        }
                      }}
                    >
                      <MoreVertical size={18} />
                    </button>

                  </div>
                );
              })}

            </div>
          )}

      </div>

      {/* ================= INFO CARD ================= */}

      <div className="appointment-info-card">

        <div className="appointment-info-icon">
          <CalendarDays size={23} />
        </div>

        <div>
          <h3>
            Need a new appointment?
          </h3>

          <p>
            Book a consultation with one of our
            specialists and take the next step
            toward better health.
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