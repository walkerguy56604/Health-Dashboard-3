// =======================
// Config
// =======================

// ⬇️ Make sure this points to your JSON file
const DATA_URL = "./dailyLogs.json";

let dailyLogs = {};

// =======================
// Load JSON Data
// =======================
async function loadData() {
  try {
    const res = await fetch(DATA_URL);
    dailyLogs = await res.json();
    populateDatePicker();
  } catch (err) {
    console.error("Error loading daily logs:", err);
    document.getElementById("dailySummaryOutput").innerHTML = "<p>Failed to load data</p>";
  }
}

// =======================
// Populate Date Picker
// =======================
function populateDatePicker() {
  const picker = document.getElementById("datePicker");
  picker.innerHTML = "";

  const dates = Object.keys(dailyLogs).sort();

  dates.forEach(date => {
    const opt = document.createElement("option");
    opt.value = date;
    opt.textContent = date;
    picker.appendChild(opt);
  });

  if (dates.length > 0) {
    picker.value = dates[dates.length - 1];
    render(dates[dates.length - 1]);
  }
}

// =======================
// Render Dashboard
// =======================
function render(date) {
  const out = document.getElementById("dailySummaryOutput");
  const d = dailyLogs[date];

  if (!d) {
    out.innerHTML = "<p>No data</p>";
    return;
  }

  out.innerHTML = `
    <h3>${date}</h3>

    <div><b>Walk:</b> ${d.walk} min</div>
    <div><b>Strength:</b> ${d.strength} min</div>
    <div><b>Treadmill:</b> ${d.treadmill} min</div>
    <div><b>Calories:</b> ${d.calories}</div>
    <div><b>Heart Rate:</b> ${d.heartRate ?? "—"}</div>
    <div><b>Weight:</b> ${d.weight ?? "—"} kg</div>
    <div><b>Glucose:</b> ${d.glucose ?? "—"} mg/dL</div>
    <div><b>Sleep:</b> ${d.sleep ?? "—"} hrs</div>
    <div><b>HRV:</b> ${d.HRV ?? "—"}</div>
    <div><b>Mood:</b> ${d.mood ?? "—"}</div>

    <h4>Blood Pressure</h4>
    ${
      d.bloodPressure.length
        ? d.bloodPressure
            .map(bp => `${bp.systolic}/${bp.diastolic} (HR ${bp.heartRate}) – ${bp.note}`)
            .join("<br>")
        : "No BP readings"
    }

    <h4>Notes</h4>
    ${
      d.notes.length
        ? d.notes.map(n => `• ${n}`).join("<br>")
        : "No notes"
    }
  `;
}

// =======================
// Event Listener
// =======================
document.getElementById("datePicker").addEventListener("change", e => render(e.target.value));

// =======================
// Init
// =======================
loadData();
