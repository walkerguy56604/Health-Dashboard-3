document.addEventListener('DOMContentLoaded', () => {
  // Your existing code goes here
  // For example:
  const btn = document.getElementById('showDailySummaryBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      const today = '2025_12_30';
      loadDailySummary(today);
    });
  }
});

// === Health Dashboard 3: Core App Skeleton ===

// Simple in-memory store (later can save to JSON/CSV)
const inMemoryStore = {
  walks: [],
  treadmill: [],
  strength: []
};

// Load daily summary from Logs
async function loadDailySummary(date) {
  try {
    // Button click event to load today's summary
document.getElementById('showDailySummaryBtn').addEventListener('click', () => {
  // Use today's date (update format if needed)
  const today = '2025_12_30';
  loadDailySummary(today);
});
    const response = await fetch(`Logs/daily_${date}.json`);
    const data = await response.json();
    
    const summary = data[0]; // Single entry per day for now

    // Update HTML placeholders
    document.getElementById('walkDuration').textContent = `${summary.walkDuration} min (${summary.walkDistance} km)`;
    document.getElementById('treadmillDuration').textContent = `${summary.treadmillDuration} min (${summary.treadmillDistance} km)`;
    document.getElementById('strengthDuration').textContent = `${summary.strengthDuration} min (${summary.strengthExercises} exercises)`;
    document.getElementById('calories').textContent = summary.calories;
    document.getElementById('avgHeartRate').textContent = summary.avgHeartRate || 'N/A';

    // Store in-memory if needed
    inMemoryStore.walks.push({ date, duration: summary.walkDuration, distance: summary.walkDistance });
    inMemoryStore.treadmill.push({ date, duration: summary.treadmillDuration, distance: summary.treadmillDistance });
    inMemoryStore.strength.push({ date, duration: summary.strengthDuration, exercises: summary.strengthExercises });
    
    console.log(`Loaded daily summary for ${date}`);
  } catch (err) {
    console.error('Error loading daily summary:', err);
  }
}

// Example: load today (your first log)
loadDailySummary('2025_12_30');

// You can add more utility functions later:
// addWalkEntry(date, duration, distance)
// addTreadmillEntry(date, duration, distance)
// addStrengthEntry(date, duration, exercises)
