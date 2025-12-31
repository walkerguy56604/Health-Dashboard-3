// Baseline for comparison (October 29, 2024)
const baselineDate = "2024-10-29";

// Helper to determine BP category
function getBPCategory(systolic, diastolic) {
  if (systolic >= 140 || diastolic >= 90) return "H"; // High
  if (systolic >= 120 || diastolic >= 80) return "M"; // Medium
  return "L"; // Low / Normal
}

// Helper to get color for BP category
function getBPColor(category) {
  switch(category) {
    case "H": return "red";
    case "M": return "orange";
    case "L": return "green";
    default: return "black";
  }
}

// Render daily summary
function renderDailySummary(date) {
  const dailySummaryOutput = document.getElementById('dailySummaryOutput');
  const summary = dailyLogs[date] || { bloodPressure: [], glucose: [] };
  const baseline = dailyLogs[baselineDate] || { bloodPressure: [], glucose: [] };

  let html = `<h3>Daily Summary for ${date}</h3>`;

  // Blood Pressure Section
  if (summary.bloodPressure.length > 0) {
    html += `<h4>Blood Pressure</h4>`;
    summary.bloodPressure.forEach((bp, idx) => {
      const category = getBPCategory(bp.systolic, bp.diastolic);
      html += `<div style="color:${getBPColor(category)}">
        BP #${idx + 1}: ${bp.systolic}/${bp.diastolic} mmHg, HR: ${bp.heartRate} ${bp.note ? "(" + bp.note + ")" : ""} - ${category} hypertension
      </div>`;
    });

    // Optional: compare to baseline (first BP)
    if (baseline.bloodPressure.length > 0) {
      const baseBP = baseline.bloodPressure[0];
      html += `<div style="margin-top:5px; font-style:italic; color:blue;">
        Comparison to ${baselineDate}: First BP was ${baseBP.systolic}/${baseBP.diastolic} mmHg
      </div>`;
    }
  } else {
    html += `<div>No blood pressure readings</div>`;
  }

  // Glucose Section
  if (summary.glucose.length > 0) {
    html += `<h4>Glucose</h4>`;
    summary.glucose.forEach((g, idx) => {
      if (typeof g === "object") {
        html += `<div>Glucose #${idx + 1}: ${g.value} mmol/L (Time: ${g.time})</div>`;
      } else {
        html += `<div>Glucose #${idx + 1}: ${g} mmol/L</div>`;
      }
    });
  } else {
    html += `<div>No glucose readings</div>`;
  }

  dailySummaryOutput.innerHTML = html;
}

// History list logic
const historyList = document.getElementById('historyList');
const datePicker = document.getElementById('datePicker');

datePicker.addEventListener('change', (e) => {
  const selectedDate = e.target.value;
  renderDailySummary(selectedDate);

  // Add button to history if it doesn't exist
  if (![...historyList.children].some(btn => btn.dataset.date === selectedDate)) {
    const btn = document.createElement('button');
    btn.textContent = selectedDate;
    btn.dataset.date = selectedDate;
    btn.addEventListener('click', () => renderDailySummary(selectedDate));
    historyList.prepend(btn); // newest on top
  }
});
