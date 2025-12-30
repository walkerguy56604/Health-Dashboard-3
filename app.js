// Health Dashboard 3 - App.js
// Core app skeleton with daily summary + Oct 29 comparison

// Example daily log data
const dailyLogs = {
  "2025-10-29": {
    walk: { duration: 20, distance: 1.5 },
    treadmill: { duration: 15, distance: 1.2 },
    strength: { reps: 12, exercises: 6 },
    calories: 200,
    avgHR: 95
  },
  "2025-12-30": {
    walk: { duration: 5, distance: 0 },
    treadmill: { duration: 10, distance: 0.24 },
    strength: { reps: 6, exercises: 3 },
    calories: 11,
    avgHR: 115
  }
};

// Reference date for comparison
const referenceDate = "2025-10-29";

// Utility to calculate color based on difference
function colorDiff(current, reference) {
  if (current > reference) return "green";
  if (current < reference) return "red";
  return "black";
}

// Populate date dropdown
function populateDateDropdown() {
  const select = document.createElement("select");
  select.id = "dateDropdown";
  
  Object.keys(dailyLogs).forEach(date => {
    const option = document.createElement("option");
    option.value = date;
    option.textContent = date;
    select.appendChild(option);
  });
  
  select.addEventListener("change", () => renderSummary(select.value));
  document.getElementById("dashboard").appendChild(select);
}

// Render daily summary with comparison
function renderSummary(date) {
  const summaryDiv = document.getElementById("summary") || document.createElement("div");
  summaryDiv.id = "summary";
  summaryDiv.innerHTML = ""; // clear previous
  
  const log = dailyLogs[date];
  const refLog = dailyLogs[referenceDate];

  const metrics = [
    { name: "Walk Duration (min)", key: "walk", sub: "duration" },
    { name: "Walk Distance (km)", key: "walk", sub: "distance" },
    { name: "Treadmill Duration (min)", key: "treadmill", sub: "duration" },
    { name: "Treadmill Distance (km)", key: "treadmill", sub: "distance" },
    { name: "Strength Reps", key: "strength", sub: "reps" },
    { name: "Strength Exercises", key: "strength", sub: "exercises" },
    { name: "Calories Burned", key: "calories" },
    { name: "Average Heart Rate", key: "avgHR" }
  ];

  metrics.forEach(metric => {
    const currentVal = metric.sub ? log[metric.key][metric.sub] : log[metric.key];
    const refVal = metric.sub ? refLog[metric.key][metric.sub] : refLog[metric.key];
    
    const p = document.createElement("p");
    p.textContent = `${metric.name}: ${currentVal} (Ref: ${refVal})`;
    p.style.color = colorDiff(currentVal, refVal);
    summaryDiv.appendChild(p);
  });
  
  document.getElementById("dashboard").appendChild(summaryDiv);
}

// Initialize dashboard
function initDashboard() {
  const title = document.createElement("h2");
  title.textContent = "Daily Summary";
  document.getElementById("dashboard").appendChild(title);
  
  populateDateDropdown();
  renderSummary(Object.keys(dailyLogs)[0]); // show first date by default
}

// Run
initDashboard();
