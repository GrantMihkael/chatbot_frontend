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
│   ├── chatbot.html      ← Student-facing chat interface
│   └── dashboard.html    ← Staff/Admin inquiry dashboard
│
├── static/
│   ├── css/
│   │   ├── base.css        ← Shared variables, reset, badges, buttons (used by ALL pages)
│   │   ├── chatbot.css     ← Styles only for chatbot.html
│   │   └── dashboard.css   ← Styles only for dashboard.html
│   │
│   └── js/
│       ├── chat.js         ← Chat logic: send/receive, rule-based responses, emotion badges
│       └── dashboard.js    ← Dashboard logic: inquiry table, filters, sidebar toggle
│
└── README.md              ← This file
```

## Page Overview

### 1. `chatbot.html` — Student Chat Interface
- HAU maroon & gold themed chat window
- Quick reply buttons for common inquiries
- Typing indicator animation
- Emotion badge per bot response (Negative / Routine)
- Escalation notice when a message is flagged

### 2. `dashboard.html` — Staff Dashboard
- Sidebar navigation (All Inquiries, Flagged Cases, Resolved, Reports, Settings)
- Stat cards (Total inquiries, Flagged count, Auto-resolved, Avg. response time)
- Filterable inquiry table (All / Flagged / Routine)
- Mobile-responsive collapsible sidebar

## How to Run (Frontend Only, No Backend)
Open either file directly in your browser:
- `templates/chatbot.html`
- `templates/dashboard.html`

## How to Connect to Flask Backend (Week 2+)

**For chat.js:**
Find this comment block and uncomment it, removing the `setTimeout` simulation above it:
```js
/* ── FLASK INTEGRATION (uncomment when backend is ready) ── */
fetch('/chat', { ... })
```

**For dashboard.js:**
Find this comment block and uncomment it:
```js
/* ── FLASK INTEGRATION (uncomment when backend is ready) ── */
async function loadInquiries() { ... }
```

Both expect Flask to serve `templates/` via `render_template()` and `static/` via Flask's default static folder — so when Member B sets up `app.py`, this folder can be dropped directly into the Flask project root.

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
