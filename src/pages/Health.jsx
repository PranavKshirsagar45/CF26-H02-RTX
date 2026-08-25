import {
  HeartPulse,
  Activity,
  Droplets,
  Scale,
  Ruler,
  Gauge,
  ArrowUpRight,
  CalendarDays,
  FileText,
} from "lucide-react";

import { dashboardData } from "../data/dashboardData";

function Health() {
  const { health } = dashboardData;

  return (
    <div className="simple-page">

      {/* ================= HEADER ================= */}

      <div className="page-header">

        <div>
          <h1>My Health</h1>

          <p>
            Track your health information and monitor your
            overall wellness.
          </p>
        </div>

        <button
          type="button"
          className="primary-btn"
          onClick={() => {
            console.log("Health record clicked");
          }}
        >
          <FileText size={16} />
          Health Records
        </button>

      </div>

      {/* ================= HEALTH SCORE ================= */}

      <div className="health-overview">

        <div className="health-score-card">

          <div>
            <div className="health-card-title">

              <HeartPulse size={19} />

              <span>
                Overall Health Score
              </span>

            </div>

            <h2>
              {health.score}
              <small>/100</small>
            </h2>

            <p>
              Your health score is looking good.
              Keep maintaining your healthy habits.
            </p>

          </div>

          <div
            className="large-score-circle"
            style={{
              background: `
                radial-gradient(
                  circle at center,
                  white 58%,
                  transparent 59%
                ),
                conic-gradient(
                  #2aab72 0 ${health.score}%,
                  #e6f3ec ${health.score}% 100%
                )
              `,
            }}
          >
            <strong>
              {health.score}
            </strong>

            <span>
              Excellent
            </span>
          </div>

        </div>

      </div>

      {/* ================= VITALS ================= */}

      <div className="page-section">

        <div className="section-heading">

          <div>
            <h2>Health Vitals</h2>

            <p>
              Your latest recorded health measurements.
            </p>
          </div>

          <span className="last-updated">
            <CalendarDays size={13} />
            Updated recently
          </span>

        </div>

        <div className="vitals-grid">

          {/* Blood Group */}

          <div className="vital-card">

            <div className="vital-icon purple">
              <Droplets size={21} />
            </div>

            <span>Blood Group</span>

            <strong>
              {health.bloodGroup}
            </strong>

            <small>
              Current
            </small>

          </div>

          {/* Weight */}

          <div className="vital-card">

            <div className="vital-icon blue">
              <Scale size={21} />
            </div>

            <span>Weight</span>

            <strong>
              {health.weight}
              <small> kg</small>
            </strong>

            <small>
              Healthy range
            </small>

          </div>

          {/* Height */}

          <div className="vital-card">

            <div className="vital-icon green">
              <Ruler size={21} />
            </div>

            <span>Height</span>

            <strong>
              {health.height}
              <small> cm</small>
            </strong>

            <small>
              Current
            </small>

          </div>

          {/* BMI */}

          <div className="vital-card">

            <div className="vital-icon orange">
              <Gauge size={21} />
            </div>

            <span>BMI</span>

            <strong>
              {health.bmi}
            </strong>

            <small className="bmi-good">
              Normal
            </small>

          </div>

        </div>

      </div>

      {/* ================= HEALTH INSIGHTS ================= */}

      <div className="health-insights">

        <div className="health-insight-card">

          <div className="insight-icon">
            <Activity size={21} />
          </div>

          <div>
            <h3>Stay Active</h3>

            <p>
              Regular physical activity can help maintain
              a healthy heart and improve overall wellness.
            </p>
          </div>

          <ArrowUpRight size={18} />

        </div>

        <div className="health-insight-card">

          <div className="insight-icon">
            <Droplets size={21} />
          </div>

          <div>
            <h3>Stay Hydrated</h3>

            <p>
              Keep yourself hydrated throughout the day
              for better energy and overall health.
            </p>
          </div>

          <ArrowUpRight size={18} />

        </div>

      </div>

    </div>
  );
}

export default Health;