
# 📊 JobReady – Career Progress & Application Tracker

JobReady is a full-stack web application designed to help users track their job search process, including applications, recruiter contacts, weekly reports, and preparation tools.

---

## ✅ Feature List

### 🔹 1. Job Application Tracker
- Add, edit, and delete job applications
- Track:
  - Job title
  - Company
  - Application status (Applied, Interviewing, Offer, Rejected)
  - Date of application
  - Recruiter contacts (name, email, LinkedIn)

### 🔹 2. Integration with Platforms
- LeetCode: Fetch recent activity, contest scores
- LinkedIn: Import job application/bookmark history
- GitHub: Sync commits, pinned repos

### 🔹 3. Weekly Reports Dashboard
- Auto-generated weekly summary:
  - “X apps sent, Y responses, Z interviews”
- Weekly/monthly graph of activity
- Option to export as PDF or send via email

### 🔹 4. Smart Reminders & Notifications
- Follow-up and deadline reminders
- Notifications for upcoming interviews
- Custom task checklist per job

### 🔹 5. Resume & Prep Hub
- Upload resumes/CVs and cover letters
- Track interview prep and mock interviews
- Company-specific interview notes

### 🔹 6. Authentication & User Management
- Secure login/signup (Email + Google OAuth)
- Profile management and saved preferences

---

## 🛠 Tech Stack

### Frontend
- React (Next.js for SSR)
- Tailwind CSS / Chakra UI
- Recharts / Chart.js for data viz
- Redux Toolkit or React Query for state

### Backend
- Node.js + Express
- PostgreSQL
- Firebase Auth / Auth0 for authentication
- REST API integrations:
  - LinkedIn, GitHub, LeetCode (unofficial)

### DevOps
- Frontend: Vercel
- Backend: Render / Railway
- DB: Supabase / PlanetScale
- CI/CD: GitHub Actions
- Email reports: Resend / Mailgun

---

## 🚀 Future Enhancements
- Mobile App (React Native)
- Chrome Extension to capture job listings
- AI Assistant for resume tailoring and interview prep

---

## 🧑‍💻 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License
[MIT](https://choosealicense.com/licenses/mit/)
