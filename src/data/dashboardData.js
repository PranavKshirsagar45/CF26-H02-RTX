// Centralized mock data for the Patient Portal dashboard.
// In a real app this would come from an API layer / React Query hooks.

export const patient = {
  name: 'Rahul Sharma',
  id: 'P10245',
  avatar:
    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=faces',
  notifications: 3,
}

export const upcomingAppointment = {
  day: '24',
  month: 'May',
  doctor: 'Dr. Priya Mehta',
  specialty: 'Cardiologist',
  time: '10:30 AM',
  room: 'OPD - 3',
}

export const statCards = [
  {
    id: 'appointments',
    label: 'Total Appointments',
    value: '12',
    icon: 'Calendar',
    iconBg: 'bg-brand-100',
    iconColor: 'text-brand-600',
    linkLabel: 'View all appointments',
    linkColor: 'text-brand-600',
  },
  {
    id: 'labReports',
    label: 'Lab Reports',
    value: '05',
    icon: 'ClipboardList',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    linkLabel: 'View all reports',
    linkColor: 'text-emerald-600',
  },
  {
    id: 'prescriptions',
    label: 'Prescriptions',
    value: '08',
    icon: 'FileEdit',
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-600',
    linkLabel: 'View prescriptions',
    linkColor: 'text-sky-600',
  },
  {
    id: 'bills',
    label: 'Pending Bills',
    value: '₹ 2,450',
    icon: 'Wallet',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    linkLabel: 'Pay bills',
    linkColor: 'text-amber-600',
  },
  {
    id: 'healthScore',
    label: 'Health Score',
    value: '82',
    suffix: '/100',
    icon: 'HeartPulse',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-500',
    linkLabel: 'Good',
    linkColor: 'text-emerald-600',
    isStatus: true,
  },
]

export const healthSummary = {
  updated: '20 May 2024',
  bloodGroup: 'O+',
  height: '175 cm',
  weight: '72 kg',
  bmi: '23.5',
  score: 82,
  status: 'Good',
}

export const labReports = [
  { id: 1, name: 'Complete Blood Count (CBC)', date: '20 May 2024', status: 'Normal' },
  { id: 2, name: 'Lipid Profile', date: '15 May 2024', status: 'Normal' },
  { id: 3, name: 'Blood Sugar (Fasting)', date: '10 May 2024', status: 'Borderline' },
  { id: 4, name: 'Thyroid Profile', date: '05 May 2024', status: 'Normal' },
]

export const prescriptions = [
  { id: 1, name: 'Atorvastatin 10mg', schedule: '1-0-0 (After Dinner)', date: '20 May 2024' },
  { id: 2, name: 'Amlodipine 5mg', schedule: '1-0-0 (After Breakfast)', date: '20 May 2024' },
  { id: 3, name: 'Vitamin D3', schedule: '1-0-0 (After Breakfast)', date: '20 May 2024' },
]

export const quickActions = [
  { id: 'book', label: 'Book Appointment', sub: 'Schedule with doctor', icon: 'CalendarPlus' },
  { id: 'upload', label: 'Upload Reports', sub: 'Share your reports', icon: 'UploadCloud' },
  { id: 'consult', label: 'Consult Online', sub: 'Video consultation', icon: 'Video' },
  { id: 'find', label: 'Find Doctors', sub: 'Search specialists', icon: 'Stethoscope' },
  { id: 'pharmacy', label: 'Pharmacy', sub: 'Order medicines', icon: 'ShieldPlus' },
]

export const trustBadges = [
  { id: 1, icon: 'Headset', title: '24/7 Support', sub: 'We are always here to help you' },
  { id: 2, icon: 'ShieldCheck', title: 'Secure & Private', sub: 'Your data is safe with us' },
  { id: 3, icon: 'Award', title: 'Trusted Care', sub: 'We are committed to excellence' },
]

export const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
  { id: 'appointments', label: 'My Appointments', icon: 'CalendarDays' },
  { id: 'health', label: 'My Health', icon: 'HeartPulse' },
  { id: 'prescriptions', label: 'Prescriptions', icon: 'FileEdit' },
  { id: 'lab', label: 'Lab Reports', icon: 'FlaskConical' },
  { id: 'bills', label: 'Bills & Payments', icon: 'CreditCard' },
  { id: 'doctors', label: 'My Doctors', icon: 'Users' },
  { id: 'records', label: 'Medical Records', icon: 'FileText' },
  { id: 'insurance', label: 'Insurance', icon: 'Shield' },
  { id: 'messages', label: 'Messages', icon: 'Mail', badge: 3 },
  { id: 'settings', label: 'Settings', icon: 'Settings' },
  { id: 'help', label: 'Help & Support', icon: 'HelpCircle' },
]
