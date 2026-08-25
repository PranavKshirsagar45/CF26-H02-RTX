import {
  LayoutDashboard,
  CalendarDays,
  HeartPulse,
  Pill,
  FileText,
  Receipt,
  Stethoscope,
  FolderOpen,
  ShieldCheck,
  MessageSquare,
  Settings,
  LogOut,
  PhoneCall,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const mainMenu = [
  {
    label: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Appointments",
    path: "/appointments",
    icon: CalendarDays,
  },
  {
    label: "Health",
    path: "/health",
    icon: HeartPulse,
  },
  {
    label: "Prescriptions",
    path: "/prescriptions",
    icon: Pill,
  },
  {
    label: "Lab Reports",
    path: "/lab-reports",
    icon: FileText,
  },
  {
    label: "Bills & Payments",
    path: "/bills",
    icon: Receipt,
  },
  {
    label: "Doctors",
    path: "/doctors",
    icon: Stethoscope,
  },
  {
    label: "Medical Records",
    path: "/medical-records",
    icon: FolderOpen,
  },
  {
    label: "Insurance",
    path: "/insurance",
    icon: ShieldCheck,
  },
  {
    label: "Messages",
    path: "/messages",
    icon: MessageSquare,
    badge: 3,
  },
];

const bottomMenu = [
  {
    label: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

function Sidebar() {
  return (
    <aside className="sidebar">

      {/* ================= BRAND ================= */}

      <div className="brand">
        <div className="brand-icon">
          <HeartPulse size={23} strokeWidth={2.4} />
        </div>

        <div>
          <h2>MediCare</h2>
          <span>Patient Portal</span>
        </div>
      </div>

      {/* ================= MAIN MENU ================= */}

      <nav className="sidebar-menu">

        {mainMenu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
            >
              <Icon size={18} strokeWidth={2} />

              <span>{item.label}</span>

              {item.badge && (
                <span className="message-badge">
                  {item.badge}
                </span>
              )}
            </NavLink>
          );
        })}

      </nav>

      {/* ================= DIVIDER ================= */}

      <div className="sidebar-divider" />

      {/* ================= SETTINGS ================= */}

      <nav className="sidebar-menu">

        {bottomMenu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
            >
              <Icon size={18} strokeWidth={2} />

              <span>{item.label}</span>
            </NavLink>
          );
        })}

        {/* Logout */}

        <button
          type="button"
          className="sidebar-link logout"
          onClick={() => {
            console.log("Logout clicked");
          }}
        >
          <LogOut size={18} strokeWidth={2} />

          <span>Logout</span>
        </button>

      </nav>

      {/* ================= EMERGENCY ================= */}

      <div className="emergency-card">

        <div className="emergency-icon">
          <PhoneCall size={17} />
        </div>

        <div>
          <strong>Emergency</strong>

          <span>Need immediate help?</span>

          <b>108</b>
        </div>

      </div>

    </aside>
  );
}

export default Sidebar;