"2025-12-31": {
  bloodPressure: [
    { systolic: 130, diastolic: 69, heartRate: 80 },
    { systolic: 121, diastolic: 67, heartRate: 80 }
  ],
  glucose: [{ value: 5.4 }],
  walk: 0,
  treadmill: 0,
  strength: 0,
  calories: 0,
  heartRate: 0 // will update later if needed
}
// Add the after-strength BP to today's entry
dailyLogs["2025-12-31"].bloodPressure.push({ systolic: 144, diastolic: 75, heartRate: 87 });
