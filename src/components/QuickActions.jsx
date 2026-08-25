import {
  CalendarPlus,
  FileText,
  Pill,
  Receipt,
  UserRound,
  ArrowUpRight,
} from "lucide-react";

const quickActions = [
  {
    id: 1,
    title: "Book Appointment",
    subtitle: "Find a doctor",
    icon: CalendarPlus,
    path: "/appointments",
  },
  {
    id: 2,
    title: "Lab Reports",
    subtitle: "View test results",
    icon: FileText,
    path: "/lab-reports",
  },
  {
    id: 3,
    title: "Prescriptions",
    subtitle: "Your medicines",
    icon: Pill,
    path: "/prescriptions",
  },
  {
    id: 4,
    title: "Pay Bills",
    subtitle: "Manage payments",
    icon: Receipt,
    path: "/bills",
  },
  {
    id: 5,
    title: "Find a Doctor",
    subtitle: "Browse specialists",
    icon: UserRound,
    path: "/doctors",
  },
];

function QuickActions() {
  const handleAction = (action) => {
    console.log(`${action.title} clicked`);

    // Routing hum App.jsx/React Router ke through handle karenge.
    // Abhi buttons UI ke liye ready hain.
  };

  return (
    <section className="quick-panel">

      {/* ================= HEADER ================= */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3>
          Quick Actions
        </h3>

        <span
          style={{
            color: "#777b8d",
            fontSize: "10px",
          }}
        >
          Frequently used
        </span>
      </div>

      {/* ================= ACTIONS ================= */}

      <div className="quick-actions">

        {quickActions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              type="button"
              className="quick-action"
              key={action.id}
              onClick={() => handleAction(action)}
            >

              {/* Icon */}

              <div className="quick-icon">
                <Icon
                  size={20}
                  strokeWidth={2}
                />
              </div>

              {/* Title */}

              <strong>
                {action.title}
              </strong>

              {/* Subtitle */}

              <span>
                {action.subtitle}
              </span>

              {/* Small arrow */}

              <div
                style={{
                  marginTop: "5px",
                  color: "#7040d1",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ArrowUpRight size={11} />
              </div>

            </button>
          );
        })}

      </div>

    </section>
  );
}

export default QuickActions;