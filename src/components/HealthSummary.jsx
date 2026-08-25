import {
  HeartPulse,
  Activity,
  Scale,
  Ruler,
  Droplets,
  ArrowRight,
} from "lucide-react";

import { dashboardData } from "../data/dashboardData";

function HealthSummary() {
  const { health } = dashboardData;

  return (
    <section className="panel health-panel">

      {/* ================= HEADER ================= */}

      <div className="panel-header">

        <div className="panel-title">

          <HeartPulse
            size={18}
            strokeWidth={2.2}
          />

          <h3>
            Health Summary
          </h3>

        </div>

        <button
          type="button"
          className="view-all"
          onClick={() => {
            console.log("Health summary clicked");
          }}
        >
          View details
        </button>

      </div>

      {/* ================= CONTENT ================= */}

      <div className="health-content">

        {/* ================= HEALTH DETAILS ================= */}

        <div className="health-details">

          {/* Blood Group */}

          <div className="health-box">

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Droplets size={14} />

              <span>
                Blood Group
              </span>
            </div>

            <strong>
              {health.bloodGroup}
            </strong>

          </div>

          {/* Weight */}

          <div className="health-box">

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Scale size={14} />

              <span>
                Weight
              </span>
            </div>

            <strong>
              {health.weight} kg
            </strong>

          </div>

          {/* Height */}

          <div className="health-box">

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Ruler size={14} />

              <span>
                Height
              </span>
            </div>

            <strong>
              {health.height} cm
            </strong>

          </div>

          {/* BMI */}

          <div className="health-box">

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Activity size={14} />

              <span>
                BMI
              </span>
            </div>

            <strong>
              {health.bmi}
            </strong>

          </div>

        </div>

        {/* ================= HEALTH SCORE ================= */}

        <div className="health-score">

          <div
            className="score-circle"
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

            <div>

              <strong>
                {health.score}
              </strong>

              <span>
                Health Score
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* ================= BUTTON ================= */}

      <button
        type="button"
        className="health-record-btn"
        onClick={() => {
          console.log("Medical records clicked");
        }}
      >
        <span>
          View Medical Records
        </span>

        <ArrowRight size={13} />

      </button>

    </section>
  );
}

export default HealthSummary;