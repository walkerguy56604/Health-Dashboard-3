console.log("Health Dashboard 3 - 7-Day Summary with Sparklines 👊");

// =======================
// In-memory store
// =======================
const healthData = {
  walks: [],
  treadmill: [],
  strength: [],
  bp: [] // { date: "YYYY-MM-DD", systolic, diastolic, pulse }
};

// =======================
// Helper: current timestamp
// =======================
function now() {
  return new Date().toISOString();
}

// =======================
// Logging functions
// =======================
function logWalk(date, duration, distance = 0, calories = 0) {
  healthData.walks.push({ date, duration, distance, calories });
}

function logTreadmill(date, duration, distance = 0, calories = 0) {
  healthData.treadmill.push({ date, duration, distance, calories });
}

function logStrength(date, exercises = []) {
  healthData.strength.push({ date, exercises });
}

function logBP(date, systolic, diastolic, pulse) {
  healthData.bp.push({ date, systolic, diastolic, pulse });
}

// =======================
// Get daily summary
// =======================
function getDailySummary(date) {
  const summary = { walk: 0, treadmill: 0, strength: 0, calories: 0, avgHR: null };
  let hrSum = 0, hrCount = 0;

  healthData.walks.forEach(w => { if (w.date === date) { summary.walk += w.duration; summary.calories += w.calories; } });
  healthData.treadmill.forEach(t => { if (t.date === date) { summary.treadmill += t.duration; summary.calories += t.calories; } });
  healthData.strength.forEach(s => { if (s.date === date) { summary.strength += s.exercises.reduce((acc, e) => acc + (e.sets * e.reps), 0); } });
  healthData.bp.forEach(bp => { if (bp.date === date) { hrSum += bp.pulse; hrCount++; } });

  summary.avgHR = hrCount ? Math.round(hrSum / hrCount) : "N/A";
  return summary;
}

// =======================
// Generate last 7 days array
// =======================
function getLast7Days() {
  const arr = [];
  const today = new Date();
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    arr.push(d.toISOString().split("T")[0]);
  }
  return arr;
}

// =======================
// Create sparklines
// =======================
function createSparkline(dataArr, maxVal = null) {
  const canvas = document.createElement("canvas");
  canvas.width = 120;
  canvas.height = 30;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const max = maxVal || Math.max(...dataArr, 100);
  const step = canvas.width / (dataArr.length - 1);

  ctx.beginPath();
  ctx.strokeStyle = "#0f172a";
  ctx.lineWidth = 2;

  dataArr.forEach((v, i) => {
    const x = i * step;
    const y = canvas.height - (v / max * canvas.height);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();
  return canvas;
}

// =======================
// Render 7-day summary
// =======================
function renderWeeklySummary() {
  const container = document.getElementById("weeklySummaryOutput");
  container.innerHTML = ""; // clear old content

  const days = getLast7Days();

  days.forEach(date => {
    const summary = getDailySummary(date);

    // BP sparkline for day
    const bpReadings = healthData.bp.filter(bp => bp.date === date).map(bp => bp.systolic);
    const hrReadings = healthData.bp.filter(bp => bp.date === date).map(bp => bp.pulse);

    const dayDiv = document.createElement("div");
    dayDiv.style.borderBottom = "1px solid #ccc";
    dayDiv.style.margin = "5px 0";
    dayDiv.innerHTML = `
      <h4>${date}</h4>
      <p>Walk: ${summary.walk} min, Treadmill: ${summary.treadmill} min, Strength: ${summary.strength} reps, Calories: ${summary.calories}, Avg HR: ${summary.avgHR}</p>
      <div>BP: </div>
      <div>HR: </div>
    `;

    dayDiv.querySelector("div:nth-child(2)").appendChild(createSparkline(bpReadings, 160));
    dayDiv.querySelector("div:nth-child(3)").appendChild(createSparkline(hrReadings, 150));

    container.appendChild(dayDiv);
  });
}

// =======================
// Example usage
// =======================
logWalk("2025-12-29", 5, 0.2, 12);
logTreadmill("2025-12-29", 10, 0.24, 12);
logStrength("2025-12-29", [{ name: "biceps", sets: 3, reps: 10 }, { name: "laterals", sets: 3, reps: 10 }]);
logBP("2025-12-29", 122, 67, 90);

// =======================
// Render weekly summary button
// =======================
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("weeklySummaryBtn");
  btn.addEventListener("click", renderWeeklySummary);
});
