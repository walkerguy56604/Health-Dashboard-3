// Health Dashboard 3 - Core App Skeleton
// Author: Mark & ChatGPT
// Description: Minimal setup for daily logs, walks, treadmill, strength training, and BP data

// -----------------------------
// In-memory store (later can save to JSON/CSV)
const healthData = {
    walks: [],
    treadmill: [],
    strength: [],
    bloodPressure: []
};

// -----------------------------
// Sample / placeholder data (can be replaced when you get back)
healthData.strength.push({
    date: "2025-12-30",
    startTime: "7:50",
    endTime: "8:06",
    exercises: [
        { name: "Lateral", reps: 3, sets: 10 },
        { name: "Biceps", reps: 3, sets: 10 }
    ],
    caloriesBurned: 120,
    avgHeartRate: 90
});

healthData.bloodPressure.push(
    { time: "before", systolic: 141, diastolic: 74, heartRate: 89, category: "H hypertension" },
    { time: "after", systolic: 122, diastolic: 67, heartRate: 92, category: "M hypertension" }
);

// Placeholder for treadmill/walk data
healthData.walks.push({
    date: "2025-12-30",
    durationMin: 0,
    distanceKm: 0,
    calories: 0,
    avgHeartRate: null
});

healthData.treadmill.push({
    date: "2025-12-30",
    durationMin: 0,
    distanceKm: 0,
    speed: 0,
    calories: 0,
    avgHeartRate: null
});

// -----------------------------
// DOM Elements
const dashboardDiv = document.getElementById('dashboard');

// -----------------------------
// Helper: Display a message in the dashboard
function logMessage(msg) {
    if (!dashboardDiv) return console.error('Error: dashboard div not found!');
    const p = document.createElement('p');
    p.textContent = msg;
    dashboardDiv.appendChild(p);
}

// -----------------------------
// Render the daily summary
function renderDailySummary(dateStr) {
    const walk = healthData.walks.find(w => w.date === dateStr) || {};
    const treadmill = healthData.treadmill.find(t => t.date === dateStr) || {};
    const strength = healthData.strength.find(s => s.date === dateStr) || {};

    logMessage(`Daily Summary for ${dateStr}`);
    logMessage(`Walk Duration: ${walk.durationMin || 0} min (${walk.distanceKm || 0} km)`);
    logMessage(`Treadmill Duration: ${treadmill.durationMin || 0} min (${treadmill.distanceKm || 0} km)`);
    logMessage(`Strength Duration: ${strength.sets || 0} reps (${strength.exercises?.length || 0} exercises)`);
    logMessage(`Calories Burned: ${strength.caloriesBurned || 0}`);
    logMessage(`Average Heart Rate: ${strength.avgHeartRate || 'N/A'}`);
}

// -----------------------------
// Initialize Dashboard
function initDashboard() {
    logMessage('Health Dashboard 3');
    renderDailySummary("2025-12-30");
    logMessage('Dashboard loaded');
}

// Run the dashboard
initDashboard();
// Helper to add a new entry and render immediately
function addActivity(type, entry) {
    if (!healthData[type]) return console.error(`Invalid type: ${type}`);
    healthData[type].push(entry);

    // If it's today's date, rerender daily summary
    if (entry.date === "2025-12-30") {
        dashboardDiv.innerHTML = ''; // Clear current log
        initDashboard();
    }
}
