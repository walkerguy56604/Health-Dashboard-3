// Make sure dailyLogs exists
if (!window.dailyLogs) {
  alert("dailyLogs not found! Load your JSON first.");
}

// Grab dates sorted
const dates = Object.keys(dailyLogs).sort();

// Metrics we want
const metrics = [
  "walk", "strength", "treadmill", "calories",
  "heartRate", "weight", "glucose", "HRV", "sleep", "mood"
];
const colors = ["green","red","orange","lime","blue","purple","brown","pink","cyan","magenta"];

// Create datasets for Chart.js
const datasets = metrics.map((metric,i) => ({
  label: metric,
  data: dates.map(d => {
    const value = dailyLogs[d][metric];
    return value != null ? value : 0;
  }),
  borderColor: colors[i],
  backgroundColor: colors[i],
  fill: false,
  tension: 0.3,
  pointRadius: 5,
  pointHoverRadius: 7
}));

// Create chart
const ctx = document.getElementById("healthChart").getContext("2d");
const healthChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: dates,
    datasets: datasets
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      tooltip: {
        callbacks: {
          label: function(context) {
            const metric = context.dataset.label;
            const value = context.parsed.y;
            const index = context.dataIndex;
            let trendArrow = "→"; // default
            if (index > 0) {
              const prevValue = dailyLogs[dates[index-1]][metric] ?? 0;
              if (value > prevValue) trendArrow = "↑";
              else if (value < prevValue) trendArrow = "↓";
            }
            return `${metric}: ${value} ${trendArrow}`;
          }
        }
      }
    },
    scales: { y: { beginAtZero: true } }
  }
});

// Optional: Display latest values below chart
const metricsSummary = document.getElementById("metricsSummary");
dates.forEach(date => {
  const container = document.createElement("div");
  container.classList.add("metric");
  container.innerHTML = `<strong>${date}</strong><br>` +
    metrics.map(m => `${m}: ${dailyLogs[date][m] ?? 0}`).join("<br>");
  metricsSummary.appendChild(container);
});
