async function loadDailyLogs() {
  try {
    const response = await fetch('dailyLogs.json');
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Failed to load dailyLogs.json", err);
    return {};
  }
}

function populateDates(dailyLogs) {
  const select = document.getElementById('dateSelect');
  select.innerHTML = '';
  Object.keys(dailyLogs).forEach(date => {
    const option = document.createElement('option');
    option.value = date;
    option.textContent = date;
    select.appendChild(option);
  });
}

function displayDataForDate(dailyLogs, date) {
  const container = document.getElementById('dashboard');
  container.innerHTML = '';

  const entry = dailyLogs[date];
  if (!entry) {
    container.textContent = 'No data for this date.';
    return;
  }

  function addLine(label, value, className) {
    const div = document.createElement('div');
    div.className = className || '';
    div.innerHTML = `<span>${label}:</span> ${value !== null ? value : 'N/A'}`;
    container.appendChild(div);
  }

  addLine('Walk', entry.walk + ' min', 'walk');
  addLine('Strength', entry.strength + ' min', 'strength');
  addLine('Treadmill', entry.treadmill + ' min', 'treadmill');
  addLine('Calories', entry.calories, 'calories');
  addLine('Heart Rate', entry.heartRate, 'heartRate');
  addLine('Weight', entry.weight || 'N/A', 'weight');
  addLine('Glucose', entry.glucose || 'N/A', 'glucose');
  addLine('Sleep', entry.sleep || 'N/A', 'sleep');
  addLine('HRV', entry.hrv || 'N/A', 'hrv');
  addLine('Mood', entry.mood || 'N/A', 'mood');

  // Blood Pressure
  if (entry.bloodPressure && entry.bloodPressure.length > 0) {
    const bpDiv = document.createElement('div');
    bpDiv.className = 'bp';
    bpDiv.innerHTML = `<span>Blood Pressure:</span> ` +
      entry.bloodPressure.map(bp => 
        `${bp.systolic}/${bp.diastolic} (HR ${bp.heartRate}) • ${bp.note || ''}`
      ).join(' • ');
    container.appendChild(bpDiv);
  } else {
    addLine('Blood Pressure', 'No readings', 'bp');
  }

  // Notes
  if (entry.notes && entry.notes.length > 0) {
    const notesDiv = document.createElement('div');
    notesDiv.className = 'notes';
    notesDiv.innerHTML = `<span>Notes:</span> ${entry.notes.join(' • ')}`;
    container.appendChild(notesDiv);
  }
}

async function initDashboard() {
  const dailyLogs = await loadDailyLogs();
  populateDates(dailyLogs);

  const select = document.getElementById('dateSelect');
  select.addEventListener('change', () => {
    displayDataForDate(dailyLogs, select.value);
  });

  // Display first date by default
  const firstDate = select.options[0]?.value;
  if (firstDate) displayDataForDate(dailyLogs, firstDate);
}

initDashboard();
