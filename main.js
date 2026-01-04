// =======================
// Import Daily Logs
// =======================
import { dailyLogs } from './data/dailyLogs.js'; // adjust path if needed

// =======================
// Helpers
// =======================
function getBPCategory(s, d) {
  if (s >= 140 || d >= 90) return "H";
  if (s >= 120 || d >= 80) return "M";
  return "L";
}

function getBPColor(cat) {
  return cat === "H" ? "red" : cat === "M" ? "orange" : "green";
}

function getLastNDates(endDate, n) {
  const allDates = Object.keys(dailyLogs).sort();
  const idx = allDates.indexOf(endDate);
  if (idx === -1) return [];
  return allDates.slice(Math.max(0, idx - n + 1), idx + 1);
}

function get7DayRolling(date) {
  const windowDates = getLastNDates(date, 7);
  let sums = { sys: 0, dia: 0, bpCount: 0, walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0, hrCount: 0 };

  windowDates.forEach(d => {
    const day = dailyLogs[d];
    if (!day) return;

    day.bloodPressure.forEach(bp => { sums.sys += bp.systolic; sums.dia += bp.diastolic; sums.bpCount++; });
    sums.walk += day.walk || 0;
    if (Array.isArray(day.treadmill)) day.treadmill.forEach(t => sums.treadmill += t.distance || 0);
    sums.strength += day.strength || 0;
    sums.calories += day.calories || 0;
    if (day.heartRate != null) { sums.heartRate += day.heartRate; sums.hrCount++; }
  });

  return {
    bpSys: sums.bpCount ? (sums.sys / sums.bpCount).toFixed(1) : "—",
    bpDia: sums.bpCount ? (sums.dia / sums.bpCount).toFixed(1) : "—",
    walk: sums.walk,
    treadmill: sums.treadmill,
    strength: sums.strength,
    calories: sums.calories,
    heartRate: sums.hrCount ? (sums.heartRate / sums.hrCount).toFixed(0) : "—"
  };
}

// =======================
// Render Daily Summary
// =======================
export function renderDailySummary(date) {
  const out = document.getElementById("dailySummaryOutput");
  const d = dailyLogs[date];
  if (!d) {
    out.innerHTML = `<p>No data for ${date}</p>`;
    return;
  }

  let html = `<h2>${date}</h2>`;

  // Blood Pressure
  html += `<h3>Blood Pressure</h3>`;
  if (d.bloodPressure.length) {
    d.bloodPressure.forEach((bp, i) => {
      const cat = getBPCategory(bp.systolic, bp.diastolic);
      html += `<p style="color:${getBPColor(cat)}">
        BP #${i+1}: ${bp.systolic}/${bp.diastolic} HR:${bp.heartRate} (${cat === 'H' ? 'High' : cat === 'M' ? 'Medium' : 'Low'})${bp.note ? ' – ' + bp.note : ''}
      </p>`;
    });
  } else html += `<p>No BP recorded</p>`;

  // Activity
  html += `<h3>Activity</h3>
    <p>Walk: ${d.walk || 0} min</p>
    <p>Treadmill: ${
      Array.isArray(d.treadmill) && d.treadmill.length
        ? d.treadmill.map(t => `${t.distance} km (${t.calories} cal)`).join(", ")
        : 0
    }</p>
    <p>Strength: ${d.strength || 0} min</p>
    <p>Calories: ${d.calories || 0}</p>
    <p>Avg HR: ${d.heartRate != null ? d.heartRate : '—'}</p>`;

  // Notes
  if (d.notes && d.notes.length) {
    html += `<h3>Notes</h3><ul>`;
    d.notes.forEach(note => html += `<li>${note}</li>`);
    html += `</ul>`;
  }

  // 7-Day Rolling
  const r = get7DayRolling(date);
  html += `<h3>7-Day Rolling Averages</h3>
    <p>BP: ${r.bpSys}/${r.bpDia}</p>
    <p>Walk: ${r.walk} min</p>
    <p>Treadmill: ${r.treadmill} km</p>
    <p>Strength: ${r.strength} min</p>
    <p>Calories: ${r.calories}</p>
    <p>Avg HR: ${r.heartRate}</p>`;

  out.innerHTML = html;
}

// =======================
// Initialize Dashboard & Date Picker
// =======================
window.renderDailySummary = renderDailySummary;

function populateDatePicker() {
  const picker = document.getElementById("datePicker");
  picker.innerHTML = '';
  const dates = Object.keys(dailyLogs).sort();
  dates.forEach(date => {
    const opt = document.createElement("option");
    opt.value = date;
    opt.textContent = date;
    picker.appendChild(opt);
  });

  // Render first date by default
  if (dates.length) renderDailySummary(dates[dates.length - 1]);
}

// Date picker change event
document.addEventListener("DOMContentLoaded", () => {
  const picker = document.getElementById("datePicker");
  if (!picker) return;
  populateDatePicker();
  picker.addEventListener("change", e => renderDailySummary(e.target.value));
});
