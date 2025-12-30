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
function now() { return new Date().toISOString(); }

// =======================
// Log activities
// =======================
function logWalk(date, durationMinutes, distanceKm = 0, avgHR = null, maxHR = null, calories = 0, speed = 0) {
  healthData.walks.push({ date, durationMinutes, distanceKm, avgHR, maxHR, calories, speed });
}

function logTreadmill(date, durationMinutes, distanceKm = 0, avgHR = null, maxHR = null, calories = 0, speed = 0) {
  healthData.treadmill.push({ date, durationMinutes, distanceKm, avgHR, maxHR, calories, speed });
}

function logStrength(date, exercises = []) {
  healthData.strength.push({ date, exercises });
}

function logBP(date, systolic, diastolic, pulse, tag = "") {
  healthData.bp.push({ date, systolic, diastolic, pulse, tag });
}

// =======================
// Daily Summary computation
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
// Helper: get last N dates
// =======================
function lastNDates(n) {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < n; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    dates.push(d.toISOString().split("T")[0]);
  }
  return dates;
}

// =======================
// Display summaries on page load
// =======================
document.addEventListener("DOMContentLoaded", () => {
  const outputDiv = document.getElementById("dailySummaryOutput");
  outputDiv.innerHTML = "";

  const dates = lastNDates(7); // last 7 days

  dates.forEach(date => {
    const summary = getDailySummary(date);
    outputDiv.innerHTML += `
      <div style="margin-bottom:15px; padding:10px; background:#fff; border-radius:6px; box-shadow:0 0 5px rgba(0,0,0,0.1)">
        <h3>Daily Summary for ${date}</h3>
        <p><strong>Walk Duration:</strong> ${summary.walkDuration} min (${summary.walkDistance} km)</p>
        <p><strong>Treadmill Duration:</strong> ${summary.treadmillDuration} min (${summary.treadmillDistance} km)</p>
        <p><strong>Strength Duration:</strong> ${summary.strengthDuration} reps (${summary.strengthExercises} exercises)</p>
        <p><strong>Calories Burned:</strong> ${summary.caloriesBurned}</p>
        <p><strong>Average Heart Rate:</strong> ${summary.avgHeartRate}</p>
      </div>
    `;
  });
});

// =======================
// Example logs (delete or add your own data)
// =======================
logWalk("2025-12-30", 10, 0.3, 105, 115, 15, 1.5);
logTreadmill("2025-12-30", 15, 0.5, 110, 120, 20, 2.0);
logStrength("2025-12-30", [
  { name: "biceps", sets: 3, reps: 10 },
  { name: "laterals", sets: 3, reps: 10 }
]);
logBP("2025-12-30", 122, 67, 90, "M Hypertension");

console.log("Current Health Data:", healthData);
