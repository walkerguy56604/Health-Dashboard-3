// =======================
// Main.js for Health Dashboard
// =======================

// Load dailyLogs.json dynamically
async function loadDailyLogs() {
  try {
    const response = await fetch('dailyLogs.json');
    const logs = await response.json();
    return logs;
  } catch (err) {
    console.error("Failed to load dailyLogs.json", err);
    return {};
  }
}

// Populate the date picker
function populateDatePicker(logs) {
  const picker = document.getElementById("datePicker");
  picker.innerHTML = "";
  const dates = Object.keys(logs).sort((a,b)=> new Date(a)-new Date(b));
  dates.forEach(date => {
    const opt = document.createElement("option");
    opt.value = date;
    opt.textContent = date;
    picker.appendChild(opt);
  });
  if (dates.length > 0) {
    picker.value = dates[dates.length - 1];
    renderSummary(logs, picker.value);
    renderChart(logs, dates);
  }
}

// Render daily summary
function renderSummary(logs, date) {
  const out = document.getElementById("dailySummaryOutput");
  const d = logs[date];
  if (!d) {
    out.innerHTML = "<p>No data</p>";
    return;
  }

  out.innerHTML = `
    <h3>${date}</h3>
    <div><b>Walk:</b> ${d.walk ?? "—"} min</div>
    <div><b>Strength:</b> ${d.strength ?? "—"} min</div>
    <div><b>Treadmill:</b> ${d.treadmill ?? "—"} min</div>
    <div><b>Calories:</b> ${d.calories ?? "—"}</div>
    <div><b>Heart Rate:</b> ${d.heartRate ?? "—"}</div>
    <div><b>Weight:</b> ${d.weight ?? "—"}</div>
    <div><b>Glucose:</b> ${d.glucose ?? "—"}</div>

    <h4>Blood Pressure</h4>
    ${
      d.bloodPressure?.length
        ? d.bloodPressure.map(bp => `${bp.systolic}/${bp.diastolic} (HR ${bp.heartRate}) – ${bp.note}`).join("<br>")
        : "No BP readings"
    }

    <h4>Notes</h4>
    ${d.notes?.length ? d.notes.map(n => `• ${n}`).join("<br>") : "No notes"}
  `;
}

// Render line chart for trends
function renderChart(logs, dates) {
  const ctx = document.getElementById("healthChart").getContext("2d");

  const walkData = dates.map(d => logs[d].walk ?? 0);
  const strengthData = dates.map(d => logs[d].strength ?? 0);
  const treadmillData = dates.map(d => logs[d].treadmill ?? 0);
  const caloriesData = dates.map(d => logs[d].calories ?? 0);
  const heartRateData = dates.map(d => logs[d].heartRate ?? null);
  const weightData = dates.map(d => logs[d].weight ?? null);
  const glucoseData = dates.map(d => logs[d].glucose ?? null);

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [
        { label: 'Walk', data: walkData, borderColor: 'green', fill: false, tension: 0.2 },
        { label: 'Strength', data: strengthData, borderColor: 'red', fill: false, tension: 0.2 },
        { label: 'Treadmill', data: treadmillData, borderColor: 'orange', fill: false, tension: 0.2 },
        { label: 'Calories', data: caloriesData, borderColor: 'blue', fill: false, tension: 0.2 },
        { label: 'Heart Rate', data: heartRateData, borderColor: 'purple', fill: false, tension: 0.2 },
        { label: 'Weight', data: weightData, borderColor: 'brown', fill: false, tension: 0.2 },
        { label: 'Glucose', data: glucoseData, borderColor: 'pink', fill: false, tension: 0.2 },
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'top' } },
      scales: { y: { beginAtZero: true } }
    }
  });
}

// =======================
// Init
// =======================
async function initDashboard() {
  const logs = await loadDailyLogs();
  if (!logs || Object.keys(logs).length === 0) return;

  populateDatePicker(logs);

  document.getElementById("datePicker").addEventListener("change", e => {
    renderSummary(logs, e.target.value);
  });
}

// Run dashboard
initDashboard();
