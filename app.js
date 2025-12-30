// app.js (top)
const healthHistory = {
  "2025-12-30": {
    walks: [
      { start: "03:10", end: "03:15", duration: 5, distance: 0.2, calories: null, avgHR: null, maxHR: null, notes: "Morning non-Siri walk" },
      { start: "07:35", end: "07:40", duration: 5, distance: 0.2, calories: null, avgHR: null, maxHR: null, notes: "Morning Siri walk" }
    ],
    treadmill: [
      { start: "10:00", end: "10:10", duration: 10, distance: 0.24, calories: 11, avgHR: 115, maxHR: 154, speed: 1.4, notes: "Morning treadmill session" }
    ],
    strength: [
      { start: "07:54", end: "08:08", exercises: [{name: "lateral", sets:3, reps:10}, {name:"biceps", sets:3, reps:10}], notes: "Morning strength training" },
      { start: "12:08", end: "12:23", exercises: [{name: "lateral", sets:3, reps:10}, {name:"biceps", sets:3, reps:10}], notes: "Midday strength training" }
    ],
    bp: [
      { time: "08:13", systolic: 126, diastolic: 69, pulse: 93, category: "M Hypertension", notes: "5 min after morning strength" },
      { time: "10:15", systolic: 128, diastolic: 65, pulse: 92, category: "M Hypertension", notes: "After treadmill" }
    ]
  }
};
function renderDashboard() {
  const dashboard = document.getElementById('dashboard');
  dashboard.innerHTML = ''; // Clear previous content

  const summaryTitle = document.createElement('h2');
  summaryTitle.textContent = `Daily Summary for ${todayData.date}`;
  dashboard.appendChild(summaryTitle);

  // Walks
  const totalWalkMinutes = todayData.walks.reduce((sum, w) => sum + w.duration, 0);
  const totalWalkDistance = todayData.walks.reduce((sum, w) => sum + w.distance, 0);
  const walkDiv = document.createElement('div');
  walkDiv.textContent = `Walk Duration: ${totalWalkMinutes} min (${totalWalkDistance.toFixed(2)} km)`;
  dashboard.appendChild(walkDiv);

  // Treadmill
  const totalTreadmillMinutes = todayData.treadmill.reduce((sum, t) => sum + t.duration, 0);
  const totalTreadmillDistance = todayData.treadmill.reduce((sum, t) => sum + t.distance, 0);
  const treadmillDiv = document.createElement('div');
  treadmillDiv.textContent = `Treadmill Duration: ${totalTreadmillMinutes} min (${totalTreadmillDistance.toFixed(2)} km)`;
  dashboard.appendChild(treadmillDiv);

  // Strength training
  const totalReps = todayData.strength.reduce((sum, s) => sum + s.reps * s.sets, 0);
  const totalExercises = todayData.strength.length;
  const strengthDiv = document.createElement('div');
  strengthDiv.textContent = `Strength Duration: ${totalReps} reps (${totalExercises} exercises)`;
  dashboard.appendChild(strengthDiv);

  // Calories and HR
  const totalCalories = todayData.calories.reduce((sum, c) => sum + c, 0);
  const avgHeartRate = todayData.heartRates.length
    ? (todayData.heartRates.reduce((sum, h) => sum + h, 0) / todayData.heartRates.length).toFixed(0)
    : 'N/A';
  const caloriesDiv = document.createElement('div');
  caloriesDiv.textContent = `Calories Burned: ${totalCalories}`;
  dashboard.appendChild(caloriesDiv);
  const hrDiv = document.createElement('div');
  hrDiv.textContent = `Average Heart Rate: ${avgHeartRate}`;
  dashboard.appendChild(hrDiv);

  // Blood pressures
  todayData.bp.forEach((bpEntry, i) => {
    const bpDiv = document.createElement('div');
    bpDiv.textContent = `BP ${i + 1}: ${bpEntry.systolic}/${bpEntry.diastolic}/${bpEntry.pulse} ${bpEntry.category}`;
    dashboard.appendChild(bpDiv);
  });
}
document.addEventListener("DOMContentLoaded", () => {

  const today = new Date().toISOString().split('T')[0];

  // Walk
  document.getElementById("logWalkBtn").addEventListener("click", () => {
    const duration = Number(document.getElementById("walkDuration").value);
    const distance = Number(document.getElementById("walkDistance").value);
    const hr = Number(document.getElementById("walkHR").value);
    const calories = Number(document.getElementById("walkCalories").value);

    logWalk(today, duration, distance, hr, null, calories, 1.4);
    renderDashboard(today);
  });

  // Treadmill
  document.getElementById("logTreadBtn").addEventListener("click", () => {
    const duration = Number(document.getElementById("treadDuration").value);
    const distance = Number(document.getElementById("treadDistance").value);
    const hr = Number(document.getElementById("treadHR").value);
    const calories = Number(document.getElementById("treadCalories").value);

    logTreadmill(today, duration, distance, hr, null, calories, 1.4);
    renderDashboard(today);
  });

  // Strength
  document.getElementById("logStrengthBtn").addEventListener("click", () => {
    const name = document.getElementById("strengthName").value;
    const sets = Number(document.getElementById("strengthSets").value);
    const reps = Number(document.getElementById("strengthReps").value);

    logStrength(today, [{ name, sets, reps }]);
    renderDashboard(today);
  });

  // Blood Pressure
  document.getElementById("logBPBtn").addEventListener("click", () => {
    const systolic = Number(document.getElementById("bpSystolic").value);
    const diastolic = Number(document.getElementById("bpDiastolic").value);
    const pulse = Number(document.getElementById("bpPulse").value);
    const category = document.getElementById("bpCategory").value;

    logBP(today, systolic, diastolic, pulse, category);
    renderDashboard(today);
  });

});
