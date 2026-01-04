export const dailyLogs = {
  "2026-01-02": {
    bloodPressure: [
      { systolic: 127, diastolic: 57, heartRate: 91, note: "Post AM strength – low hypertension" },
      { systolic: 128, diastolic: 72, heartRate: 97, note: "Post treadmill" },
      { systolic: 136, diastolic: 67, heartRate: 93, note: "Post PM strength – high hypertension (expected)" },
      { systolic: 116, diastolic: 64, heartRate: 92, note: "Post PM treadmill – low hypertension" }
    ],
    strength: 29,
    strengthDetails: [
      {
        time: "07:48–08:03",
        duration: 15,
        exercises: "3x10 lateral raises, 3x10 biceps",
        restAfter: 5
      },
      {
        time: "16:06–16:20",
        duration: 14,
        exercises: "3x10 lateral raises, 3x10 biceps",
        restAfter: 5
      }
    ],
    treadmill: [
      {
        time: "12:25–12:35",
        speed: 1.4,
        distance: 0.24,
        calories: 11,
        avgHR: 108,
        maxHR: 151
      },
      {
        time: "Evening",
        speed: 1.4,
        distance: 0.24,
        calories: 11,
        avgHR: 118,
        maxHR: 123
      }
    ],
    walk: 0,
    glucose: [],
    calories: 22,
    heartRate: 92,
    notes: []
  },

  "2026-01-03": {
    bloodPressure: [],
    glucose: [],
    walk: 5, // 5-minute morning walk
    treadmill: [], // standardized as array
    strength: 0,
    strengthDetails: [],
    calories: 0,
    heartRate: null,
    notes: [
      "Morning 5-minute walk, 08:35–08:40, non-Siri"
    ]
  }
};
"2026-01-04": {
  bloodPressure: [
    { systolic: 132, diastolic: 80, heartRate: 66, note: "Post strength training – after 5-min rest, H" }
  ],
  strength: 15,
  strengthDetails: [
    {
      time: "08:45–09:00",
      duration: 15,
      exercises: "3x10 lateral raises, 3x10 biceps",
      restAfter: 5
    }
  ],
  treadmill: [],
  walk: 5, // Siri Walk
  glucose: [],
  calories: null,
  heartRate: 66,
  notes: [
    "Morning Siri walk, 04:10–04:15, 5 minutes"
  ]
}
