// Main JS for Health Dashboard with Trends
(async function() {
  const dailyLogsUrl = `dailyLogs.json?v=${Date.now()}`; // Cache-busting

  let dailyLogs = {};
  try {
    const res = await fetch(dailyLogsUrl);
    dailyLogs = await res.json();
  } catch (err) {
    console.error("Failed to load dailyLogs.json:", err);
    return;
  }

  const dateSelect = document.getElementById("dateSelect");
  const metricsCard = document.getElementById("metricsCard");
  const ctxBar = document.getElementById("healthChart").getContext("2d");

  // Add a new canvas for trends
  let trendsCanvas = document.getElementById("trendsChart");
  if(!trendsCanvas) {
    trendsCanvas = document.createElement("canvas");
    trendsCanvas.id = "trendsChart";
    document.querySelector(".dashboard").appendChild(trendsCanvas);
  }
  const ctxLine = trendsCanvas.getContext("2d");

  // Sort dates descending
  const dates = Object.keys(dailyLogs).sort((a,b)=> new Date(a) - new Date(b));

  // Populate dropdown
  dates.forEach(date => {
    const option = document.createElement("option");
    option.value = date;
    option.textContent = date;
    dateSelect.appendChild(option);
  });

  function renderMetrics(date) {
    const day = dailyLogs[date];
    metricsCard.innerHTML = ""; // Clear previous

    const metrics = [
      { key: "walk", label: "Walk", color: "green" },
      { key: "strength", label: "Strength", color: "red" },
      { key: "treadmill", label: "Treadmill", color: "green" },
      { key: "calories", label: "Calories", color: "green" },
      { key: "heartRate", label: "Heart Rate", color: "blue" },
      { key: "weight", label: "Weight", color: "blue" },
      { key: "glucose", label: "Glucose", color: "blue" },
      { key: "sleep", label: "Sleep", color: "blue" },
      { key: "HRV", label: "HRV", color: "blue" },
      { key: "mood", label: "Mood", color: "blue" }
    ];

    metrics.forEach(m => {
      if(day[m.key] !== undefined && day[m.key] !== null) {
        const div = document.createElement("div");
        div.classList.add("metric", m.color);
        div.innerHTML = `<span>${m.label}:</span> ${day[m.key]}`;
        metricsCard.appendChild(div);
      }
    });

    if(day.bloodPressure && day.bloodPressure.length) {
      day.bloodPressure.forEach(bp => {
        const div = document.createElement("div");
        div.classList.add("metric", "blue");
        div.textContent = `BP: ${bp.systolic}/${bp.diastolic} HR:${bp.heartRate} (${bp.note || ""})`;
        metricsCard.appendChild(div);
      });
    }

    if(day.notes && day.notes.length) {
      day.notes.forEach(note => {
        const div = document.createElement("div");
        div.classList.add("metric");
        div.textContent = `Note: ${note}`;
        metricsCard.appendChild(div);
      });
    }
  }

  function renderBarChart(date) {
    const day = dailyLogs[date];
    const labels = ["Walk", "Strength", "Treadmill", "Calories", "Heart Rate", "Weight", "Glucose", "Sleep", "HRV"];
    const data = [
      day.walk || 0,
      day.strength || 0,
      day.treadmill || 0,
      day.calories || 0,
      day.heartRate || 0,
      day.weight || 0,
      day.glucose || 0,
      day.sleep || 0,
      day.HRV || 0
    ];

    if(window.healthChartInstance) window.healthChartInstance.destroy();

    window.healthChartInstance = new Chart(ctxBar, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: `Metrics for ${date}`,
          data,
          backgroundColor: labels.map(l => {
            if(l === "Walk" || l === "Treadmill" || l === "Calories") return "green";
            if(l === "Strength") return "red";
            return "blue";
          })
        }]
      },
      options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    });
  }

  function renderLineChart() {
    const labels = dates;
    const metricsKeys = ["walk", "strength", "treadmill", "calories", "heartRate", "weight", "glucose", "sleep", "HRV"];
    const colors = { walk: "green", treadmill: "green", calories: "green", strength: "red", heartRate: "blue", weight: "blue", glucose: "blue", sleep: "blue", HRV: "blue" };

    const datasets = metricsKeys.map(key => ({
      label: key,
      data: dates.map(d => dailyLogs[d][key] || 0),
      borderColor: colors[key] || "black",
      fill: false,
      tension: 0.2
    }));

    if(window.trendsChartInstance) window.trendsChartInstance.destroy();

    window.trendsChartInstance = new Chart(ctxLine, {
      type: "line",
      data: { labels, datasets },
      options: { responsive: true, plugins: { legend: { position: "bottom" } }, scales: { y: { beginAtZero: true } } }
    });
  }

  // Initialize
  const defaultDate = dates[dates.length - 1];
  dateSelect.value = defaultDate;
  renderMetrics(defaultDate);
  renderBarChart(defaultDate);
  renderLineChart();

  dateSelect.addEventListener("change", e => {
    renderMetrics(e.target.value);
    renderBarChart(e.target.value);
  });
})();
