// Health Dashboard 3 - Core App Skeleton
// In-memory store for now, can save to JSON/CSV later

// Sample Data
const healthData = {
  date: "2025-12-30",
  walks: [],
  treadmill: [],
  strength: [],
  bp: []
};

// Utility: Log messages to HTML console
function logMessage(msg) {
  const logDiv = document.getElementById('log');
  if (logDiv) {
    const p = document.createElement('p');
    p.textContent = msg;
    logDiv.appendChild(p);
  } else {
    console.error('Error: Element with id "log" not found!');
  }
}

// Update Daily Summary
function updateDailySummary() {
  const dashboard = document.getElementById('dashboard');
  if (!dashboard) return;

  dashboard.innerHTML = `
    <h2>Daily Summary for ${healthData.date}</h2>
    <p>Walk Duration: ${sumDuration(healthData.walks)} min (${sumDistance(healthData.walks)} km)</p>
    <p>Treadmill Duration: ${sumDuration(healthData.treadmill)} min (${sumDistance(healthData.treadmill)} km)</p>
    <p>Strength Duration: ${sumReps(healthData.strength)} reps (${healthData.strength.length} exercises)</p>
    <p>Calories Burned: ${sumCalories()}</p>
    <p>Average Heart Rate: ${avgHeartRate()}</p>
  `;
}

// Summaries
function sumDuration(arr) {
  return arr.reduce((a,b) => a + (b.duration || 0), 0);
}
function sumDistance(arr) {
  return arr.reduce((a,b) => a + (b.distance || 0), 0).toFixed(2);
}
function sumReps(arr) {
  return arr.reduce((a,b) => a + (b.reps || 0), 0);
}
function sumCalories() {
  return sumDuration(healthData.walks) + sumDuration(healthData.treadmill) + sumReps(healthData.strength);
}
function avgHeartRate() {
  const allHR = [...healthData.walks, ...healthData.treadmill, ...healthData.strength]
                  .map(e => e.avgHR).filter(Boolean);
  if (allHR.length === 0) return "N/A";
  return Math.round(allHR.reduce((a,b)=>a+b,0)/allHR.length);
}

// Add sample BP reading
function addBP(systolic, diastolic, hr, type) {
  healthData.bp.push({ systolic, diastolic, hr, type, time: new Date() });
  logMessage(`BP Added: ${systolic}/${diastolic}/${hr} ${type}`);
}

// Example: Add a walk
function addWalk(duration, distance, calories, avgHR, maxHR) {
  healthData.walks.push({ duration, distance, calories, avgHR, maxHR, time: new Date() });
  logMessage(`Walk Added: ${duration}min, ${distance}km, ${calories}cal`);
}

// Example: Add treadmill
function addTreadmill(duration, distance, speed, calories, avgHR, maxHR) {
  healthData.treadmill.push({ duration, distance, speed, calories, avgHR, maxHR, time: new Date() });
  logMessage(`Treadmill Added: ${duration}min, ${distance}km, ${calories}cal`);
}

// Example: Add strength
function addStrength(exercise, reps, sets, calories, avgHR, maxHR) {
  healthData.strength.push({ exercise, reps, sets, calories, avgHR, maxHR, time: new Date() });
  logMessage(`Strength Added: ${exercise} ${reps}x${sets}`);
}

// Iframe Section - Add your platform URLs
function addPlatformIframe(title, url) {
  const platformsDiv = document.getElementById('platforms');
  if (!platformsDiv) return;

  const iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.title = title;
  iframe.width = "100%";
  iframe.height = "400";
  iframe.style.border = "1px solid #ccc";
  platformsDiv.appendChild(iframe);

  logMessage(`Iframe added: ${title}`);
}

// Initialize Dashboard
function initDashboard() {
  logMessage("Dashboard loaded");
  updateDailySummary();

  // Example iframes (you can replace URLs)
  addPlatformIframe("Cloudflare", "https://dash.cloudflare.com/");
  addPlatformIframe("Netlify", "https://app.netlify.com/");
  addPlatformIframe("Codesandbox", "https://codesandbox.io/dashboard");
}

window.addEventListener('DOMContentLoaded', initDashboard);
