// =======================
// Daily Logs
// =======================
export const dailyLogs = {
  "2024-10-29": { 
    bloodPressure: [
      { systolic: 108, diastolic: 62, heartRate: 69, note: "IHB" },
      { systolic: 118, diastolic: 59, heartRate: 72, note: "IHB" }
    ], 
    glucose: [], 
    walk: 40, treadmill: 0, strength: 30, calories: 0, heartRate: 75 
  },
  "2024-11-01": { 
    bloodPressure: [
      { systolic: 114, diastolic: 65, heartRate: 77 },
      { systolic: 112, diastolic: 59, heartRate: 75 }
    ], 
    glucose: [], walk: 30, treadmill: 0, strength: 30, calories: 0, heartRate: 76 
  },
  "2024-11-04": { 
    bloodPressure: [
      { systolic: 111, diastolic: 58, heartRate: 78 },
      { systolic: 122, diastolic: 68, heartRate: 76 }
    ], 
    glucose: [{ value: 6.7 }], walk: 20, treadmill: 0, strength: 30, calories: 0, heartRate: 77 
  },
  "2024-11-07": { 
    bloodPressure: [], glucose: [{ value: 5.1 }], walk: 20, treadmill: 0, strength: 0, calories: 0, heartRate: 72 
  },
  "2024-11-08": { 
    bloodPressure: [
      { systolic: 112, diastolic: 61, heartRate: 77 },
      { systolic: 119, diastolic: 71, heartRate: 74 }
    ], 
    glucose: [], walk: 25, treadmill: 0, strength: 30, calories: 0, heartRate: 75 
  },
  "2024-11-11": { 
    bloodPressure: [
      { systolic: 117, diastolic: 58, heartRate: 76 },
      { systolic: 132, diastolic: 69, heartRate: 76 }
    ], 
    glucose: [{ value: 6 }], walk: 30, treadmill: 0, strength: 30, calories: 0, heartRate: 76 
  },
  "2024-11-12": { 
    bloodPressure: [], glucose: [{ value: 6.1, time: "morning" }], walk: 20, treadmill: 0, strength: 0, calories: 0, heartRate: 73 
  },
  "2024-11-15": { 
    bloodPressure: [
      { systolic: 118, diastolic: 69, heartRate: 83 },
      { systolic: 120, diastolic: 66, heartRate: 82 }
    ], 
    glucose: [
      { value: 7.7, time: "5:00 AM" },
      { value: 4.6, time: "6:30 AM" }
    ], 
    walk: 40, treadmill: 10, strength: 30, calories: 11, heartRate: 100 
  },
  "2024-11-16": { 
    bloodPressure: [
      { systolic: 125, diastolic: 71, heartRate: 91 }
    ], 
    glucose: [{ value: 6.3 }], walk: 35, treadmill: 15, strength: 20, calories: 12, heartRate: 92 
  },
  "2025-12-30": { 
    bloodPressure: [
      { systolic: 125, diastolic: 71, heartRate: 91 }
    ], 
    glucose: [], walk: 0, treadmill: 0, strength: 15, calories: 0, heartRate: 91 
  },
  // =======================
  // Today: 2025-12-31
  // =======================
  "2025-12-31": {
    bloodPressure: [
      { systolic: 130, diastolic: 69, heartRate: 80 },
      { systolic: 121, diastolic: 67, heartRate: 80 },
      { systolic: 144, diastolic: 75, heartRate: 87 }, // after strength
      { systolic: 137, diastolic: 72, heartRate: 86 }, // final post-strength
      { systolic: 132, diastolic: 73, heartRate: 86 }, // after treadmill
      { systolic: 128, diastolic: 68, heartRate: 85 }  // 2nd post treadmill
    ],
    glucose: [{ value: 5.4 }],
    walk: 10,       // morning walk
    treadmill: 10,  // treadmill
    strength: 12,   // reps from strength training
    calories: 12,   // treadmill calories
    heartRate: 141  // avg HR from treadmill
  }
};
// In data/dailyLogs.js
export const dailyLogs = {
  // existing entries...
  "2024-12-02": {
    bloodPressure: [
      { systolic: 109, diastolic: 58, heartRate: 80 },
      { systolic: 112, diastolic: 54, heartRate: 80 }
    ],
    glucose: [],
    walk: 0,
    treadmill: 0,
    strength: 0,
    calories: 0,
    heartRate: 0
  },
  "2024-12-04": {
    bloodPressure: [{ systolic: 103, diastolic: 57, heartRate: 77 }],
    glucose: [],
    walk: 0,
    treadmill: 0,
    strength: 0,
    calories: 0,
    heartRate: 0
  },
  "2024-12-05": {
    bloodPressure: [],
    glucose: [{ value: 6.2 }],
    walk: 0,
    treadmill: 0,
    strength: 0,
    calories: 0,
    heartRate: 0
  },
  "2024-12-06": {
    bloodPressure: [
      { systolic: 110, diastolic: 59, heartRate: 78 },
      { systolic: 114, diastolic: 58, heartRate: 77 }
    ],
    glucose: [],
    walk: 0,
    treadmill: 0,
    strength: 0,
    calories: 0,
    heartRate: 0
  },
  "2024-12-07": {
    bloodPressure: [],
    glucose: [{ value: 6.9 }],
    walk: 0,
    treadmill: 0,
    strength: 0,
    calories: 0,
    heartRate: 0
  },
  "2024-12-08": {
    bloodPressure: [{ systolic: 108, diastolic: 66, heartRate: 88 }],
    glucose: [],
    walk: 0,
    treadmill: 0,
    strength: 0,
    calories: 0,
    heartRate: 0
  },
  "2024-12-09": {
    bloodPressure: [
      { systolic: 111, diastolic: 62, heartRate: 79 },
      { systolic: 124, diastolic: 58, heartRate: 77 }
    ],
    glucose: [{ value: 6.9 }],
    walk: 0,
    treadmill: 0,
    strength: 0,
    calories: 0,
    heartRate: 0
  },
  "2024-12-10": {
    bloodPressure: [],
    glucose: [{ value: 4.2 }],
    walk: 0,
    treadmill: 0,
    strength: 0,
    calories: 0,
    heartRate: 0
  },
  "2024-12-12": {
    bloodPressure: [{ systolic: 108, diastolic: 60, heartRate: 74, note: "IHB" }],
    glucose: [{ value: 5.1 }],
    walk: 0,
    treadmill: 0,
    strength: 0,
    calories: 0,
    heartRate: 0
  },
  // continue adding more December entries here...
};// =======================
// December 2024
// =======================
"2024-12-13": {
  bloodPressure: [
    { systolic: 108, diastolic: 62, heartRate: 84 },
    { systolic: 115, diastolic: 61, heartRate: 83 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2024-12-14": {
  bloodPressure: [],
  glucose: [{ value: 6.4 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2024-12-15": {
  bloodPressure: [{ systolic: 103, diastolic: 62, heartRate: 75 }],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2024-12-16": {
  bloodPressure: [
    { systolic: 111, diastolic: 62, heartRate: 77 },
    { systolic: 112, diastolic: 59, heartRate: 75 }
  ],
  glucose: [{ value: 6.6 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2024-12-18": {
  bloodPressure: [{ systolic: 124, diastolic: 75, heartRate: 96 }],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2024-12-19": {
  bloodPressure: [],
  glucose: [{ value: 5.1 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2024-12-20": {
  bloodPressure: [
    { systolic: 110, diastolic: 60, heartRate: 85 },
    { systolic: 111, diastolic: 57, heartRate: 84 }
  ],
  glucose: [{ value: 5.4 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2024-12-21": {
  bloodPressure: [],
  glucose: [{ value: 7.2 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2024-12-22": {
  bloodPressure: [{ systolic: 110, diastolic: 73, heartRate: 99 }],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2024-12-23": {
  bloodPressure: [],
  glucose: [{ value: 5.4 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2024-12-24": {
  bloodPressure: [{ systolic: 135, diastolic: 76, heartRate: 93 }],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2024-12-25": {
  bloodPressure: [],
  glucose: [{ value: 8.1 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2024-12-26": {
  bloodPressure: [],
  glucose: [{ value: 9.6 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2024-12-27": {
  bloodPressure: [
    { systolic: 126, diastolic: 82, heartRate: 95 },
    { systolic: 134, diastolic: 77, heartRate: 98 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2024-12-28": {
  bloodPressure: [],
  glucose: [{ value: 8.8 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2024-12-29": {
  bloodPressure: [{ systolic: 115, diastolic: 61, heartRate: 87 }],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2024-12-30": {
  bloodPressure: [
    { systolic: 112, diastolic: 60, heartRate: 77 },
    { systolic: 108, diastolic: 60, heartRate: 75 }
  ],
  glucose: [{ value: 7.7 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2024-12-31": {
  bloodPressure: [],
  glucose: [{ value: 7.5 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
// =======================
// January 2025
// =======================
"2025-01-01": {
  bloodPressure: [{ systolic: 108, diastolic: 60, heartRate: 77, note: "IHB" }],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-01-02": {
  bloodPressure: [],
  glucose: [{ value: 5.6 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-01-03": {
  bloodPressure: [
    { systolic: 123, diastolic: 65, heartRate: 87 },
    { systolic: 110, diastolic: 63, heartRate: 87 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-01-04": {
  bloodPressure: [],
  glucose: [{ value: 6.8 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-01-05": {
  bloodPressure: [{ systolic: 111, diastolic: 61, heartRate: 78 }],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-01-06": {
  bloodPressure: [
    { systolic: 106, diastolic: 59, heartRate: 80 },
    { systolic: 127, diastolic: 71, heartRate: 79 }
  ],
  glucose: [{ value: 6.1 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-01-07": {
  bloodPressure: [],
  glucose: [{ value: 7.3 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-01-08": {
  bloodPressure: [{ systolic: 123, diastolic: 68, heartRate: 79 }],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-01-09": {
  bloodPressure: [],
  glucose: [{ value: 4.9 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-01-10": {
  bloodPressure: [
    { systolic: 107, diastolic: 48, heartRate: 58 },
    { systolic: 94, diastolic: 50, heartRate: 78 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
}
"2025-01-11": {
  bloodPressure: [],
  glucose: [{ value: 4.5 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-01-13": {
  bloodPressure: [
    { systolic: 100, diastolic: 64, heartRate: 79 },
    { systolic: 106, diastolic: 57, heartRate: 79 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-01-14": {
  bloodPressure: [],
  glucose: [{ value: 4.9 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-01-15": {
  bloodPressure: [{ systolic: 110, diastolic: 64, heartRate: 79, note: "IHB" }],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
}
"2025-01-16": {
  bloodPressure: [],
  glucose: [{ value: 5.6 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-01-17": {
  bloodPressure: [
    { systolic: 108, diastolic: 58, heartRate: 73 },
    { systolic: 110, diastolic: 55, heartRate: 71 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-01-18": {
  bloodPressure: [],
  glucose: [{ value: 6 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-01-19": {
  bloodPressure: [{ systolic: 106, diastolic: 56, heartRate: 74 }],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-01-20": {
  bloodPressure: [
    { systolic: 112, diastolic: 60, heartRate: 71 },
    { systolic: 104, diastolic: 57, heartRate: 71 }
  ],
  glucose: [{ value: 6 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
}
"2025-01-21": {
  bloodPressure: [],
  glucose: [{ value: 6.8 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-01-22": {
  bloodPressure: [{ systolic: 124, diastolic: 71, heartRate: 79 }],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-01-23": {
  bloodPressure: [],
  glucose: [{ value: 6.4 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-01-24": {
  bloodPressure: [
    { systolic: 125, diastolic: 56, heartRate: 74 },
    { systolic: 110, diastolic: 68, heartRate: 73 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-01-25": {
  bloodPressure: [],
  glucose: [{ value: 4.8 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
}
"2025-01-26": {
  bloodPressure: [{ systolic: 145, diastolic: 73, heartRate: 78 }],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-01-27": {
  bloodPressure: [
    { systolic: 123, diastolic: 73, heartRate: 75 },
    { systolic: 117, diastolic: 69, heartRate: 73 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-01-28": {
  bloodPressure: [],
  glucose: [{ value: 5.8 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-01-29": {
  bloodPressure: [{ systolic: 139, diastolic: 69, heartRate: 70 }],
  glucose: [{ value: 6.6 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-01-30": {
  bloodPressure: [],
  glucose: [{ value: 5.6 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-01-31": {
  bloodPressure: [
    { systolic: 123, diastolic: 71, heartRate: 75 },
    { systolic: 123, diastolic: 75, heartRate: 73 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
}
