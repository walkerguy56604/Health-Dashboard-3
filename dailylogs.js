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
    treadmill: [], 
    strength: 0,
    strengthDetails: [],
    calories: 0,
    heartRate: null,
    notes: [
      "Morning 5-minute walk, 08:35–08:40, non-Siri"
    ]
  },

  "2026-01-04": {
    bloodPressure: [
      { systolic: 132, diastolic: 80, heartRate: 66, note: "Post strength training – after 5-min rest, H" }
    ],
    strength: 30, // total for the day
    strengthDetails: [
      {
        time: "08:45–09:00",
        duration: 15,
        exercises: "3x10 lateral raises, 3x10 biceps",
        restAfter: 5
      },
      {
        time: "11:48–12:09",
        duration: 15,
        exercises: "3x10 lateral raises, 3x10 biceps",
        restAfter: 0
      }
    ],
    treadmill: [
      {
        time: "17:30–17:40",
        speed: 1.4,
        distance: 0.24,
        calories: 12,
        avgHR: 102,
        maxHR: 151
      }
    ],
    walk: 35, // total minutes walked today
    glucose: [],
    calories: 12, // treadmill calories
    heartRate: 102, // treadmill avgHR
    notes: [
      "Morning Siri walk, 04:10–04:15, 5 minutes",
      "Afternoon treadmill, 17:30–17:40, 10 minutes"
    ]
  }
};
"2026-01-05": {
  bloodPressure: [
    { systolic: 139, diastolic: 70, heartRate: 84, note: "Post strength training – H" },
    { systolic: 131, diastolic: 67, heartRate: 85, note: "Post treadmill – H" }
  ],
  strength: 18,
  strengthDetails: [
    {
      time: "08:00–08:18",
      duration: 18,
      exercises: "Strength training (various, with short delays)",
      restAfter: 5
    }
  ],
  treadmill: [
    {
      time: "09:28–09:38",
      speed: 1.4,
      distance: 0.24,
      calories: null, // if you want to add calories, update here
      avgHR: 138,
      maxHR: 163
    }
  ],
  walk: 10, // 5 + 5 minutes
  glucose: [],
  calories: null, // update later if known
  heartRate: 85, // most recent HR
  notes: [
    "Morning Siri walk, 05:55–06:00, 5 minutes",
    "Morning non-Siri walk, 07:15–07:20, 5 minutes"
  ]
}
