import {
  CalendarDays,
  FileText,
  Pill,
  Receipt,
  HeartPulse,
  ArrowUpRight,
} from "lucide-react";

const iconMap = {
  appointment: CalendarDays,
  reports: FileText,
  prescriptions: Pill,
  bills: Receipt,
  health: HeartPulse,
};

function StatCard({ stat }) {
  const Icon = iconMap[stat.type] || FileText;

  const getValue = () => {
    if (stat.type === "bills") {
      return (
        <>
          ₹{stat.value.toLocaleString("en-IN")}
          <small> pending</small>
        </>
      );
    }

    if (stat.type === "health") {
      return (
        <>
          {stat.value}
          <small>/100</small>
        </>
      );
    }

    return stat.value;
  };

  const getLinkText = () => {
    switch (stat.type) {
      case "appointment":
        return "View appointments";

      case "reports":
        return "View reports";

      case "prescriptions":
        return "View prescriptions";

      case "bills":
        return "View bills";

      case "health":
        return "View health";

      default:
        return "View details";
    }
  };

  return (
    <div className={`stat-card ${stat.color}`}>

      {/* ================= TOP ================= */}

      <div className="stat-top">

        <div className="stat-icon">
          <Icon size={24} strokeWidth={2} />
        </div>

        <div className="stat-info">

          <span>
            {stat.title}
          </span>

          <div className="stat-number">
            <strong>
              {getValue()}
            </strong>
          </div>

        </div>

      </div>

      {/* ================= LINK ================= */}

      <button
        type="button"
        className="stat-link"
        onClick={() => {
          console.log(`${stat.title} clicked`);
        }}
      >
        {getLinkText()}

        <ArrowUpRight size={12} />

      </button>

    </div>
  );
}

export default StatCard;