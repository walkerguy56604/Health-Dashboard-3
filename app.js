console.log("Health Dashboard 3 is alive 👊");

// =======================
// In-memory store
// =======================
const healthData = {
  walks: [],
  treadmill: [],
  strength: [],
  bp: []
};

// =======================
// Timestamp helper
// =======================
function now() {
  return new Date().toISOString();
}

// =======================
// Log activities
// =======================
function logWalk(date, durationMinutes, distanceKm = 0, avgHR = null, maxHR = null, calories = 0, speed = 0) {
  const entry = { date, durationMinutes, distanceKm, avgHR, maxHR, calories, speed };
  healthData.walks.push(entry);
  updateHistory();
}

function logTreadmill(date, durationMinutes, distanceKm = 0, avgHR = null, maxHR = null, calories = 0, speed = 0) {
  const entry = { date, durationMinutes, distanceKm, avgHR, maxHR, calories, speed };
  healthData.treadmill.push(entry);
  updateHistory();
}

function logStrength(date, exercises = []) {
  const entry = { date, exercises };
  healthData.strength.push(entry);
  updateHistory();
}

// =======================
// Log blood pressure
// =======================
function logBP(date, systolic, diastolic, pulse, tag = "") {
  const entry = { date, systolic, diastolic, pulse, tag };
  healthData.bp.push(entry);
  updateHistory();
}

// =======================
// Daily Summary
// =======================
function getDailySummary(date) {
  const summary = {
    walkDuration: 0,
    treadmillDuration: 0,
    strengthDuration: 0,
    walkDistance: 0,
    treadmillDistance: 0,
    strengthExercises: 0,
    caloriesBurned: 0,
    avgHeartRate: null
  };

  let hrSum = 0, hrCount = 0;

  healthData.walks.forEach(w => {
    if (w.date === date) {
      summary.walkDuration += w.durationMinutes;
      summary.walkDistance += w.distanceKm;
      summary.caloriesBurned += w.calories;
      if (w.avgHR) { hrSum += w.avgHR; hrCount++; }
    }
  });

  healthData.treadmill.forEach(t => {
    if (t.date === date) {
      summary.treadmillDuration += t.durationMinutes;
      summary.treadmillDistance += t.distanceKm;
      summary.caloriesBurned += t.calories;
      if (t.avgHR) { hrSum += t.avgHR; hrCount++; }
    }
  });

  healthData.strength.forEach(s => {
    if (s.date === date) {
      summary.strengthDuration += s.exercises.reduce((acc, ex) => acc + (ex.sets * ex.reps), 0);
      summary.strengthExercises += s.exercises.length;
    }
  });

  summary.avgHeartRate = hrCount ? Math.round(hrSum / hrCount) : "N/A";
  return summary;
}

// =======================
// Render daily summary
// =======================
function renderDailySummary(date) {
  const summary = getDailySummary(date);
  const outputDiv = document.getElementById("dailySummaryOutput");

  outputDiv.innerHTML = `
    <h3>Daily Summary for ${date}</h3>
    <div><strong>Walk Duration:</strong> ${summary.walkDuration} min (${summary.walkDistance} km)</div>
    <div><strong>Treadmill Duration:</strong> ${summary.treadmillDuration} min (${summary.treadmillDistance} km)</div>
    <div><strong>Strength Duration:</strong> ${summary.strengthDuration} reps (${summary.strengthExercises} exercises)</div>
    <div><strong>Calories Burned:</strong> ${summary.caloriesBurned}</div>
    <div><strong>Average Heart Rate:</strong> ${summary.avgHeartRate}</div>
  `;
}

// =======================
// Render scrollable history
// =======================
function updateHistory() {
  const historyDiv = document.getElementById("historyList");
  historyDiv.innerHTML = "";

  const allDates = new Set([
    ...healthData.walks.map(w => w.date),
    ...healthData.treadmill.map(t => t.date),
    ...healthData.strength.map(s => s.date),
    ...healthData.bp.map(b => b.date)
  ]);

  const sortedDates = Array.from(allDates).sort((a, b) => new Date(b) - new Date(a));

  sortedDates.forEach(date => {
    const summary = getDailySummary(date);
    const div = document.createElement("div");
    div.style.borderBottom = "1px solid #ccc";
    div.style.marginBottom = "5px";
    div.style.paddingBottom = "5px";
    div.innerHTML = `
      <strong>${date}</strong> - Walk: ${summary.walkDuration} min, Treadmill: ${summary.treadmillDuration} min, Strength: ${summary.strengthExercises} exercises, Calories: ${summary.caloriesBurned}, Avg HR: ${summary.avgHeartRate}
    `;
    historyDiv.appendChild(div);
  });
}

// =======================
// Hook up date picker
// =======================
document.addEventListener("DOMContentLoaded", () => {
  const datePicker = document.getElementById("datePicker");
  const today = new Date().toISOString().split("T")[0];
  datePicker.value = today;
  renderDailySummary(today);

  datePicker.addEventListener("change", () => {
    const selectedDate = datePicker.value;
    renderDailySummary(selectedDate);
  });
});
