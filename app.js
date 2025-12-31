// --- Calculate 7-day rolling average ---
function rollingAverage(date, metric) {
  const dates = Object.keys(dailyLogs).sort(); // chronological order
  const idx = dates.indexOf(date);
  if (idx < 0) return null;

  const slice = dates.slice(Math.max(0, idx - 6), idx + 1); // last 7 days
  let sum = 0, count = 0;

  slice.forEach(d => {
    if (dailyLogs[d][metric] && dailyLogs[d][metric].length) {
      dailyLogs[d][metric].forEach(entry => {
        if (metric === "bloodPressure") sum += entry.systolic; 
        else if (metric === "glucose") sum += (typeof entry === "object" ? entry.value : entry);
        count++;
      });
    }
  });

  return count ? (sum / count).toFixed(1) : null;
}
