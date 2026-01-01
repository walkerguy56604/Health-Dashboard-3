// =======================
// Import Daily Logs
// =======================
import { dailyLogs } from './data/dailyLogs.js';

// =======================
// Update Today's Entries & Create History Button
// =======================

// Make sure the date exists
const today = "2025-12-31";
if (!dailyLogs[today]) {
  dailyLogs[today] = { bloodPressure: [], glucose: [], walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0 };
}

// Add all BP readings
dailyLogs[today].bloodPressure.push(
  { systolic: 130, diastolic: 69, heartRate: 80 }, // first reading
  { systolic: 121, diastolic: 67, heartRate: 80 }, // second reading
  { systolic: 144, diastolic: 75, heartRate: 87 }, // post-strength
  { systolic: 137, diastolic: 72, heartRate: 86 }, // latest post-strength
  { systolic: 125, diastolic: 59, heartRate: 88 }  // post-walk/treadmill
);

// Add glucose reading
dailyLogs[today].glucose.push({ value: 5.4 });

// Pre-create Today History Button
const history = document.getElementById("historyList");
(function createTodayButton() {
  if (![...history.children].some(b => b.dataset.date === today)) {
    const btn = document.createElement("button");
    btn.textContent = today;
    btn.dataset.date = today;
    btn.onclick = () => {
      renderDailySummary(today);
      renderBPTrends(today, 7);
    };
    history.prepend(btn);
  }
})();
