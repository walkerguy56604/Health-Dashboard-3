// =======================
// main.js - Health Dashboard with Charts
// =======================

// Make sure you include Chart.js in your index.html before this script
// <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

// =======================
// Fetch Data
// =======================
async function loadDailyLogs() {
  try {
    const response = await fetch("dailyLogs.json");
    if (!response.ok) throw new Error("Failed to load dailyLogs.json");
    return await response.json();
  } catch (err) {
    console.error(err);
    return {};
  }
}

// =======================
// Utility: trend arrows
// =======================
function trendArrow(current, previous) {
  if (previous == null) return "—";
  if (current > previous) return "⬆️";
  if (current < previous) return "⬇️";
  return "➡️";
}

// =======================
// Render Dashboard
// =======================
function render(date, logs) {
  const out = document.getElementById("dailySummaryOutput");
  const d = logs[date];

  if (!d) {
    out.innerHTML = "<p>No data for this date.</p>";
    return;
  }

  const dates = Object.keys(logs).sort();
  const idx = dates.indexOf(date);
  const prev = idx > 0 ? logs[dates[idx - 1]] : null;

  out.innerHTML = `
    <h3>${date}</h3>

    <div style="color:green;"><b>Walk:</b> ${d.walk} min ${trendArrow(d.walk, prev?.walk)}</div>
    <div style="color:green;"><b>Strength:</b> ${d.strength} min ${trendArrow(d.strength, prev?.strength)}</div>
    <div style="color:green;"><b>Treadmill:</b> ${d.treadmill} min ${trendArrow(d.treadmill, prev?.treadmill)}</div>
    <div style="color:green;"><b>Calories:</b> ${d.calories} ${trendArrow(d.calories, prev?.calories)}</div>
    <div style="color:purple;"><b>Heart Rate:</b> ${d.heartRate ?? "—"} ${trendArrow(d.heartRate, prev?.heartRate)}</div>
    <div style="color:blue;"><b>Weight:</b> ${d.weight ?? "—"} ${trendArrow(d.weight, prev?.weight)}</div>
    <div style="color:orange;"><b>Glucose:</b> ${d.glucose ?? "—"} ${trendArrow(d.glucose, prev?.glucose)}</div>
    <div style="color:brown;"><b>Sleep:</b> ${d.sleep ?? "—"} ${trendArrow(d.sleep, prev?.sleep)}</div>
    <div style="color:teal;"><b>HRV:</b> ${d.hrv ?? "—"} ${trendArrow(d.hrv, prev?.hrv)}</div>
    <div style="color:darkmagenta;"><b>Mood:</b> ${d.mood ?? "—"} ${trendArrow(d.mood, prev?.mood)}</div>

    <h4 style="color:blue;">Blood Pressure</h4>
    ${
      d.bloodPressure.length
        ? d.bloodPressure.map(bp => `${bp.systolic}/${bp.diastolic} (HR ${bp.heartRate}) – ${bp.note}`).join("<br>")
        : "No BP readings"
    }

    <h4>Notes</h4>
    ${
      d.notes.length
        ? d.notes.map(n => `• ${n}`).join("<br>")
        : "No notes"
    }

    <h4>Trends</h4>
    <canvas id="trendChart" height="150"></canvas>
  `;

  renderTrendChart(logs);
}

// =======================
// Render Line Chart
// =======================
function renderTrendChart(logs) {
  const ctx = document.getElementById("trendChart").getContext("2d");
  const sortedDates = Object.keys(logs).sort();

  const weightData = sortedDates.map(d => logs[d].weight ?? null);
  const glucoseData = sortedDates.map(d => logs[d].glucose ?? null);
  const heartRateData = sortedDates.map(d => logs[d].heartRate ?? null);

  // Destroy previous chart if it exists
  if (window.trendChartInstance) window.trendChartInstance.destroy();

  window.trendChartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels: sortedDates,
      datasets: [
        {
          label: "Weight",
          data: weightData,
          borderColor: "blue",
          backgroundColor: "rgba(0,0,255,0.1)",
          tension: 0.2,
        },
        {
          label: "Glucose",
          data: glucoseData,
          borderColor: "orange",
          backgroundColor: "rgba(255,165,0,0.1)",
          tension: 0.2,
        },
        {
          label: "Heart Rate",
          data: heartRateData,
          borderColor: "purple",
          backgroundColor: "rgba(128,0,128,0.1)",
          tension: 0.2,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "top" },
        tooltip: { mode: "index", intersect: false },
      },
      interaction: {
        mode: "nearest",
        axis: "x",
        intersect: false,
      },
      scales: {
        y: {
          beginAtZero: false,
        },
      },
    },
  });
}

// =======================
// Populate Date Picker
// =======================
function populateDatePicker(logs) {
  const picker = document.getElementById("datePicker");
  picker.innerHTML = "";
  const dates = Object.keys(logs).sort();
  dates.forEach(date => {
    const opt = document.createElement("option");
    opt.value = date;
    opt.textContent = date;
    picker.appendChild(opt);
  });
  if (dates.length > 0) {
    picker.value = dates[dates.length - 1];
    render(picker.value, logs);
  }
  picker.addEventListener("change", e => render(e.target.value, logs));
}

// =======================
// Init Dashboard
// =======================
async function init() {
  const logs = await loadDailyLogs();
  populateDatePicker(logs);
}

init();
