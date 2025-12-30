console.log("Health Dashboard 3 is alive 👊");

/* =========================
   Health Dashboard 3
   Core App Skeleton
   ========================= */

/* ---- In-memory store (later can save to JSON/CSV) ---- */
const healthData = {
  walks: [],
  treadmill: [],
  strength: [],
  bp: []
};

/* ---- Utility: timestamp ---- */
function now() {
  return new Date().toISOString();
}

/* ---- Log a walk ---- */
function logWalk(durationMinutes, notes = "") {
  healthData.walks.push({
    time: now(),
    duration_minutes: durationMinutes,
    notes
  });
}

/* ---- Log treadmill ---- */
function logTreadmill({
  duration,
  distance,
  speed,
  calories,
  avgHR,
  maxHR,
  notes = ""
}) {
  healthData.treadmill.push({
    time: now(),
    duration,
    distance,
    speed,
    calories,
    avgHR,
    maxHR,
    notes
  });
}

/* ---- Log strength training ---- */
function logStrength({
  start,
  end,
  exercises,
  notes = ""
}) {
  healthData.strength.push({
    start,
    end,
    exercises,
    notes
  });
}

/* ---- Log blood pressure ---- */
function logBP(systolic, diastolic, pulse, tag = "") {
  healthData.bp.push({
    time: now(),
    systolic,
    diastolic,
    pulse,
    tag
  });
}

/* ---- Debug helper ---- */
function showData() {
  console.log("Health Dashboard 3 Data:", healthData);
}

/* ---- Example usage (safe to delete later) ---- */
// logWalk(5, "Short walk after strength training");
// logBP(128, 67, 96, "post-strength");
// --- Recent activities ---
const recentActivities = [
  { type: "walk", duration: 10, distance: 0.24, avgHR: 107, maxHR: 117, speed: 1.4, calories: 12, time: "5:20-5:30" },
  { type: "strength", duration: 22, exercises: { lateral: 3*10, biceps: 3*10 }, time: "3:50-4:12" }
];

// Merge with in-memory store
healthData.activities.push(...recentActivities);
// Health Dashboard 3 - Core App Skeleton
// In-memory store for activities (later can save to JSON/CSV)
const healthData = {
  walks: [],
  treadmill: [],
  strength: []
};

// --- WALK ACTIVITY --- //
function logWalk(date, durationMinutes, distanceKm, avgHR, maxHR, calories, speed) {
  const entry = { date, durationMinutes, distanceKm, avgHR, maxHR, calories, speed };
  healthData.walks.push(entry);
  console.log("Walk logged:", entry);
}

// --- TREADMILL ACTIVITY --- //
function logTreadmill(date, durationMinutes, distanceKm, avgHR, maxHR, calories, speed) {
  const entry = { date, durationMinutes, distanceKm, avgHR, maxHR, calories, speed };
  healthData.treadmill.push(entry);
  console.log("Treadmill logged:", entry);
}

// --- STRENGTH TRAINING --- //
function logStrength(date, exercises) {
  // exercises is an array: [{name: "biceps", sets: 3, reps: 10}, ...]
  const entry = { date, exercises };
  healthData.strength.push(entry);
  console.log("Strength session logged:", entry);
}

// --- SIMPLE EXPORT FUNCTIONS --- //
// (Later can expand to save to JSON or CSV)
function exportWalks() { return JSON.stringify(healthData.walks, null, 2); }
function exportTreadmill() { return JSON.stringify(healthData.treadmill, null, 2); }
function exportStrength() { return JSON.stringify(healthData.strength, null, 2); }

// --- EXAMPLE USAGE --- //
logWalk("2025-12-29", 5, 0.2, 107, 117, 12, 1.4);
logTreadmill("2025-12-29", 10, 0.24, 107, 119, 12, 1.4);
logStrength("2025-12-29", [
  { name: "biceps", sets: 3, reps: 10 },
  { name: "laterals", sets: 3, reps: 10 }
]);

console.log("Current Health Data:", healthData);
