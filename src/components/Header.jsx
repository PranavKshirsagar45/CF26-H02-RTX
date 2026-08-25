import {
  Bell,
  Search,
  LogIn,
  UserPlus,
} from "lucide-react";
import "./../styles/Header.css";
function Header() {
  // Backend connect hone ke baad yaha actual auth check aayega
  const isLoggedIn = false;

  return (
    <header className="top-header">

      {/* Search */}
      <div className="header-search">
        <Search size={17} />

        <input
          type="text"
          placeholder="Search doctors, appointments..."
        />
      </div>

      <div className="header-right">

        {/* Notification */}
        <button className="header-icon-button">
          <Bell size={19} />
          <span className="notification-dot"></span>
        </button>

        {isLoggedIn ? (
          /* ================= LOGGED IN ================= */
          <div className="header-user">

            <div className="header-avatar">
              RS
            </div>

            <div className="header-user-info">
              <strong>Rahul Sharma</strong>
              <span>Patient ID: P10245</span>
            </div>

          </div>
        ) : (
          /* ================= LOGGED OUT ================= */
          <div className="auth-actions">

            <button className="header-login">
              <LogIn size={16} />
              Login
            </button>

            <button className="header-register">
              <UserPlus size={16} />
              Register
            </button>

          </div>
        )}

      </div>
    </header>
  );
}

export default Header;