document.addEventListener("DOMContentLoaded", () => {

  const dailyLogs = {
    "2025-10-29": {
      walk: { duration: 20, distance: 1.5 },
      treadmill: { duration: 15, distance: 1.2 },
      strength: { reps: 12, exercises: 6 },
      calories: 200,
      avgHR: 95
    },
    "2025-12-30": {
      walk: { duration: 5, distance: 0 },
      treadmill: { duration: 10, distance: 0.24 },
      strength: { reps: 6, exercises: 3 },
      calories: 11,
      avgHR: 115
    }
  };

  const referenceDate = "2025-10-29";

  function colorDiff(current, reference) {
    if (current > reference) return "green";
    if (current < reference) return "red";
    return "black";
  }

  function renderSummary(date) {
    const summaryDiv = document.getElementById("dailySummaryOutput");
    if (!summaryDiv) {
      console.error("dailySummaryOutput element not found!");
      return;
    }
    const log = dailyLogs[date];
    const refLog = dailyLogs[referenceDate];

    summaryDiv.innerHTML = ""; // Clear old summary

    const metrics = [
      { name: "Walk Duration (min)", key: "walk", sub: "duration" },
      { name: "Walk Distance (km)", key: "walk", sub: "distance" },
      { name: "Treadmill Duration (min)", key: "treadmill", sub: "duration" },
      { name: "Treadmill Distance (km)", key: "treadmill", sub: "distance" },
      { name: "Strength Reps", key: "strength", sub: "reps" },
      { name: "Strength Exercises", key: "strength", sub: "exercises" },
      { name: "Calories Burned", key: "calories" },
      { name: "Average Heart Rate", key: "avgHR" }
    ];

    metrics.forEach(metric => {
      const currentVal = metric.sub ? log[metric.key][metric.sub] : log[metric.key];
      const refVal = metric.sub ? refLog[metric.key][metric.sub] : refLog[metric.key];

      const div = document.createElement("div");
      div.textContent = `${metric.name}: ${currentVal} (Ref: ${refVal})`;
      div.style.color = colorDiff(currentVal, refVal);
      summaryDiv.appendChild(div);
    });
  }

  // Wire up the existing date picker
  const datePicker = document.getElementById("datePicker");
  if (datePicker) {
    datePicker.addEventListener("change", () => {
      if (dailyLogs[datePicker.value]) {
        renderSummary(datePicker.value);
      }
    });
    // Set default value to first date in logs
    datePicker.value = Object.keys(dailyLogs)[0];
    renderSummary(datePicker.value);
  }

});
