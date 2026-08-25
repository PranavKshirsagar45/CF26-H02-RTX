import {
  FileText,
  CalendarDays,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

import { dashboardData } from "../data/dashboardData";

function LabReports() {
  const labReports = dashboardData.labReports;

  return (
    <div className="simple-page">
      <div className="page-header">
        <div>
          <h1>Lab Reports</h1>
          <p>
            View your latest laboratory reports and test results.
          </p>
        </div>

        <div className="report-count">
          <FileText size={20} />
          <span>{labReports.length} Reports</span>
        </div>
      </div>

      <div className="reports-container">
        {labReports.map((report) => (
          <div className="report-card" key={report.id}>
            
            <div className="report-icon">
              <FileText size={24} />
            </div>

            <div className="report-info">
              <h3>{report.name}</h3>

              <div className="report-meta">
                <span>{report.shortName}</span>

                <span>
                  <CalendarDays size={15} />
                  {report.date}
                </span>
              </div>
            </div>

            <div
              className={`report-status ${
                report.status === "Normal"
                  ? "normal"
                  : "borderline"
              }`}
            >
              {report.status === "Normal" ? (
                <CheckCircle size={17} />
              ) : (
                <AlertCircle size={17} />
              )}

              <span>{report.status}</span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default LabReports;