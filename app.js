// Health Dashboard 3 - Core App Skeleton with Logs, Rollups, and BP

// --- Data Storage ---
const healthData = {
  dailyLogs: [
    { date: '2025-12-30', walk: 5, treadmill: 10, strength: 6, calories: 11, avgHR: 115, maxHR: 154, bp: { systolic: 128, diastolic: 70, pulse: 92 } },
    { date: '2025-12-30', walk: 5, treadmill: 0, strength: 0, calories: 0, avgHR: 90, maxHR: 0, bp: { systolic: 126, diastolic: 67, pulse: 96 } },
    { date: '2025-12-30', walk: 0, treadmill: 10, strength: 0, calories: 11, avgHR: 105, maxHR: 128, bp: { systolic: 126, diastolic: 67, pulse: 96 } },
    { date: '2025-12-30', walk: 0, treadmill: 0, strength: 6, calories: 0, avgHR: 93, maxHR: 0, bp: { systolic: 126, diastolic: 69, pulse: 93 } }
  ],
  referenceDate: '2025-10-29'
};

// --- Utility Functions ---
function sum(arr, key) {
  return arr.reduce((acc, log) => acc + (log[key] || 0), 0);
}

function avg(arr, key) {
  const values = arr.map(l => l[key]).filter(v => v != null && !isNaN(v));
  return values.length ? (values.reduce((a,b)=>a+b,0)/values.length).toFixed(1) : 0;
}

// --- Render Functions ---
function renderDashboard() {
  const dashboardDiv = document.getElementById('dashboard');
  dashboardDiv.innerHTML = `<h2>Daily Summary for ${healthData.dailyLogs[0].date}</h2>`;

  const daily = healthData.dailyLogs.filter(d => d.date === healthData.dailyLogs[0].date);

  const totalWalk = sum(daily, 'walk');
  const totalTreadmill = sum(daily, 'treadmill');
  const totalStrength = sum(daily, 'strength');
  const totalCalories = sum(daily, 'calories');
  const avgHR = avg(daily, 'avgHR');

  // Latest BP
  const latestBP = daily[daily.length -1].bp;

  dashboardDiv.innerHTML += `
    <p>Walk Duration: ${totalWalk} min</p>
    <p>Treadmill Duration: ${totalTreadmill} min</p>
    <p>Strength Duration: ${totalStrength} reps</p>
    <p>Calories Burned: ${totalCalories}</p>
    <p>Average Heart Rate: ${avgHR}</p>
    <p>Blood Pressure: ${latestBP.systolic}/${latestBP.diastolic} / Pulse ${latestBP.pulse}</p>
  `;
}

// --- 7-Day Rolling Summaries ---
function rolling7Day() {
  const dashboardDiv = document.getElementById('dashboard');
  dashboardDiv.innerHTML += `<h3>7-Day Rolling Summary</h3>`;

  const today = new Date(healthData.dailyLogs[0].date);
  const sevenDayLogs = healthData.dailyLogs.filter(d => {
    const dDate = new Date(d.date);
    return (today - dDate) / (1000*60*60*24) < 7;
  });

  const totalWalk = sum(sevenDayLogs, 'walk');
  const totalTreadmill = sum(sevenDayLogs, 'treadmill');
  const totalStrength = sum(sevenDayLogs, 'strength');
  const totalCalories = sum(sevenDayLogs, 'calories');
  const avgHR = avg(sevenDayLogs, 'avgHR');

  dashboardDiv.innerHTML += `
    <p>Total Walk: ${totalWalk} min</p>
    <p>Total Treadmill: ${totalTreadmill} min</p>
    <p>Total Strength: ${totalStrength} reps</p>
    <p>Total Calories: ${totalCalories}</p>
    <p>Average HR: ${avgHR}</p>
  `;
}

// --- Monthly Rollup ---
function monthlyRollup(month='12', year='2025') {
  const dashboardDiv = document.getElementById('dashboard');
  dashboardDiv.innerHTML += `<h3>Monthly Rollup (${month}/${year})</h3>`;

  const monthLogs = healthData.dailyLogs.filter(d => {
    const [y, m] = d.date.split('-');
    return y===year && m===month;
  });

  const totalWalk = sum(monthLogs, 'walk');
  const totalTreadmill = sum(monthLogs, 'treadmill');
  const totalStrength = sum(monthLogs, 'strength');
  const totalCalories = sum(monthLogs, 'calories');
  const avgHR = avg(monthLogs, 'avgHR');

  dashboardDiv.innerHTML += `
    <p>Total Walk: ${totalWalk} min</p>
    <p>Total Treadmill: ${totalTreadmill} min</p>
    <p>Total Strength: ${totalStrength} reps</p>
    <p>Total Calories: ${totalCalories}</p>
    <p>Average HR: ${avgHR}</p>
  `;
}

// --- Initialize Dashboard ---
document.addEventListener('DOMContentLoaded', () => {
  console.log('Dashboard loaded');
  renderDashboard();
  rolling7Day();
  monthlyRollup();
});
