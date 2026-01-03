const datePicker = document.getElementById("datePicker");

datePicker.value = "2026-01-03";

datePicker.addEventListener("change", (e) => {
  const selectedDate = e.target.value;
  const out = document.getElementById("dailySummaryOutput");

  if (!dailyLogs[selectedDate]) {
    out.innerHTML = `<h3>${selectedDate}</h3><div>No data for this day</div>`;
    return;
  }

  const d = dailyLogs[selectedDate];

  out.innerHTML = `
    <h3>${selectedDate}</h3>
    <div>Walk: ${d.walk}</div>
    <div>Treadmill: ${d.treadmill}</div>
    <div>Strength: ${d.strength}</div>
    <div>Calories: ${d.calories}</div>
    <div>Avg HR: ${d.heartRate ?? "—"}</div>
  `;
});
