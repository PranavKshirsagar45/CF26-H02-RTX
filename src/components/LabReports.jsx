import {
  FileText,
  CalendarDays,
  CheckCircle,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

import { dashboardData } from "../data/dashboardData";

function LabReports() {
  const labReports = dashboardData.labReports;

  return (
    <section className="panel">

      {/* ================= HEADER ================= */}

      <div className="panel-header">

        <div className="panel-title">

          <FileText
            size={18}
            strokeWidth={2.2}
          />

          <h3>
            Lab Reports
          </h3>

        </div>

        <button
          type="button"
          className="view-all"
          onClick={() => {
            console.log("View all lab reports");
          }}
        >
          View all
        </button>

      </div>

      {/* ================= REPORT LIST ================= */}

      <div className="lab-list">

        {labReports.map((report) => (

          <div
            className="lab-item"
            key={report.id}
          >

            {/* Report Icon */}

            <div className="lab-icon">

              <FileText
                size={14}
                strokeWidth={2}
              />

            </div>

            {/* Report Information */}

            <div className="lab-name">

              <strong>
                {report.name}
              </strong>

              <span>
                {report.shortName} • {report.date}
              </span>

            </div>

            {/* Status */}

            <div
              className={`status ${
                report.status.toLowerCase()
              }`}
            >

              {report.status === "Normal" ? (
                <CheckCircle size={12} />
              ) : (
                <AlertCircle size={12} />
              )}

              <span>
                {report.status}
              </span>

            </div>

          </div>

        ))}

      </div>

      {/* ================= FOOTER ================= */}

      <button
        type="button"
        className="health-record-btn"
        onClick={() => {
          console.log("All lab reports clicked");
        }}
      >
        <span>
          View All Reports
        </span>

        <ArrowRight size={13} />

      </button>

    </section>
  );
}

export default LabReports;