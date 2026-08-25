import {
  ShieldCheck,
  FileText,
  CalendarDays,
  CheckCircle,
  Clock3,
  Download,
  Phone,
  ArrowUpRight,
  CreditCard,
} from "lucide-react";

const insuranceData = {
  provider: "HealthCare Plus Insurance",
  policyNumber: "HC-2024-784521",
  plan: "Premium Health Plan",
  coverage: "₹5,00,000",
  used: "₹75,000",
  remaining: "₹4,25,000",
  validUntil: "31 December 2024",
  status: "Active",
};

const claims = [
  {
    id: "CLM-2024-001",
    title: "Cardiology Consultation",
    date: "24 May 2024",
    amount: "₹1,200",
    status: "Approved",
  },
  {
    id: "CLM-2024-002",
    title: "Diagnostic Tests",
    date: "20 May 2024",
    amount: "₹650",
    status: "Approved",
  },
  {
    id: "CLM-2024-003",
    title: "Pharmacy Expenses",
    date: "18 May 2024",
    amount: "₹2,400",
    status: "Processing",
  },
];

function Insurance() {
  return (
    <div className="simple-page">

      {/* ================= HEADER ================= */}

      <div className="page-header">

        <div>
          <h1>Insurance</h1>

          <p>
            Manage your health insurance details,
            coverage and claims.
          </p>
        </div>

        <button
          type="button"
          className="primary-btn"
          onClick={() => {
            console.log("Download insurance document");
          }}
        >
          <Download size={16} />
          Download Policy
        </button>

      </div>

      {/* ================= INSURANCE CARD ================= */}

      <div className="insurance-main-card">

        <div className="insurance-card-top">

          <div className="insurance-provider">

            <div className="insurance-logo">
              <ShieldCheck size={27} />
            </div>

            <div>
              <span>Insurance Provider</span>

              <h2>
                {insuranceData.provider}
              </h2>

              <p>
                {insuranceData.plan}
              </p>
            </div>

          </div>

          <div className="insurance-status">
            <CheckCircle size={15} />
            {insuranceData.status}
          </div>

        </div>

        <div className="insurance-card-divider" />

        <div className="insurance-policy-info">

          <div>
            <span>Policy Number</span>
            <strong>
              {insuranceData.policyNumber}
            </strong>
          </div>

          <div>
            <span>Valid Until</span>
            <strong>
              {insuranceData.validUntil}
            </strong>
          </div>

          <div>
            <span>Total Coverage</span>
            <strong>
              {insuranceData.coverage}
            </strong>
          </div>

        </div>

      </div>

      {/* ================= COVERAGE ================= */}

      <div className="page-section">

        <div className="section-heading">

          <div>
            <h2>Coverage Overview</h2>

            <p>
              Track your insurance coverage and usage.
            </p>
          </div>

        </div>

        <div className="coverage-grid">

          <div className="coverage-card">

            <div className="coverage-card-header">

              <div className="coverage-icon purple">
                <ShieldCheck size={21} />
              </div>

              <span>
                Total Coverage
              </span>

            </div>

            <strong>
              {insuranceData.coverage}
            </strong>

            <p>
              Your maximum eligible coverage.
            </p>

          </div>

          <div className="coverage-card">

            <div className="coverage-card-header">

              <div className="coverage-icon blue">
                <CreditCard size={21} />
              </div>

              <span>
                Used Amount
              </span>

            </div>

            <strong>
              {insuranceData.used}
            </strong>

            <p>
              Amount already claimed.
            </p>

          </div>

          <div className="coverage-card">

            <div className="coverage-card-header">

              <div className="coverage-icon green">
                <CheckCircle size={21} />
              </div>

              <span>
                Remaining
              </span>

            </div>

            <strong>
              {insuranceData.remaining}
            </strong>

            <p>
              Available coverage balance.
            </p>

          </div>

        </div>

      </div>

      {/* ================= PROGRESS ================= */}

      <div className="insurance-progress-card">

        <div className="progress-header">

          <div>
            <h3>
              Coverage Usage
            </h3>

            <p>
              ₹75,000 used of ₹5,00,000
            </p>
          </div>

          <strong>
            15%
          </strong>

        </div>

        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: "15%" }}
          />
        </div>

      </div>

      {/* ================= CLAIMS ================= */}

      <div className="page-section">

        <div className="section-heading">

          <div>
            <h2>Recent Claims</h2>

            <p>
              Track your recent insurance claims.
            </p>
          </div>

          <button
            type="button"
            className="view-all"
          >
            View All Claims
          </button>

        </div>

        <div className="claims-list">

          {claims.map((claim) => (

            <div
              className="claim-card"
              key={claim.id}
            >

              <div className="claim-icon">
                <FileText size={21} />
              </div>

              <div className="claim-info">

                <h3>
                  {claim.title}
                </h3>

                <div className="claim-meta">

                  <span>
                    <CalendarDays size={13} />
                    {claim.date}
                  </span>

                  <span>
                    {claim.id}
                  </span>

                </div>

              </div>

              <div className="claim-amount">
                <strong>
                  {claim.amount}
                </strong>

                <span
                  className={`claim-status ${
                    claim.status === "Approved"
                      ? "approved"
                      : "processing"
                  }`}
                >
                  {claim.status === "Approved" ? (
                    <CheckCircle size={13} />
                  ) : (
                    <Clock3 size={13} />
                  )}

                  {claim.status}
                </span>
              </div>

              <button
                type="button"
                className="claim-action"
                aria-label="View claim"
              >
                <ArrowUpRight size={17} />
              </button>

            </div>

          ))}

        </div>

      </div>

      {/* ================= SUPPORT ================= */}

      <div className="insurance-support-card">

        <div className="insurance-support-icon">
          <Phone size={22} />
        </div>

        <div className="insurance-support-content">

          <h3>
            Need help with your insurance?
          </h3>

          <p>
            Our support team can help you with claims,
            coverage and policy-related questions.
          </p>

        </div>

        <button
          type="button"
          className="insurance-support-button"
          onClick={() => {
            console.log("Contact insurance support");
          }}
        >
          Contact Support
        </button>

      </div>

    </div>
  );
}

export default Insurance;