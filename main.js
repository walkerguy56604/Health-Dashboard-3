// main.js
const dailyLogsUrl = 'dailyLogs.json';

let dailyLogs = {};
let barChart, lineChart;

async function loadDailyLogs() {
  try {
    const response = await fetch(`${dailyLogsUrl}?t=${Date.now()}`); // cache-busting
    dailyLogs = await response.json();
    populateDateSelect();
  } catch (err) {
    console.error("Error loading daily logs:", err);
  }
}

function populateDateSelect() {
  const select = document.getElementById('dateSelect');
  select.innerHTML = '';
  Object.keys(dailyLogs).sort().forEach(date => {
    const option = document.createElement('option');
    option.value = date;
    option.textContent = date;
    select.appendChild(option);
  });
  select.addEventListener('change', () => updateDashboard(select.value));
  if (select.options.length > 0) updateDashboard(select.options[0].value);
}

function updateDashboard(date) {
  const data = dailyLogs[date];
  if (!data) return;

  // Display logs
  const logsDiv = document.getElementById('logs');
  logsDiv.innerHTML = `
    <div>Walk: <span class="green">${data.walk}</span> mins</div>
    <div>Strength: <span class="red">${data.strength}</span> mins</div>
    <div>Treadmill: <span class="green">${data.treadmill}</span> mins</div>
    <div>Calories: <span class="green">${data.calories}</span> kcal</div>
    <div>Heart Rate: <span class="blue">${data.heartRate || '-'}</span></div>
    <div>Weight: ${data.weight || '-'}</div>
    <div>Glucose: ${data.glucose || '-'}</div>
    <div>Sleep: ${data.sleep || '-'}</div>
    <div>HRV: ${data.hrv || '-'}</div>
    <div>Mood: ${data.mood || '-'}</div>
    <div>Notes: ${data.notes.join(', ') || 'None'}</div>
  `;

  // Bar chart for walk/strength/treadmill/calories
  const barCtx = document.getElementById('barChart').getContext('2d');
  if (barChart) barChart.destroy();
  barChart = new Chart(barCtx, {
    type: 'bar',
    data: {
      labels: ['Walk', 'Strength', 'Treadmill', 'Calories'],
      datasets: [{
        label: date,
        data: [data.walk, data.strength, data.treadmill, data.calories],
        backgroundColor: ['green', 'red', 'green', 'green']
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } }
    }
  });

  // Line chart placeholders for trends
  const lineCtx = document.getElementById('lineChart').getContext('2d');
  if (lineChart) lineChart.destroy();
  lineChart = new Chart(lineCtx, {
    type: 'line',
    data: {
      labels: Object.keys(dailyLogs).sort(),
      datasets: [
        {
          label: 'Walk',
          data: Object.values(dailyLogs).map(d => d.walk),
          borderColor: 'green',
          fill: false
        },
        {
          label: 'Strength',
          data: Object.values(dailyLogs).map(d => d.strength),
          borderColor: 'red',
          fill: false
        },
        {
          label: 'Treadmill',
          data: Object.values(dailyLogs).map(d => d.treadmill),
          borderColor: 'blue',
          fill: false
        },
        {
          label: 'Calories',
          data: Object.values(dailyLogs).map(d => d.calories),
          borderColor: 'orange',
          fill: false
        }
      ]
    },
    options: { responsive: true }
  });
}

// Load everything
loadDailyLogs();
