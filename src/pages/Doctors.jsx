import {
  Search,
  MapPin,
  CalendarDays,
  Clock3,
  Star,
  Video,
  Stethoscope,
  ArrowRight,
} from "lucide-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Priya Mehta",
    specialty: "Cardiologist",
    experience: "12 Years Experience",
    rating: "4.9",
    patients: "2,400+ Patients",
    location: "Cardiology Department",
    availability: "Available Today",
    initials: "PM",
  },
  {
    id: 2,
    name: "Dr. Arjun Patel",
    specialty: "General Physician",
    experience: "10 Years Experience",
    rating: "4.8",
    patients: "1,900+ Patients",
    location: "OPD - 1",
    availability: "Available Today",
    initials: "AP",
  },
  {
    id: 3,
    name: "Dr. Neha Kapoor",
    specialty: "Dermatologist",
    experience: "8 Years Experience",
    rating: "4.9",
    patients: "1,500+ Patients",
    location: "Dermatology Department",
    availability: "Available Tomorrow",
    initials: "NK",
  },
  {
    id: 4,
    name: "Dr. Rahul Verma",
    specialty: "Orthopedic Surgeon",
    experience: "15 Years Experience",
    rating: "4.7",
    patients: "3,100+ Patients",
    location: "Orthopedic Department",
    availability: "Available Today",
    initials: "RV",
  },
];

function Doctors() {
  return (
    <div className="simple-page">

      {/* ================= HEADER ================= */}

      <div className="page-header">

        <div>
          <h1>Find a Doctor</h1>

          <p>
            Find the right specialist and book your
            appointment with ease.
          </p>
        </div>

      </div>

      {/* ================= SEARCH ================= */}

      <div className="doctor-search-section">

        <div className="doctor-search-box">

          <Search size={19} />

          <input
            type="text"
            placeholder="Search doctor, specialty..."
            onChange={(event) => {
              console.log(event.target.value);
            }}
          />

        </div>

        <select
          className="doctor-filter"
          defaultValue="all"
        >
          <option value="all">
            All Specialties
          </option>

          <option value="cardiology">
            Cardiology
          </option>

          <option value="general">
            General Physician
          </option>

          <option value="dermatology">
            Dermatology
          </option>

          <option value="orthopedic">
            Orthopedics
          </option>
        </select>

      </div>

      {/* ================= SPECIALTIES ================= */}

      <div className="doctor-specialties">

        <button
          type="button"
          className="specialty-chip active"
        >
          All Doctors
        </button>

        <button
          type="button"
          className="specialty-chip"
        >
          Cardiology
        </button>

        <button
          type="button"
          className="specialty-chip"
        >
          General Medicine
        </button>

        <button
          type="button"
          className="specialty-chip"
        >
          Dermatology
        </button>

        <button
          type="button"
          className="specialty-chip"
        >
          Orthopedics
        </button>

      </div>

      {/* ================= DOCTORS ================= */}

      <div className="page-section">

        <div className="section-heading">

          <div>
            <h2>
              Recommended Doctors
            </h2>

            <p>
              Experienced specialists available for consultation.
            </p>
          </div>

          <span className="doctor-count">
            {doctors.length} Doctors
          </span>

        </div>

        <div className="doctors-grid">

          {doctors.map((doctor) => (

            <div
              className="doctor-card"
              key={doctor.id}
            >

              {/* Top */}

              <div className="doctor-card-top">

                <div className="doctor-large-avatar">
                  {doctor.initials}
                </div>

                <div className="doctor-rating">

                  <Star
                    size={14}
                    fill="currentColor"
                  />

                  <span>
                    {doctor.rating}
                  </span>

                </div>

              </div>

              {/* Doctor Info */}

              <div className="doctor-card-info">

                <h3>
                  {doctor.name}
                </h3>

                <p className="doctor-specialty">
                  {doctor.specialty}
                </p>

                <p className="doctor-experience">
                  {doctor.experience}
                </p>

              </div>

              {/* Details */}

              <div className="doctor-card-details">

                <div>
                  <Stethoscope size={15} />
                  <span>
                    {doctor.patients}
                  </span>
                </div>

                <div>
                  <MapPin size={15} />
                  <span>
                    {doctor.location}
                  </span>
                </div>

              </div>

              {/* Availability */}

              <div className="doctor-availability">

                <div>
                  <Clock3 size={14} />

                  <span>
                    {doctor.availability}
                  </span>
                </div>

                <Video size={15} />

              </div>

              {/* Actions */}

              <div className="doctor-actions">

                <button
                  type="button"
                  className="doctor-outline-btn"
                  onClick={() => {
                    console.log(
                      `View ${doctor.name}`
                    );
                  }}
                >
                  View Profile
                </button>

                <button
                  type="button"
                  className="doctor-book-btn"
                  onClick={() => {
                    console.log(
                      `Book appointment with ${doctor.name}`
                    );
                  }}
                >
                  <CalendarDays size={15} />
                  Book
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* ================= FIND SPECIALIST ================= */}

      <div className="specialist-card">

        <div className="specialist-icon">
          <Stethoscope size={25} />
        </div>

        <div className="specialist-content">

          <h3>
            Can't find the right specialist?
          </h3>

          <p>
            Tell us about your symptoms and our team
            can help you find the right doctor.
          </p>

        </div>

        <button
          type="button"
          className="specialist-button"
          onClick={() => {
            console.log("Find specialist");
          }}
        >
          Find Specialist
          <ArrowRight size={16} />
        </button>

      </div>

    </div>
  );
}

export default Doctors;