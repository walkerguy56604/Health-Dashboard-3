// =======================
// Daily Logs Data
// =======================
const dailyLogs = {
  "2025-12-30": {
    bloodPressure: [
      { systolic: 131, diastolic: 74, heartRate: 95, note: "Post strength training", category: "H" }
    ],
    glucose: [],
    walk: 40,
    treadmill: 10,
    strength: 30,
    calories: 22,
    heartRate: 100
  },
  // Add more days here...
};

// Baseline for comparison (October 29, 2024)
const baselineDate = "2024-10-29";

// =======================
// Helper Functions
// =======================

// Determine BP category
function getBPCategory(systolic, diastolic) {
  if (systolic >= 140 || diastolic >= 90) return "H";
  if (systolic >= 120 || diastolic >= 80) return "M";
  return "L";
}

// BP color for category
function getBPColor(category) {
  switch(category) {
    case "H": return "red";
    case "M": return "orange";
    case "L": return "green";
    default: return "black";
  }
}

// =======================
// Render Daily Summary
// =======================
function renderDailySummary(date) {
  const dailySummaryOutput = document.getElementById('dailySummaryOutput');
  const summary = dailyLogs[date] || { bloodPressure: [], glucose: [], walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 'N/A' };
  const baseline = dailyLogs[baselineDate] || { bloodPressure: [], glucose: [], walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 'N/A' };

  let html = `<h3>Daily Summary for ${date}</h3>`;

  // Blood Pressure
  if (summary.bloodPressure.length > 0) {
    html += `<h4>Blood Pressure</h4>`;
    summary.bloodPressure.forEach((bp, idx) => {
      const category = getBPCategory(bp.systolic, bp.diastolic);
      html += `<div style="color:${getBPColor(category)}">
        BP #${idx + 1}: ${bp.systolic}/${bp.diastolic} mmHg, HR: ${bp.heartRate} ${bp.note ? "(" + bp.note + ")" : ""} - ${category} hypertension
      </div>`;
    });

    // Compare to baseline
    if (baseline.bloodPressure.length > 0) {
      const baseBP = baseline.bloodPressure[0];
      html += `<div style="margin-top:5px; font-style:italic; color:blue;">
        Comparison to ${baselineDate}: First BP was ${baseBP.systolic}/${baseBP.diastolic} mmHg
      </div>`;
    }
  } else {
    html += `<div>No blood pressure readings</div>`;
  }

  // Glucose
  if (summary.glucose.length > 0) {
    html += `<h4>Glucose</h4>`;
    summary.glucose.forEach((g, idx) => {
      if (typeof g === "object") {
        html += `<div>Glucose #${idx + 1}: ${g.value} mmol/L (Time: ${g.time || "N/A"})</div>`;
      } else {
        html += `<div>Glucose #${idx + 1}: ${g} mmol/L</div>`;
      }
    });
  } else {
    html += `<div>No glucose readings</div>`;
  }

  // Activity Metrics
  html += `<h4>Activity Metrics</h4>`;
  html += `<div>Walk Duration: ${summary.walk} min</div>`;
  html += `<div>Treadmill Duration: ${summary.treadmill} min</div>`;
  html += `<div>Strength Duration: ${summary.strength} reps</div>`;
  html += `<div>Calories Burned: ${summary.calories}</div>`;
  html += `<div>Average Heart Rate: ${summary.heartRate}</div>`;

  dailySummaryOutput.innerHTML = html;

  // Add Export CSV Button
  addExportButton(date);
}

// =======================
// History Buttons
// =======================
const historyList = document.getElementById('historyList');
const datePicker = document.getElementById('datePicker');

datePicker.addEventListener('change', (e) => {
  const selectedDate = e.target.value;
  renderDailySummary(selectedDate);

  if (![...historyList.children].some(btn => btn.dataset.date === selectedDate)) {
    const btn = document.createElement('button');
    btn.textContent = selectedDate;
    btn.dataset.date = selectedDate;
    btn.addEventListener('click', () => renderDailySummary(selectedDate));
    historyList.prepend(btn);
  }
});

// =======================
// CSV Export
// =======================
function convertDailyLogToCSV(date) {
  const summary = dailyLogs[date];
  if (!summary) return null;

  let csv = "Type,Value,Time,Note\n";

  // Blood Pressure
  summary.bloodPressure.forEach((bp, idx) => {
    csv += `BP,${bp.systolic}/${bp.diastolic},${bp.heartRate || ""},${bp.note || ""}\n`;
  });

  // Glucose
  summary.glucose.forEach((g, idx) => {
    if (typeof g === "object") {
      csv += `Glucose,${g.value},${g.time || ""},${g.note || ""}\n`;
    } else {
      csv += `Glucose,${g},,,\n`;
    }
  });

  // Activity Metrics
  csv += `Walk,${summary.walk},,\n`;
  csv += `Treadmill,${summary.treadmill},,\n`;
  csv += `Strength,${summary.strength},,\n`;
  csv += `Calories,${summary.calories},,\n`;
  csv += `Heart Rate,${summary.heartRate},,\n`;

  return csv;
}

function downloadCSV(csv, date) {
  if (!csv) return;
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `HealthDashboard_${date}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function addExportButton(date) {
  const dailySummaryOutput = document.getElementById('dailySummaryOutput');
  let existingBtn = document.getElementById("exportCSVButton");
  if (existingBtn) existingBtn.remove();

  const btn = document.createElement("button");
  btn.id = "exportCSVButton";
  btn.textContent = "Export CSV for Doctors";
  btn.style.marginTop = "10px";
  btn.addEventListener("click", () => {
    const csv = convertDailyLogToCSV(date);
    if (csv) downloadCSV(csv, date);
    else alert("No data to export for this date.");
  });

  dailySummaryOutput.appendChild(btn);
}
