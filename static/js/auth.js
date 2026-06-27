// auth.js — simple client-side auth helpers (sessionStorage)
function getLoginUrl() {
  try {
    const currentUrl = new URL(window.location.href);
    const loginUrl = new URL('login.html', currentUrl);
    return loginUrl.toString();
  } catch (error) {
    return 'login.html';
  }
}

function requireAuth() {
  const s = sessionStorage.getItem('hau_user');
  if (!s) {
    window.location.replace(getLoginUrl());
    return null;
  }
  try { return JSON.parse(s); } catch { return null; }
}

function logout() {
  sessionStorage.removeItem('hau_user');
  sessionStorage.removeItem('current_escalation');
  localStorage.removeItem('hau_escalation_event');
  localStorage.removeItem('hau_escalation_staff_msg');
  try {
    window.location.href = getLoginUrl();
  } catch (error) {
    window.location.replace(getLoginUrl());
  }
}

// Export for modules if needed (no module support in pages)
window.getLoginUrl = getLoginUrl;
window.requireAuth = requireAuth;
window.logout = logout;
