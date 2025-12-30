// Add this to your existing in-memory store or daily logs section in app.js
const dailyActivityLogs = [
  {
    date: "2025-12-30",
    walk: {
      duration_min: 10,
      speed_kmh: 1.4,
      distance_km: 0.24,
      calories: 11,
      avg_heart_rate: 115,
      max_heart_rate: 154
    },
    treadmill: {
      duration_min: 10,
      speed_kmh: 1.4,
      distance_km: 0.24,
      calories: 11,
      avg_heart_rate: 115,
      max_heart_rate: 154
    },
    strength_training: {
      duration_min: 0,
      exercises_done: 0,
      calories: 0,
      avg_heart_rate: null
    }
  }
];

// Example: log to console
console.log("Daily activity logs updated:", dailyActivityLogs);
