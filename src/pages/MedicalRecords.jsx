import {
  FileText,
  Download,
  CalendarDays,
  Eye,
  Activity,
  Pill,
  TestTube,
  Stethoscope,
  ChevronRight,
} from "lucide-react";

const medicalRecords = [
  {
    id: 1,
    title: "Complete Blood Count",
    category: "Lab Report",
    date: "20 May 2024",
    doctor: "Dr. Priya Mehta",
    icon: TestTube,
    type: "Lab",
  },
  {
    id: 2,
    title: "Cardiology Consultation",
    category: "Doctor Visit",
    date: "24 May 2024",
    doctor: "Dr. Priya Mehta",
    icon: Stethoscope,
    type: "Consultation",
  },
  {
    id: 3,
    title: "Prescription - May 2024",
    category: "Prescription",
    date: "20 May 2024",
    doctor: "Dr. Priya Mehta",
    icon: Pill,
    type: "Prescription",
  },
  {
    id: 4,
    title: "Lipid Profile",
    category: "Lab Report",
    date: "15 May 2024",
    doctor: "Laboratory Department",
    icon: Activity,
    type: "Lab",
  },
];

function MedicalRecords() {
  return (
    <div className="simple-page">

      {/* ================= HEADER ================= */}

      <div className="page-header">

        <div>
          <h1>Medical Records</h1>

          <p>
            Access your medical history, reports,
            prescriptions and consultation records.
          </p>
        </div>

        <button
          type="button"
          className="primary-btn"
          onClick={() => {
            console.log("Download all records");
          }}
        >
          <Download size={16} />
          Download Records
        </button>

      </div>

      {/* ================= SUMMARY ================= */}

      <div className="records-summary">

        <div className="record-summary-card">

          <div className="record-summary-icon purple">
            <FileText size={21} />
          </div>

          <div>
            <span>Total Records</span>
            <strong>12</strong>
          </div>

        </div>

        <div className="record-summary-card">

          <div className="record-summary-icon green">
            <TestTube size={21} />
          </div>

          <div>
            <span>Lab Reports</span>
            <strong>5</strong>
          </div>

        </div>

        <div className="record-summary-card">

          <div className="record-summary-icon blue">
            <Stethoscope size={21} />
          </div>

          <div>
            <span>Consultations</span>
            <strong>4</strong>
          </div>

        </div>

        <div className="record-summary-card">

          <div className="record-summary-icon orange">
            <Pill size={21} />
          </div>

          <div>
            <span>Prescriptions</span>
            <strong>3</strong>
          </div>

        </div>

      </div>

      {/* ================= RECORDS ================= */}

      <div className="page-section">

        <div className="section-heading">

          <div>
            <h2>Recent Medical Records</h2>

            <p>
              Your latest medical documents and history.
            </p>
          </div>

          <button
            type="button"
            className="view-all"
          >
            View All
          </button>

        </div>

        <div className="medical-records-list">

          {medicalRecords.map((record) => {

            const Icon = record.icon;

            return (
              <div
                className="medical-record-card"
                key={record.id}
              >

                {/* Icon */}

                <div
                  className={`medical-record-icon ${
                    record.type.toLowerCase()
                  }`}
                >
                  <Icon size={22} />
                </div>

                {/* Details */}

                <div className="medical-record-info">

                  <h3>
                    {record.title}
                  </h3>

                  <p>
                    {record.category}
                  </p>

                  <div className="medical-record-meta">

                    <span>
                      <CalendarDays size={13} />
                      {record.date}
                    </span>

                    <span>
                      {record.doctor}
                    </span>

                  </div>

                </div>

                {/* Actions */}

                <div className="medical-record-actions">

                  <button
                    type="button"
                    className="record-action-btn"
                    aria-label="View record"
                    onClick={() => {
                      console.log(
                        `View ${record.title}`
                      );
                    }}
                  >
                    <Eye size={17} />
                    <span>View</span>
                  </button>

                  <button
                    type="button"
                    className="record-download-btn"
                    aria-label="Download record"
                    onClick={() => {
                      console.log(
                        `Download ${record.title}`
                      );
                    }}
                  >
                    <Download size={17} />
                  </button>

                  <button
                    type="button"
                    className="record-next-btn"
                    aria-label="Open record"
                  >
                    <ChevronRight size={18} />
                  </button>

                </div>

              </div>
            );
          })}

        </div>

      </div>

      {/* ================= HEALTH HISTORY ================= */}

      <div className="medical-history-card">

        <div className="medical-history-icon">
          <Activity size={23} />
        </div>

        <div className="medical-history-content">

          <h3>
            Keep your medical history updated
          </h3>

          <p>
            Having complete medical records helps doctors
            understand your health history and provide
            better care.
          </p>

        </div>

        <button
          type="button"
          className="medical-history-button"
          onClick={() => {
            console.log("Update medical history");
          }}
        >
          Update History
          <ChevronRight size={16} />
        </button>

      </div>

    </div>
  );
}

export default MedicalRecords;