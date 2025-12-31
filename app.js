/*************************************************
 * HEALTH DASHBOARD — FULL CLEAN APP.JS
 * Step 2: Auto-create days + Auto-save (LocalStorage)
 *************************************************/

/* =========================
   Reference Day (Baseline)
   ========================= */
const referenceDay = {
  date: '2025-10-29',
  walk: 0,
  treadmill: 0,
  strength: 30,
  calories: 0,
  heartRate: 75,
  bloodPressure: {
    systolic: 102,
    diastolic: 62,
    iHB: 75
  }
};

/* =========================
   Daily Logs (Loaded Later)
   ========================= */
const dailyLogs = {};

/* =========================
   Local Storage Helpers
   ========================= */
function loadDailyLogs() {
  const saved = localStorage.getItem('dailyLogs');
  if (saved) {
    Object.assign(dailyLogs, JSON.parse(saved));
  }
}

function saveDailyLogs() {
  localStorage.setItem('dailyLogs', JSON.stringify(dailyLogs));
}

/* =========================
   Ensure Day Exists
   ========================= */
function ensureDailyLog(date) {
  if (!dailyLogs[date]) {
    dailyLogs[date] = {
      walk: 0,
      treadmill: 0,
      strength: 0,
      calories: 0,
      heartRate: 0,
      bloodPressure: {
        systolic: 0,
        diastolic: 0,
        iHB: 0
      }
    };
    saveDailyLogs();
  }
}

/* =========================
   Color Helpers
   ========================= */
function getColor(value, reference, lowerBetter = false) {
  if (typeof value !== 'number' || typeof reference !== 'number') return 'black';

  if (lowerBetter) {
    if (value <= reference) return 'green';
    if (value <= reference * 1.2) return 'orange';
    return 'red';
  } else {
    if (value >= reference) return 'green';
    if (value >= reference * 0.8) return 'orange';
    return 'red';
  }
}

function getBPColor(sys, dia) {
  if (sys < 120 && dia < 80) return 'green';
  if (sys <= 139 || dia <= 89) return 'orange';
  return 'red';
}

/* =========================
   Render Daily Summary
   ========================= */
function renderDailySummary(date) {
  ensureDailyLog(date);

  const d = dailyLogs[date];
  const out = document.getElementById('dailySummaryOutput');

  const bpColor = getBPColor(d.bloodPressure.systolic, d.bloodPressure.diastolic);

  out.innerHTML = `
    <h3>Daily Summary — ${date}</h3>

    <div>Walk: <span style="color:${getColor(d.walk, referenceDay.walk)}">${d.walk} min</span></div>
    <div>Treadmill: <span style="color:${getColor(d.treadmill, referenceDay.treadmill)}">${d.treadmill} min</span></div>
    <div>Strength: <span style="color:${getColor(d.strength, referenceDay.strength)}">${d.strength} reps</span></div>
    <div>Calories: <span style="color:${getColor(d.calories, referenceDay.calories)}">${d.calories}</span></div>
    <div>Avg HR: <span style="color:${getColor(d.heartRate, referenceDay.heartRate, true)}">${d.heartRate}</span></div>

    <div>
      <strong>Blood Pressure:</strong>
      <span style="color:${bpColor}">
        ${d.bloodPressure.systolic}/${d.bloodPressure.diastolic}/${d.bloodPressure.iHB}
      </span>
    </div>
  `;
}

/* =========================
   History List
   ========================= */
function updateHistoryList() {
  const history = document.getElementById('historyList');
  history.innerHTML = '';

  Object.keys(dailyLogs)
    .sort()
    .reverse()
    .forEach(date => {
      const btn = document.createElement('button');
      btn.textContent = date;
      btn.style.display = 'block';
      btn.style.marginBottom = '6px';
      btn.onclick = () => renderDailySummary(date);
      history.appendChild(btn);
    });
}

/* =========================
   App Init
   ========================= */
loadDailyLogs();

const datePicker = document.getElementById('datePicker');

datePicker.addEventListener('change', e => {
  const date = e.target.value;
  renderDailySummary(date);
  updateHistoryList();
});

/* =========================
   Auto-select Today
   ========================= */
const today = new Date().toISOString().split('T')[0];
datePicker.value = today;
renderDailySummary(today);
updateHistoryList();
