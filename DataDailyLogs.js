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
// =======================
// February 2025
// =======================
"2025-02-01": {
  bloodPressure: [],
  glucose: [{ value: 4.6 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-02-02": {
  bloodPressure: [{ systolic: 137, diastolic: 69, heartRate: 75 }],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-02-03": {
  bloodPressure: [
    { systolic: 126, diastolic: 71, heartRate: 73 },
    { systolic: 124, diastolic: 67, heartRate: 72 }
  ],
  glucose: [{ value: 5.9 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-02-04": {
  bloodPressure: [],
  glucose: [{ value: 6.5 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-02-05": {
  bloodPressure: [{ systolic: 128, diastolic: 70, heartRate: 71 }],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
// =======================
// February 2025 (continued)
// =======================
"2025-02-11": {
  bloodPressure: [],
  glucose: [{ value: 5 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-02-12": {
  bloodPressure: [{ systolic: 126, diastolic: 76, heartRate: 90 }],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-02-13": {
  bloodPressure: [],
  glucose: [{ value: 6.3 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-02-14": {
  bloodPressure: [
    { systolic: 124, diastolic: 67, heartRate: 73 },
    { systolic: 127, diastolic: 69, heartRate: 73 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-02-15": {
  bloodPressure: [],
  glucose: [{ value: 6.4 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
// =======================
// February 2025 (continued)
// =======================
"2025-02-16": {
  bloodPressure: [{ systolic: 124, diastolic: 73, heartRate: 79 }],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-02-17": {
  bloodPressure: [
    { systolic: 129, diastolic: 73, heartRate: 74 },
    { systolic: 98, diastolic: 69, heartRate: 72 }
  ],
  glucose: [{ value: 6.5 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-02-18": {
  bloodPressure: [],
  glucose: [{ value: 4.9 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-02-19": {
  bloodPressure: [{ systolic: 126, diastolic: 65, heartRate: 75 }],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-02-20": {
  bloodPressure: [],
  glucose: [{ value: 6.2 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
// =======================
// February 2025 (continued)
// =======================
"2025-02-21": {
  bloodPressure: [
    { systolic: 136, diastolic: 64, heartRate: 92 },
    { systolic: 123, diastolic: 60, heartRate: 87 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-02-22": {
  bloodPressure: [],
  glucose: [{ value: 9.2 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-02-24": {
  bloodPressure: [
    { systolic: 139, diastolic: 77, heartRate: 86 },
    { systolic: 140, diastolic: 77, heartRate: 85 }
  ],
  glucose: [{ value: 6.7 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-02-25": {
  bloodPressure: [],
  glucose: [{ value: 7 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-02-26": {
  bloodPressure: [{ systolic: 120, diastolic: 59, heartRate: 82 }],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-02-27": {
  bloodPressure: [],
  glucose: [{ value: 6.9 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-02-28": {
  bloodPressure: [
    { systolic: 124, diastolic: 71, heartRate: 86 },
    { systolic: 128, diastolic: 72, heartRate: 85 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
// =======================
// March 2025
// =======================
"2025-03-01": {
  bloodPressure: [],
  glucose: [{ value: 7.1 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-03-02": {
  bloodPressure: [{ systolic: 124, diastolic: 72, heartRate: 75 }],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-03-03": {
  bloodPressure: [
    { systolic: 122, diastolic: 60, heartRate: 71, note: "IHB" },
    { systolic: 124, diastolic: 66, heartRate: 67 }
  ],
  glucose: [{ value: 7 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-03-04": {
  bloodPressure: [{ systolic: 125, diastolic: 63, heartRate: 74 }],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-03-05": {
  bloodPressure: [],
  glucose: [{ value: 7 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
// =======================
// March 6–10, 2025
// =======================
"2025-03-06": {
  bloodPressure: [{ systolic: 132, diastolic: 64, heartRate: 66 }],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-03-07": {
  bloodPressure: [
    { systolic: 134, diastolic: 57, heartRate: 75 },
    { systolic: 132, diastolic: 74, heartRate: 73 }
  ],
  glucose: [{ value: 6.8 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-03-08": {
  bloodPressure: [],
  glucose: [{ value: 6.4 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-03-09": {
  bloodPressure: [{ systolic: 125, diastolic: 72, heartRate: 75 }],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-03-10": {
  bloodPressure: [
    { systolic: 132, diastolic: 69, heartRate: 74 },
    { systolic: 136, diastolic: 79, heartRate: 135, note: "IHB" }
  ],
  glucose: [{ value: 6.9 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
// =======================
// March 11–15, 2025
// =======================
"2025-03-11": {
  bloodPressure: [],
  glucose: [{ value: 6.9 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-03-12": {
  bloodPressure: [{ systolic: 127, diastolic: 55, heartRate: 79 }],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-03-13": {
  bloodPressure: [],
  glucose: [{ value: 6.5 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-03-14": {
  bloodPressure: [
    { systolic: 131, diastolic: 66, heartRate: 85 },
    { systolic: 120, diastolic: 57, heartRate: 83 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-03-15": {
  bloodPressure: [],
  glucose: [{ value: 6.1 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
// =======================
// March 16–20, 2025
// =======================
"2025-03-16": {
  bloodPressure: [{ systolic: 132, diastolic: 72, heartRate: 85 }],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-03-17": {
  bloodPressure: [
    { systolic: 118, diastolic: 68, heartRate: 77 },
    { systolic: 122, diastolic: 70, heartRate: 76 }
  ],
  glucose: [{ value: 6.7 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-03-18": {
  bloodPressure: [],
  glucose: [{ value: 5.9 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-03-19": {
  bloodPressure: [{ systolic: 132, diastolic: 67, heartRate: 81 }],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-03-20": {
  bloodPressure: [],
  glucose: [{ value: 5.4 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
// =======================
// March 21–25, 2025
// =======================
"2025-03-21": {
  bloodPressure: [
    { systolic: 117, diastolic: 55, heartRate: 75 },
    { systolic: 104, diastolic: 60, heartRate: 72 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-03-22": {
  bloodPressure: [],
  glucose: [{ value: 5.8 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-03-23": {
  bloodPressure: [{ systolic: 115, diastolic: 69, heartRate: 72 }],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-03-24": {
  bloodPressure: [
    { systolic: 127, diastolic: 70, heartRate: 79 },
    { systolic: 120, diastolic: 66, heartRate: 76 }
  ],
  glucose: [{ value: 6.7 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-03-25": {
  bloodPressure: [],
  glucose: [{ value: 5.8 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
// =======================
// March 26–31, 2025
// =======================
"2025-03-26": {
  bloodPressure: [{ systolic: 125, diastolic: 68, heartRate: 77 }],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-03-27": {
  bloodPressure: [],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-03-28": {
  bloodPressure: [
    { systolic: 120, diastolic: 70, heartRate: 72 },
    { systolic: 120, diastolic: 69, heartRate: 70 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-03-29": {
  bloodPressure: [],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-03-30": {
  bloodPressure: [],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-03-31": {
  bloodPressure: [
    { systolic: 136, diastolic: 67, heartRate: 79 },
    { systolic: 125, diastolic: 64, heartRate: 78 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
// =======================
// April 4–14, 2025
// =======================
"2025-04-04": {
  bloodPressure: [
    { systolic: 130, diastolic: 78, heartRate: 83 },
    { systolic: 124, diastolic: 76, heartRate: 82 }
  ],
  glucose: [{ value: 24.2 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-04-05": {
  bloodPressure: [],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-04-06": {
  bloodPressure: [],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-04-07": {
  bloodPressure: [
    { systolic: 140, diastolic: 68, heartRate: 76 },
    { systolic: 128, diastolic: 67, heartRate: 75 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-04-08": {
  bloodPressure: [],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-04-09": {
  bloodPressure: [],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-04-10": {
  bloodPressure: [],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-04-11": {
  bloodPressure: [
    { systolic: 128, diastolic: 73, heartRate: 78 },
    { systolic: 127, diastolic: 74, heartRate: 79 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-04-12": {
  bloodPressure: [],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-04-13": {
  bloodPressure: [],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-04-14": {
  bloodPressure: [
    { systolic: 114, diastolic: 62, heartRate: 74 },
    { systolic: 120, diastolic: 63, heartRate: 73 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
// =======================
// April 15–25, 2025
// =======================
"2025-04-15": { bloodPressure: [], glucose: [], walk:0, treadmill:0, strength:0, calories:0, heartRate:0 },
"2025-04-16": { bloodPressure: [], glucose: [], walk:0, treadmill:0, strength:0, calories:0, heartRate:0 },
"2025-04-17": { bloodPressure: [], glucose: [], walk:0, treadmill:0, strength:0, calories:0, heartRate:0 },
"2025-04-18": {
  bloodPressure: [
    { systolic: 122, diastolic: 60, heartRate: 77 },
    { systolic: 115, diastolic: 57, heartRate: 76 }
  ],
  glucose: [],
  walk:0, treadmill:0, strength:0, calories:0, heartRate:0
},
"2025-04-19": { bloodPressure: [], glucose: [], walk:0, treadmill:0, strength:0, calories:0, heartRate:0 },
"2025-04-20": {
  bloodPressure: [
    { systolic: 135, diastolic: 67, heartRate: 75 },
    { systolic: 135, diastolic: 71, heartRate: 73 }
  ],
  glucose: [],
  walk:0, treadmill:0, strength:0, calories:0, heartRate:0
},
"2025-04-21": { bloodPressure: [], glucose: [], walk:0, treadmill:0, strength:0, calories:0, heartRate:0 },
"2025-04-22": { bloodPressure: [], glucose: [], walk:0, treadmill:0, strength:0, calories:0, heartRate:0 },
"2025-04-23": {
  bloodPressure: [
    { systolic: 130, diastolic: 90, heartRate: 77 }
  ],
  glucose: [],
  walk:0, treadmill:0, strength:0, calories:0, heartRate:0
},
"2025-04-24": {
  bloodPressure: [
    { systolic: 120, diastolic: 65, heartRate: 82 },
    { systolic: 119, diastolic: 64, heartRate: 79 }
  ],
  glucose: [],
  walk:0, treadmill:0, strength:0, calories:0, heartRate:0
},
"2025-04-25": {
  bloodPressure: [
    { systolic: 116, diastolic: 60, heartRate: 74 },
    { systolic: 124, diastolic: 62, heartRate: 80 } // the 84 you mentioned, I took as heart rate for last entry
  ],
  glucose: [],
  walk:0, treadmill:0, strength:0, calories:0, heartRate:0
},
// =======================
// April 26–30, 2025
// =======================
"2025-04-26": { bloodPressure: [], glucose: [], walk:0, treadmill:0, strength:0, calories:0, heartRate:0 },
"2025-04-27": {
  bloodPressure: [
    { systolic: 124, diastolic: 63, heartRate: 71 }
  ],
  glucose: [],
  walk:0, treadmill:0, strength:0, calories:0, heartRate:0
},
"2025-04-28": {
  bloodPressure: [
    { systolic: 117, diastolic: 67, heartRate: 71 },
    { systolic: 125, diastolic: 69, heartRate: 69 }
  ],
  glucose: [],
  walk:0, treadmill:0, strength:0, calories:0, heartRate:0
},
"2025-04-29": {
  bloodPressure: [],
  glucose: [{ value: 6.3 }],
  walk:0, treadmill:0, strength:0, calories:0, heartRate:0
},
"2025-04-30": {
  bloodPressure: [
    { systolic: 132, diastolic: 72, heartRate: 73 },
    { systolic: 128, diastolic: 73, heartRate: 73 }
  ],
  glucose: [],
  walk:0, treadmill:0, strength:0, calories:0, heartRate:0
},
// =======================
// May 2–5, 2025
// =======================
"2025-05-02": {
  bloodPressure: [
    { systolic: 133, diastolic: 68, heartRate: 81 },
    { systolic: 131, diastolic: 70, heartRate: 90 },
    { systolic: 70, diastolic: 80, heartRate: 0 } // last entry seems incomplete, marking HR as 0
  ],
  glucose: [],
  walk:0, treadmill:0, strength:0, calories:0, heartRate:0
},
"2025-05-03": {
  bloodPressure: [],
  glucose: [{ value: 6.5 }],
  walk:0, treadmill:0, strength:0, calories:0, heartRate:0
},
"2025-05-04": {
  bloodPressure: [
    { systolic: 132, diastolic: 62, heartRate: 74 }
  ],
  glucose: [],
  walk:0, treadmill:0, strength:0, calories:0, heartRate:0
},
"2025-05-05": {
  bloodPressure: [
    { systolic: 143, diastolic: 69, heartRate: 80 },
    { systolic: 130, diastolic: 78, heartRate: 80, note: "IHB" }
  ],
  glucose: [{ value: 7 }],
  walk:0, treadmill:0, strength:0, calories:0, heartRate:0
},
// =======================
// May 6–14, 2025
// =======================
"2025-05-06": {
  bloodPressure: [],
  glucose: [],
  walk:0, treadmill:0, strength:0, calories:0, heartRate:0
},
"2025-05-07": {
  bloodPressure: [
    { systolic: 124, diastolic: 56, heartRate: 79 }
  ],
  glucose: [],
  walk:0, treadmill:0, strength:0, calories:0, heartRate:0
},
"2025-05-09": {
  bloodPressure: [
    { systolic: 129, diastolic: 64, heartRate: 78 },
    { systolic: 125, diastolic: 64, heartRate: 79 }
  ],
  glucose: [{ value: 7.2 }],
  walk:0, treadmill:0, strength:0, calories:0, heartRate:0
},
"2025-05-11": {
  bloodPressure: [
    { systolic: 114, diastolic: 63, heartRate: 75, note: "IHB" }
  ],
  glucose: [],
  walk:0, treadmill:0, strength:0, calories:0, heartRate:0
},
"2025-05-12": {
  bloodPressure: [
    { systolic: 122, diastolic: 70, heartRate: 71 },
    { systolic: 120, diastolic: 63, heartRate: 69 }
  ],
  glucose: [{ value: 5.2 }],
  walk:0, treadmill:0, strength:0, calories:0, heartRate:0
},
"2025-05-14": {
  bloodPressure: [
    { systolic: 123, diastolic: 71, heartRate: 76 }
  ],
  glucose: [],
  walk:0, treadmill:0, strength:0, calories:0, heartRate:0
},
// =======================
// May 15–23, 2025
// =======================
"2025-05-15": {
  bloodPressure: [],
  glucose: [],
  walk:0, treadmill:0, strength:0, calories:0, heartRate:0
},
"2025-05-16": {
  bloodPressure: [
    { systolic: 121, diastolic: 63, heartRate: 74 },
    { systolic: 124, diastolic: 65, heartRate: 73 }
  ],
  glucose: [{ value: 5.5 }],
  walk:0, treadmill:0, strength:0, calories:0, heartRate:0
},
"2025-05-18": {
  bloodPressure: [
    { systolic: 127, diastolic: 71, heartRate: 75 }
  ],
  glucose: [],
  walk:0, treadmill:0, strength:0, calories:0, heartRate:0
},
"2025-05-19": {
  bloodPressure: [
    { systolic: 129, diastolic: 69, heartRate: 82 },
    { systolic: 129, diastolic: 65, heartRate: 77 }
  ],
  glucose: [{ value: 5.8 }],
  walk:0, treadmill:0, strength:0, calories:0, heartRate:0
},
"2025-05-21": {
  bloodPressure: [
    { systolic: 109, diastolic: 58, heartRate: 76 }
  ],
  glucose: [],
  walk:0, treadmill:0, strength:0, calories:0, heartRate:0
},
"2025-05-23": {
  bloodPressure: [
    { systolic: 120, diastolic: 64, heartRate: 70 },
    { systolic: 121, diastolic: 65, heartRate: 69 }
  ],
  glucose: [{ value: 5.4 }],
  walk:0, treadmill:0, strength:0, calories:0, heartRate:0
},
// =======================
// May 25–30, 2025
// =======================
"2025-05-25": {
  bloodPressure: [
    { systolic: 125, diastolic: 68, heartRate: 73 }
  ],
  glucose: [],
  walk:0, treadmill:0, strength:0, calories:0, heartRate:0
},
"2025-05-26": {
  bloodPressure: [
    { systolic: 128, diastolic: 68, heartRate: 74 },
    { systolic: 128, diastolic: 68, heartRate: 73 }
  ],
  glucose: [{ value: 6.7 }],
  walk:0, treadmill:0, strength:0, calories:0, heartRate:0
},
"2025-05-28": {
  bloodPressure: [
    { systolic: 127, diastolic: 63, heartRate: 75 }
  ],
  glucose: [],
  walk:0, treadmill:0, strength:0, calories:0, heartRate:0
},
"2025-05-30": {
  bloodPressure: [
    { systolic: 130, diastolic: 61, heartRate: 71 },
    { systolic: 125, diastolic: 64, heartRate: 71 }
  ],
  glucose: [{ value: 5.7 }],
  walk:0, treadmill:0, strength:0, calories:0, heartRate:0
},
"2025-06-01": {
  bloodPressure: [
    { systolic: 112, diastolic: 58, heartRate: 71 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-06-02": {
  bloodPressure: [
    { systolic: 143, diastolic: 70, heartRate: 76 },
    { systolic: 137, diastolic: 73, heartRate: 75 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-06-04": {
  bloodPressure: [
    { systolic: 119, diastolic: 63, heartRate: 79 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-06-06": {
  bloodPressure: [
    { systolic: 120, diastolic: 69, heartRate: 88, note: "IHB" },
    { systolic: 121, diastolic: 66, heartRate: 86 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
}"2025-06-09": {
  bloodPressure: [
    { systolic: 130, diastolic: 70, heartRate: 75 },
    { systolic: 170, diastolic: 69, heartRate: 74 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-06-11": {
  bloodPressure: [
    { systolic: 105, diastolic: 55, heartRate: 78 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-06-13": {
  bloodPressure: [
    { systolic: 124, diastolic: 54, heartRate: 81 },
    { systolic: 122, diastolic: 61, heartRate: 78 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-06-16": {
  bloodPressure: [
    { systolic: 109, diastolic: 64, heartRate: 76 },
    { systolic: 118, diastolic: 65, heartRate: 73 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
}
"2025-06-18": {
  bloodPressure: [
    { systolic: 181, diastolic: 118, heartRate: 61, note: 70 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-06-20": {
  bloodPressure: [
    { systolic: 128, diastolic: 69, heartRate: 71 },
    { systolic: 132, diastolic: 73, heartRate: 72 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-06-21": {
  bloodPressure: [
    { systolic: 119, diastolic: 68, heartRate: 72 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-06-24": {
  bloodPressure: [
    { systolic: 125, diastolic: 67, heartRate: 70 },
    { systolic: 116, diastolic: 63, heartRate: 67 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-06-26": {
  bloodPressure: [
    { systolic: 111, diastolic: 60, heartRate: 75 },
    { systolic: 119, diastolic: 58, heartRate: 73 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
}
"2025-07-01": {
  bloodPressure: [
    { systolic: 127, diastolic: 64, heartRate: 73, note: "IHB" },
    { systolic: 127, diastolic: 62, heartRate: 71 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-07-03": {
  bloodPressure: [
    { systolic: 103, diastolic: 68, heartRate: 74, note: "IHB" },
    { systolic: 118, diastolic: 67, heartRate: 73 }
  ],
  glucose: [
    { value: 7.5 }
  ],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-07-08": {
  bloodPressure: [
    { systolic: 112, diastolic: 62, heartRate: 85 },
    { systolic: 112, diastolic: 59, heartRate: 84 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-07-10": {
  bloodPressure: [
    { systolic: 119, diastolic: 59, heartRate: 78 },
    { systolic: 117, diastolic: 61, heartRate: 75 }
  ],
  glucose: [
    { value: 5.4 }
  ],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-07-13": {
  bloodPressure: [
    { systolic: 111, diastolic: 63, heartRate: 81 }
  ],
  glucose: [
    { value: 6.2 }
  ],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
}
"2025-07-15": {
  bloodPressure: [
    { systolic: 133, diastolic: 69, heartRate: 83 },
    { systolic: 128, diastolic: 67, heartRate: 81 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-07-17": {
  bloodPressure: [
    { systolic: 103, diastolic: 45, heartRate: 72, note: "IHB" },
    { systolic: 111, diastolic: 53, heartRate: 70 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-07-20": {
  bloodPressure: [
    { systolic: 117, diastolic: 57, heartRate: 81, note: "IHB" },
    { systolic: 120, diastolic: 67, heartRate: 80 }
  ],
  glucose: [
    { value: 6.9 }
  ],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-07-22": {
  bloodPressure: [
    { systolic: 130, diastolic: 71, heartRate: 78 },
    { systolic: 132, diastolic: 68, heartRate: 74 }
  ],
  glucose: [
    { value: 6.3 }
  ],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-07-23": {
  bloodPressure: [
    { systolic: 132, diastolic: 71, heartRate: 83 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-07-24": {
  bloodPressure: [
    { systolic: 127, diastolic: 63, heartRate: 76 }
  ],
  glucose: [],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-07-27": {
  bloodPressure: [
    { systolic: 124, diastolic: 57, heartRate: 77 },
    { systolic: 122, diastolic: 64, heartRate: 77 }
  ],
  glucose: [
    { value: 5.9 }
  ],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
},
"2025-07-31": {
  bloodPressure: [
    { systolic: 128, diastolic: 67, heartRate: 76 },
    { systolic: 118, diastolic: 60, heartRate: 71 }
  ],
  glucose: [
    { value: 6.0 }
  ],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0
}
"2026-01-01": {
  bloodPressure: [
    { systolic: 117, diastolic: 69, heartRate: 88, note: "Early morning, low hypertension" },
    { systolic: 135, diastolic: 71, heartRate: 88, note: "5 min after treadmill, high hypertension" },
    { systolic: 128, diastolic: 71, heartRate: 93, note: "5 min after afternoon treadmill, medium hypertension" }
  ],
  glucose: [
    { value: 6.4, note: "Early morning test" }
  ],
  walk: 45,        // Siri + non-Siri walks combined
  treadmill: 20,   // Total treadmill minutes (AM + PM)
  strength: 14,    // Total strength training minutes
  calories: 22,    // Total calories from treadmill + strength
  heartRate: 88    // Average heart rate (can be adjusted if you want)
}
  "2025-08-01": {
    bloodPressure: [
      { systolic: 129, diastolic: 68, heartRate: 74 },
      { systolic: 122, diastolic: 54, heartRate: 71 }
    ],
    glucose: [],
    walk: 0,
    treadmill: 0,
    strength: 0,
    calories: 0,
    heartRate: 0
  },

  "2025-08-04": {
    bloodPressure: [
      { systolic: 115, diastolic: 77, heartRate: 75 },
      { systolic: 111, diastolic: 73, heartRate: 75 }
    ],
    glucose: [],
    walk: 0,
    treadmill: 0,
    strength: 0,
    calories: 0,
    heartRate: 0
  },

  "2025-08-06": {
    bloodPressure: [
      { systolic: 124, diastolic: 50, heartRate: 73 }
    ],
    glucose: [],
    walk: 0,
    treadmill: 0,
    strength: 0,
    calories: 0,
    heartRate: 0
  },

  "2025-08-08": {
    bloodPressure: [
      { systolic: 126, diastolic: 63, heartRate: 76 },
      { systolic: 123, diastolic: 66, heartRate: 73 }
    ],
    glucose: [],
    walk: 0,
    treadmill: 0,
    strength: 0,
    calories: 0,
    heartRate: 0
  },

  "2025-08-10": {
    bloodPressure: [
      { systolic: 124, diastolic: 71, heartRate: 74 }
    ],
    glucose: [],
    walk: 0,
    treadmill: 0,
    strength: 0,
    calories: 0,
    heartRate: 0
  },
"2025-08-09": {
  bloodPressure: [
    { systolic: 124, diastolic: 64, heartRate: 83, note: "IHB" }
  ],
  glucose: [{ value: 5.4 }],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-08-10": {
  bloodPressure: [
    { systolic: 124, diastolic: 71, heartRate: 0 }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-08-11": {
  bloodPressure: [
    { systolic: 140, diastolic: 71, heartRate: 86 },
    { systolic: 124, diastolic: 74, heartRate: 86 }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-08-15": {
  bloodPressure: [
    { systolic: 115, diastolic: 60, heartRate: 79 },
    { systolic: 109, diastolic: 49, heartRate: 75, note: "IHB" }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-08-17": {
  bloodPressure: [
    { systolic: 112, diastolic: 60, heartRate: 91 }
  ],
  glucose: [{ value: 7.9 }],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-08-18": {
  bloodPressure: [
    { systolic: 129, diastolic: 69, heartRate: 86, note: "IHB" },
    { systolic: 121, diastolic: 66, heartRate: 80 }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-08-20": {
  bloodPressure: [
    { systolic: 127, diastolic: 71, heartRate: 79 },
    { systolic: 123, diastolic: 72, heartRate: 76 }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
}
"2025-08-22": {
  bloodPressure: [
    { systolic: 145, diastolic: 65, heartRate: 77 },
    { systolic: 130, diastolic: 62, heartRate: 74 }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-08-25": {
  bloodPressure: [
    { systolic: 126, diastolic: 70, heartRate: 73 },
    { systolic: 124, diastolic: 67, heartRate: 73 }
  ],
  glucose: [{ value: 6.6 }],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-08-27": {
  bloodPressure: [
    { systolic: 128, diastolic: 66, heartRate: 76 }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-08-29": {
  bloodPressure: [
    { systolic: 139, diastolic: 72, heartRate: 83 },
    { systolic: 129, diastolic: 61, heartRate: 79 }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-08-31": {
  bloodPressure: [
    { systolic: 130, diastolic: 63, heartRate: 75 }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
}
"2025-09-01": {
  bloodPressure: [
    { systolic: 140, diastolic: null, heartRate: 67 }, // IHB, diastolic uncertain
    { systolic: 128, diastolic: 73, heartRate: 69 }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-09-03": {
  bloodPressure: [
    { systolic: 124, diastolic: 67, heartRate: 80 }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-09-05": {
  bloodPressure: [
    { systolic: 138, diastolic: 74, heartRate: 78 },
    { systolic: 135, diastolic: 76, heartRate: 75 }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-09-07": {
  bloodPressure: [
    { systolic: 153, diastolic: 73, heartRate: 91 }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-09-08": {
  bloodPressure: [
    { systolic: 129, diastolic: 67, heartRate: 82 },
    { systolic: 130, diastolic: 82, heartRate: 87 }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
}
"2025-09-18": {
  bloodPressure: [],
  glucose: [{ value: 6.5 }],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-09-20": {
  bloodPressure: [],
  glucose: [{ value: 6.5 }],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-09-21": {
  bloodPressure: [
    { systolic: 128, diastolic: 66, heartRate: 83 }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-09-22": {
  bloodPressure: [
    { systolic: 136, diastolic: 64, heartRate: 79 },
    { systolic: 129, diastolic: 64, heartRate: 82 }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0,
  steps: [86, 75]  // Adding steps here
},
"2025-09-26": {
  bloodPressure: [
    { systolic: 107, diastolic: 71, heartRate: 78, IHB: true },
    { systolic: 122, diastolic: 65, heartRate: 74 }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0,
  steps: [8500]
},
"2025-09-27": {
  bloodPressure: [],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0,
  steps: [6750]
},
"2025-09-28": {
  bloodPressure: [
    { systolic: 167, diastolic: 74, heartRate: 79 }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0,
  steps: [7067, 50]  // Adding steps
},
"2025-09-29": {
  bloodPressure: [
    { systolic: 138, diastolic: 73, heartRate: 80 },
    { systolic: 140, diastolic: 69, heartRate: 79 }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0,
  steps: [6400]
}
"2025-10-01": {
  bloodPressure: [
    { systolic: 120, diastolic: 65, heartRate: 81, IHB: true }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0,
  steps: [7500]
},
"2025-10-03": {
  bloodPressure: [
    { systolic: 129, diastolic: 63, heartRate: 87 },
    { systolic: 118, diastolic: 65, heartRate: 85 }
  ],
  glucose: [{ value: 6.6 }],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0,
  steps: [7520]
},
"2025-10-05": {
  bloodPressure: [
    { systolic: 116, diastolic: 54, heartRate: 78, IHB: true }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0,
  steps: [6284]
},
"2025-10-06": {
  bloodPressure: [
    { systolic: 124, diastolic: 62, heartRate: 79 },
    { systolic: 130, diastolic: 70, heartRate: 85 }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0,
  steps: [7500]
},
"2025-10-08": {
  bloodPressure: [
    { systolic: 124, diastolic: 71, heartRate: 86 }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0,
  steps: [79]
},
"2025-10-09": {
  bloodPressure: [],
  glucose: [{ value: 6.4 }],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0,
  steps: [6480]
}
"2025-10-10": {
  bloodPressure: [
    { systolic: 132, diastolic: 72, heartRate: 90 },
    { systolic: 132, diastolic: 72, heartRate: 89 }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0,
  steps: [7580]
},
"2025-10-12": {
  bloodPressure: [
    { systolic: 120, diastolic: 63, heartRate: 91 }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0,
  steps: [8250]
},
"2025-10-13": {
  bloodPressure: [
    { systolic: 116, diastolic: 67, heartRate: 96 },
    { systolic: 120, diastolic: 66, heartRate: 98 }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0,
  steps: [7850]
},
"2025-10-15": {
  bloodPressure: [
    { systolic: 119, diastolic: 64, heartRate: 87 }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0,
  steps: [8000]
},
"2025-10-16": {
  bloodPressure: [],
  glucose: [{ value: 7.4 }],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0,
  steps: []
}
"2025-10-17": {
  bloodPressure: [
    { systolic: 120, diastolic: 64, heartRate: 76 },
    { systolic: 119, diastolic: 62, heartRate: 73 }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-10-19": {
  bloodPressure: [
    { systolic: 125, diastolic: 65, heartRate: 71 }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-10-20": {
  bloodPressure: [
    { systolic: 119, diastolic: 61, heartRate: 71 },
    { systolic: 120, diastolic: 65, heartRate: 70 }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-10-22": {
  bloodPressure: [
    { systolic: 108, diastolic: 63, heartRate: 77 }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-10-24": {
  bloodPressure: [
    { systolic: 131, diastolic: 47, heartRate: 75 },
    { systolic: 128, diastolic: 66, heartRate: 70 }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-10-26": {
  bloodPressure: [
    { systolic: 133, diastolic: 71, heartRate: 82 }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-10-27": {
  bloodPressure: [
    { systolic: 127, diastolic: 66, heartRate: 79 },
    { systolic: 131, diastolic: 70, heartRate: 86 }
  ],
  glucose: [{ value: 7.4 }],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-10-29": {
  bloodPressure: [
    { systolic: 102, diastolic: 62, heartRate: 75, IHB: true, hypertension: "Low" }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-10-31": {
  bloodPressure: [
    { systolic: 129, diastolic: 73, heartRate: 77, hypertension: "Low" },
    { systolic: 128, diastolic: 70, heartRate: 76, hypertension: "Low" }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
}
"2025-11-02": {
  bloodPressure: [
    { systolic: 131, diastolic: 65, heartRate: 85, hypertension: "Medium" }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-11-03": {
  bloodPressure: [
    { systolic: 116, diastolic: 61, heartRate: 75, hypertension: "Medium" },
    { systolic: 120, diastolic: 62, heartRate: 76, hypertension: "Medium" }
  ],
  glucose: [{ value: 5.5 }],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-11-05": {
  bloodPressure: [
    { systolic: 124, diastolic: 63, heartRate: 76, hypertension: "Low" }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-11-06": {
  bloodPressure: [
    { systolic: 124, diastolic: 68, heartRate: 95, hypertension: "Medium" }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-11-07": {
  bloodPressure: [
    { systolic: 124, diastolic: 67, heartRate: 88, hypertension: "Medium" },
    { systolic: 119, diastolic: 66, heartRate: 88, hypertension: "Low" },
    { systolic: 120, diastolic: 69, heartRate: 94, hypertension: "Medium" }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-11-09": {
  bloodPressure: [
    { systolic: 133, diastolic: 66, heartRate: 81, hypertension: "Medium" },
    { systolic: 122, diastolic: 71, heartRate: 96, hypertension: "Low" }
  ],
  glucose: [{ value: 6.5 }],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-11-10": {
  bloodPressure: [
    { systolic: 128, diastolic: 70, heartRate: 88, hypertension: "Low" },
    { systolic: 132, diastolic: 72, heartRate: 89, hypertension: "Medium" }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
}
"2025-11-12": {
  bloodPressure: [
    { systolic: 126, diastolic: 68, heartRate: 86, hypertension: "Low" }
  ],
  glucose: [{ value: 7.7 }],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-11-14": {
  bloodPressure: [
    { systolic: 121, diastolic: 65, heartRate: 88, hypertension: "Low" },
    { systolic: 122, diastolic: 70, heartRate: 81, hypertension: "Low" }
  ],
  glucose: [{ value: 7 }],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-11-17": {
  bloodPressure: [
    { systolic: 116, diastolic: 65, heartRate: 84, hypertension: "Low" },
    { systolic: 120, diastolic: 67, heartRate: 84, hypertension: "Medium" }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-11-19": {
  bloodPressure: [
    { systolic: 124, diastolic: 65, heartRate: 87, hypertension: "Low" }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-11-21": {
  bloodPressure: [
    { systolic: 124, diastolic: 66, heartRate: 84, hypertension: "Medium" },
    { systolic: 122, diastolic: 67, heartRate: 76, hypertension: "Medium" }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-11-24": {
  bloodPressure: [
    { systolic: 124, diastolic: 67, heartRate: 77, hypertension: "Medium" },
    { systolic: 127, diastolic: 64, heartRate: 77, hypertension: "Medium" }
  ],
  glucose: [{ value: 6.1 }],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-11-26": {
  bloodPressure: [
    { systolic: 119, diastolic: 66, heartRate: 77, hypertension: "Low" }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-11-28": {
  bloodPressure: [
    { systolic: 120, diastolic: 67, heartRate: 83, hypertension: "Low" },
    { systolic: 130, diastolic: 78, heartRate: 83, hypertension: "High" }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-11-30": {
  bloodPressure: [
    { systolic: 123, diastolic: 67, heartRate: 77, hypertension: "Medium" }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
}
"2025-12-10": {
  bloodPressure: [
    { systolic: 124, diastolic: 64, heartRate: 91, hypertension: "Medium" },
    { systolic: 125, diastolic: 62, heartRate: 91, hypertension: "Medium" }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-12-12": {
  bloodPressure: [
    { systolic: 127, diastolic: 63, heartRate: 76, hypertension: "Medium" },
    { systolic: 114, diastolic: 55, heartRate: 80, hypertension: "Low" }
  ],
  glucose: [{ value: 8.4 }],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-12-15": {
  bloodPressure: [
    { systolic: 130, diastolic: 68, heartRate: 89, hypertension: "Medium" },
    { systolic: 135, diastolic: 68, heartRate: 87, hypertension: "Medium" }
  ],
  glucose: [{ value: 7.4 }],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-12-17": {
  bloodPressure: [
    { systolic: 132, diastolic: 68, heartRate: 86, hypertension: "Medium" }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-12-19": {
  bloodPressure: [
    { systolic: 120, diastolic: 63, heartRate: 85, hypertension: "Medium" },
    { systolic: 116, diastolic: 68, heartRate: 85, hypertension: "Low", IHB: true },
    { systolic: 118, diastolic: 71, heartRate: 87, hypertension: "Low" }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-12-21": {
  bloodPressure: [
    { systolic: 128, diastolic: 69, heartRate: 84, hypertension: "Medium" }
  ],
  glucose: [{ value: 7.9 }],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-12-22": {
  bloodPressure: [
    { systolic: 123, diastolic: 65, heartRate: 82, hypertension: "Medium" },
    { systolic: 122, diastolic: 60, heartRate: 81, hypertension: "Medium" }
  ],
  glucose: [{ value: 7.2 }],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
}
"2025-12-23": {
  bloodPressure: [],
  glucose: [],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-12-24": {
  bloodPressure: [
    { systolic: 123, diastolic: 62, heartRate: 79, hypertension: "Medium" }
  ],
  glucose: [{ value: 5.8 }],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-12-27": {
  bloodPressure: [
    { systolic: 124, diastolic: 66, heartRate: 80, hypertension: "Medium" },
    { systolic: 117, diastolic: 66, heartRate: 81, hypertension: "Low" }
  ],
  glucose: [{ value: 4.4 }],
  walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0
},
"2025-12-28": {
  bloodPressure: [
    { systolic: 121, diastolic: 69, heartRate: 85, hypertension: "Medium", IHB: true },
    { systolic: 133, diastolic: 71, heartRate: 88, hypertension: "High" },
    { systolic: 129, diastolic: 74, heartRate: 89, hypertension: "Medium" },
    { systolic: 136, diastolic: 70, heartRate: 94, hypertension: "High" },
    { systolic: 121, diastolic: 73, heartRate: 96, hypertension: "Medium" },
    { systolic: 114, diastolic: 59, heartRate: 94, hypertension: "Low" },
    { systolic: 135, diastolic: 70, heartRate: 94, hypertension: "High" },
    { systolic: 120, diastolic: 63, heartRate: 95, hypertension: "Medium" }
  ],
  glucose: [],
  walk: 30, treadmill: 0, strength: 30, calories: 0, heartRate: 0
},
"2025-12-29": {
  bloodPressure: [
    { systolic: 129, diastolic: 73, heartRate: 84, hypertension: "Medium" },
    { systolic: 127, diastolic: 70, heartRate: 84, hypertension: "Medium" },
    { systolic: 122, diastolic: 74, heartRate: 89, hypertension: "Medium" },
    { systolic: 128, diastolic: 67, heartRate: 94, hypertension: "Medium", IHB: true },
    { systolic: 130, diastolic: 71, heartRate: 94, hypertension: "High" },
    { systolic: 128, diastolic: 76, heartRate: 94, hypertension: "Medium" },
    { systolic: 122, diastolic: 67, heartRate: 90, hypertension: "Medium" }
  ],
  glucose: [],
  walk: 30, treadmill: 0, strength: 45, calories: 0, heartRate: 0
},
"2025-12-30": {
  bloodPressure: [
    { systolic: 141, diastolic: 74, heartRate: 89, hypertension: "High" },
    { systolic: 127, diastolic: 67, heartRate: 92, hypertension: "Medium" }
  ],
  glucose: [],
  walk: 0, treadmill: 0, strength: 30, calories: 0, heartRate: 0
},
"2025-12-31": {
  bloodPressure: [
    { systolic: 130, diastolic: 69, heartRate: 80, hypertension: "Medium" },
    { systolic: 121, diastolic: 67, heartRate: 80, hypertension: "Medium" }
  ],
  glucose: [{ value: 5.4 }],
  walk: 0, treadmill: 0, strength: 30, calories: 0, heartRate: 0
}
"2026-01-01": {
  bloodPressure: [
    { systolic: 117, diastolic: 69, heartRate: 88, time: "08:55", event: "Strength Training", hypertension: "L" },
    { systolic: 135, diastolic: 71, heartRate: 88, time: "10:50", event: "Treadmill", hypertension: "H" },
    { systolic: 126, diastolic: 63, heartRate: 92, time: "12:05", event: "Strength Training", hypertension: "M" },
    { systolic: 132, diastolic: 74, heartRate: 89, time: "16:05", event: "Strength Training", hypertension: "H" },
    { systolic: 128, diastolic: 71, heartRate: 93, time: "17:30", event: "Treadmill", hypertension: "M" },
    { systolic: 129, diastolic: 76, heartRate: 88, time: "20:00", event: "Strength Training", hypertension: "M" }
  ],
  walk: [
    { start: "08:30", end: "08:35" },
    { start: "09:25", end: "09:30" },
    { start: "09:55", end: "10:00" }
  ],
  treadmill: [
    { start: "10:35", end: "10:45", speed: 1.4, distance: 0.24, avgHR: 111, maxHR: 182, calories: 11 },
    { start: "17:15", end: "17:25", speed: 1.4, distance: 0.24, avgHR: 103, maxHR: 111, calories: 11 }
  ],
  strength: [
    { start: "08:55", end: "09:09" },
    { start: "11:46", end: "12:00" },
    { start: "16:00", end: "16:??" }, // you can fill exact end time if you want
    { start: "20:00", end: "??:??" }  // optional, fill later
  ]
}
