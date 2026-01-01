export const dailyLogs = {
  "2026-01-01": {
    bloodPressure: [
      { systolic: 117, diastolic: 69, heartRate: 88, note: "Morning, pre-exercise, low hypertension" },
      { systolic: 135, diastolic: 71, heartRate: 88, note: "5 min after treadmill/strength training, high hypertension" },
      { systolic: 126, diastolic: 63, heartRate: 92, note: "5 min after strength training, medium hypertension" }
    ],
    glucose: [
      { value: 6.4, time: "08:15" }
    ],
    walk: 45,
    treadmill: {
      duration: 10,
      start: "10:35",
      end: "10:45",
      speed: 1.4,
      distance: 0.24,
      avgHR: 111,
      maxHR: 182,
      calories: 11
    },
    strength: {
      lateral: [3,3,3],
      biceps: [3,3,3,10],
      duration: 14
    },
    calories: 11,
    heartRate: 88
  },

  // Rest of January can still be pre-filled as empty
  "2026-01-02": { bloodPressure: [], glucose: [], walk:0, treadmill:0, strength:0, calories:0, heartRate:0 },
  "2026-01-03": { bloodPressure: [], glucose: [], walk:0, treadmill:0, strength:0, calories:0, heartRate:0 },
  // ...continue for all days
};
