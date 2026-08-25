import {
  Receipt,
  CreditCard,
  CalendarDays,
  CheckCircle,
  Clock3,
  Download,
  ArrowUpRight,
} from "lucide-react";

const bills = [
  {
    id: "INV-2024-001",
    title: "Cardiology Consultation",
    doctor: "Dr. Priya Mehta",
    date: "24 May 2024",
    amount: 1200,
    status: "Paid",
  },
  {
    id: "INV-2024-002",
    title: "Complete Blood Count",
    doctor: "Laboratory Department",
    date: "20 May 2024",
    amount: 650,
    status: "Paid",
  },
  {
    id: "INV-2024-003",
    title: "Pharmacy & Medicines",
    doctor: "Hospital Pharmacy",
    date: "20 May 2024",
    amount: 600,
    status: "Pending",
  },
];

function Bills() {
  const totalAmount = bills.reduce(
    (total, bill) => total + bill.amount,
    0
  );

  const paidAmount = bills
    .filter((bill) => bill.status === "Paid")
    .reduce((total, bill) => total + bill.amount, 0);

  const pendingAmount = bills
    .filter((bill) => bill.status === "Pending")
    .reduce((total, bill) => total + bill.amount, 0);

  return (
    <div className="simple-page">

      {/* ================= HEADER ================= */}

      <div className="page-header">

        <div>
          <h1>Bills & Payments</h1>

          <p>
            View your hospital bills, payment history and
            outstanding payments.
          </p>
        </div>

        <button
          type="button"
          className="primary-btn"
          onClick={() => {
            console.log("Payment clicked");
          }}
        >
          <CreditCard size={16} />
          Make Payment
        </button>

      </div>

      {/* ================= SUMMARY ================= */}

      <div className="stats-grid bills-stats">

        <div className="stat-card purple">

          <div className="stat-top">

            <div className="stat-icon">
              <Receipt size={23} />
            </div>

            <div className="stat-info">

              <span>Total Bills</span>

              <div className="stat-number">
                <strong>
                  ₹{totalAmount.toLocaleString("en-IN")}
                </strong>
              </div>

            </div>

          </div>

        </div>

        <div className="stat-card green">

          <div className="stat-top">

            <div className="stat-icon">
              <CheckCircle size={23} />
            </div>

            <div className="stat-info">

              <span>Paid</span>

              <div className="stat-number">
                <strong>
                  ₹{paidAmount.toLocaleString("en-IN")}
                </strong>
              </div>

            </div>

          </div>

        </div>

        <div className="stat-card orange">

          <div className="stat-top">

            <div className="stat-icon">
              <Clock3 size={23} />
            </div>

            <div className="stat-info">

              <span>Pending</span>

              <div className="stat-number">
                <strong>
                  ₹{pendingAmount.toLocaleString("en-IN")}
                </strong>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ================= BILL LIST ================= */}

      <div className="page-section">

        <div className="section-heading">

          <div>
            <h2>Recent Bills</h2>

            <p>
              Your recent hospital transactions.
            </p>
          </div>

          <button
            type="button"
            className="view-all"
          >
            View All
          </button>

        </div>

        <div className="bills-list">

          {bills.map((bill) => (

            <div
              className="bill-card"
              key={bill.id}
            >

              {/* Bill Icon */}

              <div className="bill-icon">
                <Receipt size={22} />
              </div>

              {/* Bill Details */}

              <div className="bill-info">

                <h3>
                  {bill.title}
                </h3>

                <p>
                  {bill.doctor}
                </p>

                <div className="bill-meta">

                  <span>
                    <CalendarDays size={13} />
                    {bill.date}
                  </span>

                  <span>
                    {bill.id}
                  </span>

                </div>

              </div>

              {/* Amount */}

              <div className="bill-amount">

                <strong>
                  ₹{bill.amount.toLocaleString("en-IN")}
                </strong>

                <span
                  className={`bill-status ${
                    bill.status.toLowerCase()
                  }`}
                >
                  {bill.status}
                </span>

              </div>

              {/* Action */}

              <button
                type="button"
                className="bill-action"
                aria-label="View bill"
              >
                <ArrowUpRight size={18} />
              </button>

            </div>

          ))}

        </div>

      </div>

      {/* ================= PAYMENT CARD ================= */}

      <div className="payment-card">

        <div className="payment-icon">
          <CreditCard size={24} />
        </div>

        <div className="payment-content">

          <h3>
            Secure Online Payments
          </h3>

          <p>
            Pay your pending hospital bills securely
            using your preferred payment method.
          </p>

        </div>

        <button
          type="button"
          className="payment-button"
          onClick={() => {
            console.log("Pay pending amount");
          }}
        >
          Pay ₹{pendingAmount.toLocaleString("en-IN")}
        </button>

      </div>

      {/* ================= DOWNLOAD ================= */}

      <div className="download-bills">

        <div>
          <h3>
            Need your billing history?
          </h3>

          <p>
            Download your recent billing statement for
            your records.
          </p>
        </div>

        <button
          type="button"
          className="download-button"
          onClick={() => {
            console.log("Download billing statement");
          }}
        >
          <Download size={16} />
          Download Statement
        </button>

      </div>

    </div>
  );
}

export default Bills;