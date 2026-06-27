# SOC Guidance Office Chatbot — Frontend
Holy Angel University | School of Computing
AI-Powered Chatbot for Inquiry Management Using NLP-Based Negative Emotion Detection

## Tech Stack
- HTML5
- CSS3 (custom properties / variables, flexbox, grid, responsive)
- Vanilla JavaScript (no frameworks)
- Flask (backend — to be connected in Week 2)

## Folder Structure

```
soc_chatbot/
│
├── templates/
│   ├── appointment.html  ← Student appointment booking page
│   ├── chatbot.html      ← Student-facing chat interface
│   ├── chatbot_admin.html← Admin version of chatbot interface
│   ├── dashboard.html    ← Staff/Admin inquiry dashboard
│   └── login.html        ← Login page for staff and students
│
├── static/
│   ├── css/
│   │   ├── appointment.css ← Styles for appointment.html
│   │   ├── base.css        ← Shared variables, reset, badges, buttons (used by ALL pages)
│   │   ├── chatbot.css     ← Styles only for chatbot.html
│   │   ├── dashboard.css   ← Styles only for dashboard.html
│   │   └── login.css       ← Styles for login.html
│   │
│   ├── img/
│   │   └── hau-logo.png    ← Holy Angel University seal asset
│   │
│   └── js/
│       ├── appointment.js ← Appointment form validation and modal interactions
│       ├── auth.js        ← Login page behavior and logout support
│       ├── chat.js        ← Chat logic: send/receive, rule-based responses, emotion badges
│       ├── chat_admin.js  ← Admin chatbot helper logic
│       └── dashboard.js   ← Dashboard logic: inquiry table, filters, sidebar toggle
│
└── README.md              ← This file
```

## Page Overview

### 1. `appointment.html` — Student Appointment Booking
- Request form for guidance counseling appointments
- Validation and success modal feedback
- Holy Angel University seal and guidance office branding

### 2. `chatbot.html` — Student Chat Interface
- HAU maroon & gold themed chat window
- Quick reply buttons for common inquiries
- Typing indicator animation
- Emotion badge per bot response (Negative / Routine)
- Escalation notice when a message is flagged

### 3. `dashboard.html` — Staff Dashboard
- Sidebar navigation (All Inquiries, Flagged Cases, Resolved, Reports, Settings)
- Stat cards (Total inquiries, Flagged count, Auto-resolved, Avg. response time)
- Filterable inquiry table (All / Flagged / Routine)
- Mobile-responsive collapsible sidebar

### 4. `login.html` — Login Page
- Role selection for student and staff
- Email and password fields with validation states
- Branded HAU login panel

## How to Run (Frontend Only, No Backend)
Open either file directly in your browser:
- `templates/chatbot.html`
- `templates/dashboard.html`

## How to Connect to Flask Backend (Week 2+)

This frontend is designed to work with a Flask backend that runs your own local model directly. The chatbot should send user messages to a Flask route such as `/chat`, and the backend route should run your model to produce the response, emotion label, and escalation flag.

**For chat.js:**
- Remove the simulated response block in `sendMessage()`.
- Uncomment the `fetch('/chat', ...)` block and keep it pointed at your Flask route.
- The backend should return JSON like:
```json
{
  "response": "...",
  "emotion": "negative" | "neutral",
  "escalate": true | false
}
```
- This is a local model integration, not an external API call.

**For dashboard.js:**
- The frontend currently uses localStorage for settings, inquiries, and appointments.
- When the backend is ready, replace these local helpers with Flask endpoints such as `/api/settings`, `/api/appointments`, and `/api/inquiries`.
- Use the Flask backend to persist dashboard state and load data from your server-side model and storage.

Both expect Flask to serve `templates/` via `render_template()` and `static/` via Flask's default static folder. When Member B sets up `app.py`, this folder can be dropped directly into the Flask project root.

## Color Theme (HAU Brand)
| Name         | Hex       | Use                          |
|--------------|-----------|-------------------------------|
| Maroon       | `#7B1113` | Primary brand color           |
| Maroon Dark  | `#5A0C0E` | Header gradient, hover states |
| Gold         | `#C9A84C` | Accents, borders               |
| Gold Light   | `#E8C97A` | Highlights on dark backgrounds|

## Suggested Flask Project Layout (Member B, Week 2)
```
app/
├── app.py
├── model/              ← Logistic Regression + TF-IDF (Member C)
├── templates/          ← (drop this folder's templates/ here)
└── static/             ← (drop this folder's static/ here)
```

## Team Roles (Frontend)
- **Member A** — chatbot.html, chatbot.css, chat.js
- **Member B** — dashboard.html, dashboard.css, dashboard.js + Flask integration
- **Member C** — provides emotion detection output format to wire into both pages
- **Member D** — content (FAQs, categories) used in chat.js rule set
