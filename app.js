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
