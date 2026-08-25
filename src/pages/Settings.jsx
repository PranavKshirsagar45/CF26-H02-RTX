import {
  User,
  Bell,
  Lock,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Camera,
  Save,
  Eye,
  EyeOff,
  ChevronRight,
} from "lucide-react";

import { useState } from "react";

function Settings() {
  const [activeTab, setActiveTab] = useState("profile");

  const [showPassword, setShowPassword] = useState(false);

  const [profile, setProfile] = useState({
    firstName: "Rahul",
    lastName: "Sharma",
    email: "rahul.sharma@gmail.com",
    phone: "+91 98765 43210",
    address: "Nagpur, Maharashtra",
  });

  const [notifications, setNotifications] = useState({
    appointments: true,
    reports: true,
    medicines: true,
    messages: true,
    offers: false,
  });

  const [password, setPassword] = useState({
    current: "",
    newPassword: "",
    confirm: "",
  });

  const handleProfileChange = (event) => {
    const { name, value } = event.target;

    setProfile((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handlePasswordChange = (event) => {
    const { name, value } = event.target;

    setPassword((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const toggleNotification = (key) => {
    setNotifications((previous) => ({
      ...previous,
      [key]: !previous[key],
    }));
  };

  const handleSaveProfile = () => {
    console.log("Profile saved:", profile);
    alert("Profile updated successfully.");
  };

  const handleChangePassword = () => {
    if (!password.current || !password.newPassword) {
      alert("Please fill all password fields.");
      return;
    }

    if (password.newPassword !== password.confirm) {
      alert("New password and confirm password do not match.");
      return;
    }

    alert("Password updated successfully.");

    setPassword({
      current: "",
      newPassword: "",
      confirm: "",
    });
  };

  return (
    <div className="simple-page settings-page">

      {/* ================= HEADER ================= */}

      <div className="page-header">

        <div>
          <h1>Settings</h1>

          <p>
            Manage your account, notifications and
            security preferences.
          </p>
        </div>

      </div>

      {/* ================= SETTINGS LAYOUT ================= */}

      <div className="settings-layout">

        {/* ================= SETTINGS SIDEBAR ================= */}

        <div className="settings-sidebar">

          <button
            type="button"
            className={
              activeTab === "profile"
                ? "settings-menu active"
                : "settings-menu"
            }
            onClick={() => setActiveTab("profile")}
          >
            <div className="settings-menu-icon">
              <User size={18} />
            </div>

            <div>
              <strong>Profile</strong>
              <span>Personal information</span>
            </div>

            <ChevronRight size={16} />
          </button>

          <button
            type="button"
            className={
              activeTab === "notifications"
                ? "settings-menu active"
                : "settings-menu"
            }
            onClick={() => setActiveTab("notifications")}
          >
            <div className="settings-menu-icon">
              <Bell size={18} />
            </div>

            <div>
              <strong>Notifications</strong>
              <span>Notification preferences</span>
            </div>

            <ChevronRight size={16} />
          </button>

          <button
            type="button"
            className={
              activeTab === "security"
                ? "settings-menu active"
                : "settings-menu"
            }
            onClick={() => setActiveTab("security")}
          >
            <div className="settings-menu-icon">
              <Lock size={18} />
            </div>

            <div>
              <strong>Security</strong>
              <span>Password and account security</span>
            </div>

            <ChevronRight size={16} />
          </button>

          <button
            type="button"
            className={
              activeTab === "privacy"
                ? "settings-menu active"
                : "settings-menu"
            }
            onClick={() => setActiveTab("privacy")}
          >
            <div className="settings-menu-icon">
              <ShieldCheck size={18} />
            </div>

            <div>
              <strong>Privacy</strong>
              <span>Your privacy preferences</span>
            </div>

            <ChevronRight size={16} />
          </button>

        </div>

        {/* ================= SETTINGS CONTENT ================= */}

        <div className="settings-content">

          {/* ================= PROFILE ================= */}

          {activeTab === "profile" && (

            <div className="settings-card">

              <div className="settings-card-header">

                <div>
                  <h2>Personal Information</h2>

                  <p>
                    Update your personal information
                    and contact details.
                  </p>
                </div>

              </div>

              {/* Profile Picture */}

              <div className="profile-picture-section">

                <div className="large-profile-avatar">
                  RS
                </div>

                <div>
                  <h3>Profile Photo</h3>

                  <p>
                    JPG, PNG or WEBP. Maximum size 2MB.
                  </p>

                  <button
                    type="button"
                    className="upload-photo-button"
                  >
                    <Camera size={15} />
                    Change Photo
                  </button>
                </div>

              </div>

              {/* Form */}

              <div className="settings-form">

                <div className="form-row">

                  <div className="form-group">

                    <label htmlFor="firstName">
                      First Name
                    </label>

                    <div className="settings-input">

                      <User size={16} />

                      <input
                        id="firstName"
                        name="firstName"
                        value={profile.firstName}
                        onChange={handleProfileChange}
                      />

                    </div>

                  </div>

                  <div className="form-group">

                    <label htmlFor="lastName">
                      Last Name
                    </label>

                    <div className="settings-input">

                      <User size={16} />

                      <input
                        id="lastName"
                        name="lastName"
                        value={profile.lastName}
                        onChange={handleProfileChange}
                      />

                    </div>

                  </div>

                </div>

                <div className="form-row">

                  <div className="form-group">

                    <label htmlFor="email">
                      Email Address
                    </label>

                    <div className="settings-input">

                      <Mail size={16} />

                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleProfileChange}
                      />

                    </div>

                  </div>

                  <div className="form-group">

                    <label htmlFor="phone">
                      Phone Number
                    </label>

                    <div className="settings-input">

                      <Phone size={16} />

                      <input
                        id="phone"
                        name="phone"
                        value={profile.phone}
                        onChange={handleProfileChange}
                      />

                    </div>

                  </div>

                </div>

                <div className="form-group">

                  <label htmlFor="address">
                    Address
                  </label>

                  <div className="settings-input">

                    <MapPin size={16} />

                    <input
                      id="address"
                      name="address"
                      value={profile.address}
                      onChange={handleProfileChange}
                    />

                  </div>

                </div>

              </div>

              <div className="settings-card-footer">

                <button
                  type="button"
                  className="primary-btn"
                  onClick={handleSaveProfile}
                >
                  <Save size={15} />
                  Save Changes
                </button>

              </div>

            </div>

          )}

          {/* ================= NOTIFICATIONS ================= */}

          {activeTab === "notifications" && (

            <div className="settings-card">

              <div className="settings-card-header">

                <div>
                  <h2>Notification Preferences</h2>

                  <p>
                    Choose which notifications you want
                    to receive.
                  </p>
                </div>

              </div>

              <div className="notification-settings">

                <NotificationSetting
                  title="Appointment Reminders"
                  description="Receive reminders about upcoming appointments."
                  checked={notifications.appointments}
                  onChange={() =>
                    toggleNotification("appointments")
                  }
                />

                <NotificationSetting
                  title="Lab Reports"
                  description="Get notified when new laboratory reports are available."
                  checked={notifications.reports}
                  onChange={() =>
                    toggleNotification("reports")
                  }
                />

                <NotificationSetting
                  title="Medication Reminders"
                  description="Receive reminders to take your medicines."
                  checked={notifications.medicines}
                  onChange={() =>
                    toggleNotification("medicines")
                  }
                />

                <NotificationSetting
                  title="Messages"
                  description="Get notified when doctors send you a message."
                  checked={notifications.messages}
                  onChange={() =>
                    toggleNotification("messages")
                  }
                />

                <NotificationSetting
                  title="Offers & Updates"
                  description="Receive health tips, offers and hospital updates."
                  checked={notifications.offers}
                  onChange={() =>
                    toggleNotification("offers")
                  }
                />

              </div>

            </div>

          )}

          {/* ================= SECURITY ================= */}

          {activeTab === "security" && (

            <div className="settings-card">

              <div className="settings-card-header">

                <div>
                  <h2>Password & Security</h2>

                  <p>
                    Keep your account secure by using
                    a strong password.
                  </p>
                </div>

              </div>

              <div className="security-info-box">

                <ShieldCheck size={22} />

                <div>
                  <strong>
                    Your account is protected
                  </strong>

                  <p>
                    Never share your password with
                    anyone.
                  </p>
                </div>

              </div>

              <div className="settings-form">

                <div className="form-group">

                  <label htmlFor="current">
                    Current Password
                  </label>

                  <div className="settings-input">

                    <Lock size={16} />

                    <input
                      id="current"
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      name="current"
                      value={password.current}
                      onChange={handlePasswordChange}
                    />

                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() =>
                        setShowPassword(
                          (previous) => !previous
                        )
                      }
                    >
                      {showPassword ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}
                    </button>

                  </div>

                </div>

                <div className="form-group">

                  <label htmlFor="newPassword">
                    New Password
                  </label>

                  <div className="settings-input">

                    <Lock size={16} />

                    <input
                      id="newPassword"
                      type="password"
                      name="newPassword"
                      value={password.newPassword}
                      onChange={handlePasswordChange}
                    />

                  </div>

                </div>

                <div className="form-group">

                  <label htmlFor="confirm">
                    Confirm New Password
                  </label>

                  <div className="settings-input">

                    <Lock size={16} />

                    <input
                      id="confirm"
                      type="password"
                      name="confirm"
                      value={password.confirm}
                      onChange={handlePasswordChange}
                    />

                  </div>

                </div>

              </div>

              <div className="settings-card-footer">

                <button
                  type="button"
                  className="primary-btn"
                  onClick={handleChangePassword}
                >
                  <Save size={15} />
                  Update Password
                </button>

              </div>

            </div>

          )}

          {/* ================= PRIVACY ================= */}

          {activeTab === "privacy" && (

            <div className="settings-card">

              <div className="settings-card-header">

                <div>
                  <h2>Privacy & Data</h2>

                  <p>
                    Manage how your personal information
                    is handled.
                  </p>
                </div>

              </div>

              <div className="privacy-box">

                <div className="privacy-icon">
                  <ShieldCheck size={23} />
                </div>

                <div>
                  <h3>
                    Your health data is protected
                  </h3>

                  <p>
                    Your medical information is private
                    and is only accessible to authorized
                    healthcare professionals.
                  </p>
                </div>

              </div>

              <div className="privacy-options">

                <button type="button">
                  <div>
                    <strong>
                      Download My Data
                    </strong>

                    <span>
                      Download a copy of your account data.
                    </span>
                  </div>

                  <ChevronRight size={18} />
                </button>

                <button type="button">
                  <div>
                    <strong>
                      Privacy Policy
                    </strong>

                    <span>
                      Read our privacy policy and data practices.
                    </span>
                  </div>

                  <ChevronRight size={18} />
                </button>

                <button type="button">
                  <div>
                    <strong>
                      Terms & Conditions
                    </strong>

                    <span>
                      Review the terms of using our services.
                    </span>
                  </div>

                  <ChevronRight size={18} />
                </button>

              </div>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

function NotificationSetting({
  title,
  description,
  checked,
  onChange,
}) {
  return (
    <div className="notification-setting">

      <div className="notification-setting-icon">
        <Bell size={18} />
      </div>

      <div className="notification-setting-info">

        <strong>
          {title}
        </strong>

        <span>
          {description}
        </span>

      </div>

      <button
        type="button"
        className={`toggle ${
          checked ? "active" : ""
        }`}
        onClick={onChange}
        aria-label={`Toggle ${title}`}
      >
        <span />
      </button>

    </div>
  );
}

export default Settings;