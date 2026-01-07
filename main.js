let dailyLogs = {};
let chart;

fetch("dailyLogs.json?v=" + Date.now())
  .then(res => res.json())
  .then(data => {
    dailyLogs = data;
    populateDates();
    loadDay(Object.keys(dailyLogs)[0]);
  })
  .catch(err => {
    console.error("Failed to load dailyLogs.json", err);
  });

function populateDates() {
  const select = document.getElementById("dateSelect");
  select.innerHTML = "";

  Object.keys(dailyLogs).forEach(date => {
    const option = document.createElement("option");
    option.value = date;
    option.textContent = date;
    select.appendChild(option);
  });

  select.addEventListener("change", e => loadDay(e.target.value));
}

function loadDay(date) {
  const log = dailyLogs[date];
  if (!log) return;

  document.getElementById("calories").textContent = log.calories ?? "—";
  document.getElementById("walk").textContent = log.walk ?? "—";
  document.getElementById("strength").textContent = log.strength ?? "—";
  document.getElementById("treadmill").textContent = log.treadmill ?? "—";
  document.getElementById("notes").textContent = log.notes ?? "—";

  // Blood pressure (array-safe)
  if (Array.isArray(log.bloodPressure)) {
    document.getElementById("bp").textContent =
      log.bloodPressure
        .map(bp => `${bp.sys}/${bp.dia} (HR ${bp.hr})`)
        .join(" • ");
  } else {
    document.getElementById("bp").textContent = "—";
  }

  drawChart(log);
}

function drawChart(log) {
  const ctx = document.getElementById("activityChart");

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Walk", "Strength", "Treadmill"],
      datasets: [{
        label: "Activity",
        data: [
          log.walk ?? 0,
          log.strength ?? 0,
          log.treadmill ?? 0
        ]
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}
