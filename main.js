// =======================
// CONFIG
// =======================

// ⬇️ Replace this with your GitHub RAW JSON URL
const DATA_URL = "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/dailyLogs.json";

let dailyLogs = {};

// =======================
// LOAD DATA
// =======================
async function loadData() {
  try {
    const res = await fetch(DATA_URL);
    if (!res.ok) throw new Error("Failed to fetch JSON");
    dailyLogs = await res.json();
    populateDatePicker();
  } catch (err) {
    console.error(err);
    document.getElementById("dailySummaryOutput").innerHTML = `<p>Error loading data</p>`;
  }
}

// =======================
// POPULATE DATE PICKER
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

  // Automatically select latest date
  if (dates.length > 0) {
    picker.value = dates[dates.length - 1];
    render(picker.value);
  }
}

// =======================
// RENDER DASHBOARD
// =======================
function render(date) {
  const out = document.getElementById("dailySummaryOutput");
  const d = dailyLogs[date];

  if (!d) {
    out.innerHTML = "<p>No data for this date</p>";
    return;
  }

  out.innerHTML = `
    <h3>${date}</h3>

    <div><b>Walk:</b> ${d.walk} min</div>
    <div><b>Strength:</b> ${d.strength} min</div>
    <div><b>Treadmill:</b> ${d.treadmill} min</div>
    <div><b>Calories:</b> ${d.calories}</div>
    <div><b>Heart Rate:</b> ${d.heartRate ?? "—"}</div>

    <h4>Blood Pressure</h4>
    ${
      d.bloodPressure && d.bloodPressure.length
        ? d.bloodPressure
            .map(bp => `${bp.systolic}/${bp.diastolic} (HR ${bp.heartRate}) – ${bp.note}`)
            .join("<br>")
        : "No BP readings"
    }

    <h4>Notes</h4>
    ${
      d.notes && d.notes.length
        ? d.notes.map(n => `• ${n}`).join("<br>")
        : "No notes"
    }
  `;
}

// =======================
// EVENT LISTENERS
// =======================
document.getElementById("datePicker").addEventListener("change", e => render(e.target.value));

// =======================
// INITIALIZE
// =======================
loadData();
