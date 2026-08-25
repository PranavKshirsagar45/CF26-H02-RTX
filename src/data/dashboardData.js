export const dashboardData = {
  /* ================= PATIENT ================= */

  patient: {
    name: "Rahul Sharma",
    patientId: "P10245",
    avatar: "RS",
  },

  /* ================= APPOINTMENT ================= */

  appointment: {
    doctor: "Dr. Priya Mehta",
    specialty: "Cardiologist",
    date: "24",
    month: "May",
    time: "10:30 AM",
    location: "OPD - 3",
    type: "In-person",
  },

  /* ================= DASHBOARD STATS ================= */

  stats: [
    {
      id: 1,
      title: "Appointments",
      value: 12,
      subtitle: "Total visits",
      type: "appointment",
      color: "purple",
    },

    {
      id: 2,
      title: "Lab Reports",
      value: 5,
      subtitle: "Available",
      type: "reports",
      color: "green",
    },

    {
      id: 3,
      title: "Prescriptions",
      value: 8,
      subtitle: "Active medicines",
      type: "prescriptions",
      color: "blue",
    },

    {
      id: 4,
      title: "Pending Bills",
      value: "₹2,450",
      subtitle: "Amount due",
      type: "bills",
      color: "orange",
    },

    {
      id: 5,
      title: "Health Score",
      value: 82,
      subtitle: "Excellent",
      type: "health",
      color: "red",
    },
  ],

  /* ================= HEALTH ================= */

  health: {
    bloodGroup: "O+",
    weight: 72,
    height: 175,
    bmi: 23.5,

    bloodPressure: "120/80",
    heartRate: "72 bpm",

    score: 82,
  },

  /* ================= LAB REPORTS ================= */

  labReports: [
    {
      id: 1,
      name: "Complete Blood Count",
      shortName: "CBC",
      date: "20 May 2024",
      status: "Normal",
    },

    {
      id: 2,
      name: "Lipid Profile",
      shortName: "LP",
      date: "15 May 2024",
      status: "Normal",
    },

    {
      id: 3,
      name: "Blood Sugar",
      shortName: "BS",
      date: "10 May 2024",
      status: "Borderline",
    },

    {
      id: 4,
      name: "Thyroid Profile",
      shortName: "T3/T4/TSH",
      date: "05 May 2024",
      status: "Normal",
    },

    {
      id: 5,
      name: "Liver Function Test",
      shortName: "LFT",
      date: "28 Apr 2024",
      status: "Normal",
    },
  ],

  /* ================= PRESCRIPTIONS ================= */

  prescriptions: [
    {
      id: 1,
      medicine: "Atorvastatin 10mg",
      dosage: "1-0-0",
      instruction: "After Dinner",
      date: "20 May 2024",
    },

    {
      id: 2,
      medicine: "Amlodipine 5mg",
      dosage: "1-0-0",
      instruction: "After Breakfast",
      date: "20 May 2024",
    },

    {
      id: 3,
      medicine: "Vitamin D3",
      dosage: "1-0-0",
      instruction: "After Breakfast",
      date: "20 May 2024",
    },

    {
      id: 4,
      medicine: "Pantoprazole 40mg",
      dosage: "1-0-0",
      instruction: "Before Breakfast",
      date: "18 May 2024",
    },
  ],

  /* ================= APPOINTMENTS ================= */

  appointments: [
    {
      id: 1,
      doctor: "Dr. Priya Mehta",
      specialty: "Cardiologist",
      date: "24 May 2024",
      time: "10:30 AM",
      location: "OPD - 3",
      status: "Upcoming",
    },

    {
      id: 2,
      doctor: "Dr. Amit Shah",
      specialty: "General Physician",
      date: "30 May 2024",
      time: "11:00 AM",
      location: "OPD - 2",
      status: "Scheduled",
    },

    {
      id: 3,
      doctor: "Dr. Neha Kapoor",
      specialty: "Dermatologist",
      date: "05 June 2024",
      time: "04:30 PM",
      location: "OPD - 5",
      status: "Scheduled",
    },
  ],

  /* ================= BILLS ================= */

  bills: [
    {
      id: 1,
      title: "Cardiology Consultation",
      date: "20 May 2024",
      amount: 800,
      status: "Paid",
    },

    {
      id: 2,
      title: "Blood Test",
      date: "20 May 2024",
      amount: 650,
      status: "Paid",
    },

    {
      id: 3,
      title: "Pharmacy Bill",
      date: "21 May 2024",
      amount: 1000,
      status: "Pending",
    },
  ],

  /* ================= DOCTORS ================= */

  doctors: [
    {
      id: 1,
      name: "Dr. Priya Mehta",
      specialty: "Cardiologist",
      experience: "12 Years",
      rating: 4.9,
    },

    {
      id: 2,
      name: "Dr. Amit Shah",
      specialty: "General Physician",
      experience: "10 Years",
      rating: 4.8,
    },

    {
      id: 3,
      name: "Dr. Neha Kapoor",
      specialty: "Dermatologist",
      experience: "8 Years",
      rating: 4.9,
    },
  ],

  /* ================= MEDICAL RECORDS ================= */

  medicalRecords: [
    {
      id: 1,
      title: "Complete Blood Count",
      type: "Lab Report",
      date: "20 May 2024",
    },

    {
      id: 2,
      title: "Cardiology Consultation",
      type: "Consultation",
      date: "20 May 2024",
    },

    {
      id: 3,
      title: "Prescription",
      type: "Prescription",
      date: "20 May 2024",
    },
  ],

  /* ================= INSURANCE ================= */

  insurance: {
    provider: "HealthCare Insurance",
    policyNumber: "HLT-2024-10245",
    coverage: "₹5,00,000",
    validUntil: "31 December 2024",
    status: "Active",
  },

  /* ================= MESSAGES ================= */

  messages: [
    {
      id: 1,
      sender: "Dr. Priya Mehta",
      message: "Your latest reports look good.",
      date: "Today",
      unread: true,
    },

    {
      id: 2,
      sender: "Hospital Support",
      message: "Your appointment is confirmed.",
      date: "Yesterday",
      unread: false,
    },

    {
      id: 3,
      sender: "Pharmacy",
      message: "Your prescription is ready.",
      date: "20 May",
      unread: false,
    },
  ],
};