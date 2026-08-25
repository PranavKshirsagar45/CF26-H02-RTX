import {
  ShieldCheck,
  HeartPulse,
  ArrowRight,
} from "lucide-react";

function CareCard() {
  return (
    <section className="care-card">

      {/* ================= TEXT ================= */}

      <div className="care-text">

        <h3>
          Your Health, Our Care
        </h3>

        <p>
          Keep your health records updated and
          <br />
          stay connected with your healthcare team.
        </p>

        <button
          type="button"
          className="health-record-btn"
          onClick={() => {
            console.log("Health care clicked");
          }}
          style={{
            width: "auto",
            padding: "0 12px",
            marginTop: "14px",
          }}
        >
          <span>
            Explore Health Care
          </span>

          <ArrowRight size={13} />
        </button>

      </div>

      {/* ================= ILLUSTRATION ================= */}

      <div className="care-illustration">

        <div className="shield">
          <ShieldCheck
            size={68}
            strokeWidth={1.5}
          />
        </div>

        <div className="family-circle">
          <HeartPulse
            size={32}
            strokeWidth={1.8}
          />
        </div>

      </div>

    </section>
  );
}

export default CareCard;