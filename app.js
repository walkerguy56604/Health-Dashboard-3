// =======================
// Historical Data (Oct 29 – Nov 16, 2024)
// =======================
const dailyLogs = {
  "2024-10-29": {
    bloodPressure: [
      { systolic: 108, diastolic: 62, heartRate: 69, note: "IHB" },
      { systolic: 118, diastolic: 59, heartRate: 72, note: "IHB" }
    ],
    glucose: [],
    walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: "N/A"
  },
  "2024-11-01": {
    bloodPressure: [
      { systolic: 114, diastolic: 65, heartRate: 77 },
      { systolic: 112, diastolic: 59, heartRate: 75 }
    ],
    glucose: [],
    walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: "N/A"
  },
  "2024-11-04": {
    bloodPressure: [
      { systolic: 111, diastolic: 58, heartRate: 78 },
      { systolic: 122, diastolic: 68, heartRate: 76 }
    ],
    glucose: [{ value: 6.7 }],
    walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: "N/A"
  },
  "2024-11-07": { bloodPressure: [], glucose: [{ value: 5.1 }], walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: "N/A" },
  "2024-11-11": {
    bloodPressure: [
      { systolic: 117, diastolic: 58, heartRate: 76 },
      { systolic: 132, diastolic: 69, heartRate: 76 }
    ],
    glucose: [{ value: 6 }],
    walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: "N/A"
  },
  "2024-11-08": {
    bloodPressure: [
      { systolic: 112, diastolic: 61, heartRate: 77 },
      { systolic: 119, diastolic: 71, heartRate: 74 }
    ],
    glucose: [], walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: "N/A"
  },
  "2024-11-12": { bloodPressure: [], glucose: [{ value: 6.1, time: "morning" }], walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: "N/A" },
  "2024-11-15": {
    bloodPressure: [
      { systolic: 118, diastolic: 69, heartRate: 83 },
      { systolic: 120, diastolic: 66, heartRate: 82 }
    ],
    glucose: [
      { value: 7.7, time: "5:00 AM" },
      { value: 4.6, time: "6:30 AM" }
    ],
    walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: "N/A"
  },
  "2024-11-16": { bloodPressure: [{ systolic: 6.3, diastolic: 0, heartRate: "N/A" }], glucose: [], walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: "N/A" }
};

// =======================
// Baseline for comparison
// =======================
const baselineDate = "2024-10-29";

// =======================
// BP Helper functions
// =======================
function getBPCategory(systolic, diastolic) {
  if (systolic >= 140 || diastolic >= 90) return "H";
  if (systolic >= 120 || diastolic >= 80) return "M";
  return "L";
}

function getBPColor(category) {
  switch (category) {
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
  const summary = dailyLogs[date] || { bloodPressure: [], glucose: [], walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: "N/A" };
  const baseline = dailyLogs[baselineDate] || { bloodPressure: [], glucose: [] };

  let html = `<h3>Daily Summary for ${date}</h3>`;

  // Blood Pressure
  if (summary.bloodPressure.length > 0) {
    html += `<h4>Blood Pressure</h4>`;
    summary.bloodPressure.forEach((bp, idx) => {
      const category = getBPCategory(bp.systolic, bp.diastolic);
      html += `<div style="color:${getBPColor(category)}">
        BP #${idx+1}: ${bp.systolic}/${bp.diastolic} mmHg, HR: ${bp.heartRate} ${bp.note ? "(" + bp.note + ")" : ""} - ${category} hypertension
      </div>`;
    });

    if (baseline.bloodPressure.length > 0) {
      const baseBP = baseline.bloodPressure[0];
      html += `<div style="margin-top:5px; font-style:italic; color:blue;">
        Compared to baseline (${baselineDate}): ${baseBP.systolic}/${baseBP.diastolic} mmHg
      </div>`;
    }
  } else {
    html += `<div>No blood pressure readings</div>`;
  }

  // Glucose
  if (summary.glucose.length > 0) {
    html += `<h4>Glucose</h4>`;
    summary.glucose.forEach((g, idx) => {
      if (typeof g === "object") html += `<div>Glucose #${idx+1}: ${g.value} mmol/L (Time: ${g.time || "N/A"})</div>`;
      else html += `<div>Glucose #${idx+1}: ${g} mmol/L</div>`;
    });
  } else html += `<div>No glucose readings</div>`;

  // Other metrics
  html += `<h4>Other Metrics</h4>
    <div>Walk: ${summary.walk} min</div>
    <div>Treadmill: ${summary.treadmill} min</div>
    <div>Strength: ${summary.strength} reps</div>
    <div>Calories Burned: ${summary.calories}</div>
    <div>Average Heart Rate: ${summary.heartRate}</div>`;

  // 7-day rolling BP averages
  const rolling = get7DayRolling(date);
  if (rolling) {
    html += `<h4>7-Day Rolling BP Average</h4>
      <div>Systolic: ${rolling.systolic.toFixed(1)}, Diastolic: ${rolling.diastolic.toFixed(1)}</div>`;
  }

  dailySummaryOutput.innerHTML = html;

  // Add export button
  addExportButton(date);
}

// =======================
// History List + Date Picker
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
// 7-Day Rolling Average
// =======================
function get7DayRolling(date) {
  const allDates = Object.keys(dailyLogs).sort();
  const idx = allDates.indexOf(date);
  if (idx === -1) return null;

  const last7 = allDates.slice(Math.max(0, idx - 6), idx + 1);
  let systolicSum = 0, diastolicSum = 0, count = 0;

  last7.forEach(d => {
    (dailyLogs[d].bloodPressure || []).forEach(bp => {
      systolicSum += bp.systolic;
      diastolicSum += bp.diastolic;
      count++;
    });
  });

  if (count === 0) return null;
  return { systolic: systolicSum / count, diastolic: diastolicSum / count };
}

// =======================
// CSV Export
// =======================
function convertDailyLogToCSV(date) {
  const summary = dailyLogs[date];
  if (!summary) return null;

  let csv = "Type,Value,Time,Note\n";

  summary.bloodPressure.forEach((bp, idx) => {
    csv += `BP,${bp.systolic}/${bp.diastolic},${bp.heartRate || ""},${bp.note || ""}\n`;
  });

  summary.glucose.forEach((g, idx) => {
    if (typeof g === "object") csv += `Glucose,${g.value},${g.time || ""},${g.note || ""}\n`;
    else csv += `Glucose,${g},,,\n`;
  });

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
