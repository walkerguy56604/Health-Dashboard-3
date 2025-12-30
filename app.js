// Example: assuming you already have a function to render daily summary
function renderDailySummary(date) {
  const dailySummaryOutput = document.getElementById('dailySummaryOutput');
  // Replace this with your real daily logs lookup
  const summary = dailyLogs[date] || {
    walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 'N/A'
  };

  dailySummaryOutput.innerHTML = `
    <h3>Daily Summary for ${date}</h3>
    <div>Walk Duration: ${summary.walk} min</div>
    <div>Treadmill Duration: ${summary.treadmill} min</div>
    <div>Strength Duration: ${summary.strength} reps</div>
    <div>Calories Burned: ${summary.calories}</div>
    <div>Average Heart Rate: ${summary.heartRate}</div>
  `;
}

// History list logic
const historyList = document.getElementById('historyList');
const datePicker = document.getElementById('datePicker');

datePicker.addEventListener('change', (e) => {
  const selectedDate = e.target.value;
  renderDailySummary(selectedDate);

  // Check if button already exists
  if (![...historyList.children].some(btn => btn.dataset.date === selectedDate)) {
    const btn = document.createElement('button');
    btn.textContent = selectedDate;
    btn.dataset.date = selectedDate;
    btn.addEventListener('click', () => renderDailySummary(selectedDate));
    historyList.prepend(btn); // newest on top
  }
});
