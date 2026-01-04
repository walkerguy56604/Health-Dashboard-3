// =======================
// Import Daily Logs
// =======================
import { dailyLogs } from './dailylogs.js';

// =======================
// Helpers
// =======================
function getBPCategory(s, d) {
    if (s >= 140 || d >= 90) return "H";
    if (s >= 120 || d >= 80) return "M";
    return "L";
}

function getRollingWindow(date, days = 7) {
    const allDates = Object.keys(dailyLogs).sort();
    const idx = allDates.indexOf(date);
    if (idx === -1) return [];
    return allDates.slice(Math.max(0, idx - (days-1)), idx + 1);
}

function calculateRolling(date, days = 7) {
    const windowDates = getRollingWindow(date, days);
    const sums = { sys:0, dia:0, bpCount:0, walk:0, treadmill:0, strength:0, calories:0, heartRate:0, hrCount:0 };

    windowDates.forEach(d => {
        const day = dailyLogs[d];
        if (!day) return;
        day.bloodPressure.forEach(bp => { sums.sys += bp.systolic; sums.dia += bp.diastolic; sums.bpCount++; });
        sums.walk += day.walk || 0;
        if (Array.isArray(day.treadmill)) day.treadmill.forEach(t => sums.treadmill += t.distance || 0);
        sums.strength += day.strength || 0;
        sums.calories += day.calories || 0;
        if (day.heartRate != null) { sums.heartRate += day.heartRate; sums.hrCount++; }
    });

    return {
        bpSys: sums.bpCount ? (sums.sys / sums.bpCount).toFixed(1) : "—",
        bpDia: sums.bpCount ? (sums.dia / sums.bpCount).toFixed(1) : "—",
        walk: sums.walk,
        treadmill: sums.treadmill,
        strength: sums.strength,
        calories: sums.calories,
        heartRate: sums.hrCount ? (sums.heartRate / sums.hrCount).toFixed(0) : "—",
        dates: windowDates
    };
}

// =======================
// Render Daily Summary
// =======================
export function renderDailySummary(date) {
    const out = document.getElementById("dailySummaryOutput");
    const bpFilter = document.getElementById("bpFilter")?.value || "all";
    const rollingDays = parseInt(document.querySelector('input[name="rollingDays"]:checked')?.value) || 7;

    const d = dailyLogs[date];
    if (!d) { out.innerHTML = `<p>No data for ${date}</p>`; return; }

    let html = `<h2>${date}</h2>`;

    html += `<div class="category">Blood Pressure</div>`;
    if (d.bloodPressure.length) {
        let shown = false;
        d.bloodPressure.forEach((bp, i) => {
            const cat = getBPCategory(bp.systolic, bp.diastolic);
            if (bpFilter !== "all" && bpFilter !== cat) return;
            shown = true;
            const catText = cat === "H" ? "High" : cat === "M" ? "Medium" : "Low";
            html += `<p>BP #${i+1}: ${bp.systolic}/${bp.diastolic} HR:${bp.heartRate} (${catText})${bp.note ? " – " + bp.note : ""}</p>`;
        });
        if (!shown) html += `<p>No BP recorded for selected filter</p>`;
    } else html += `<p>No BP recorded</p>`;

    html += `<div class="category">Activity</div>
    <p>Walk: ${d.walk || 0} min</p>
    <p>Treadmill: ${Array.isArray(d.treadmill) && d.treadmill.length ? d.treadmill.map(t => `${t.distance} km (${t.calories} cal)`).join(", ") : 0}</p>
    <p>Strength: ${d.strength || 0} min</p>
    <p>Calories: ${d.calories || 0}</p>
    <p>Avg HR: ${d.heartRate != null ? d.heartRate : "—"}</p>`;

    if (d.notes && d.notes.length) {
        html += `<div class="category">Notes</div>`;
        d.notes.forEach(note => html += `<p>• ${note}</p>`);
    }

    const r = calculateRolling(date, rollingDays);
    html += `<div class="category">${rollingDays}-Day Rolling Averages</div>
    <p>BP: ${r.bpSys}/${r.bpDia}</p>
    <p>Walk: ${r.walk}</p>
    <p>Treadmill: ${r.treadmill}</p>
    <p>Strength: ${r.strength}</p>
    <p>Calories: ${r.calories}</p>
    <p>Avg HR: ${r.heartRate}</p>`;

    html += `<canvas id="rollingChart" width="400" height="150"></canvas>`;

    out.innerHTML = html;

    drawRollingChart(date, rollingDays);
}

// =======================
// Draw Rolling Chart
// =======================
function drawRollingChart(date, days = 7) {
    const canvas = document.getElementById("rollingChart");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const windowDates = getRollingWindow(date, days);

    const sysData = [], diaData = [], walkData = [], strengthData = [];
    windowDates.forEach(d => {
        const day = dailyLogs[d];
        sysData.push(day?.bloodPressure[0]?.systolic || 0);
        diaData.push(day?.bloodPressure[0]?.diastolic || 0);
        walkData.push(day?.walk || 0);
        strengthData.push(day?.strength || 0);
    });

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const colors = { sys: "#ff3b30", dia: "#ff9500", walk: "#34c759", strength: "#007aff" };
    const dataSets = [
        { data: sysData, color: colors.sys },
        { data: diaData, color: colors.dia },
        { data: walkData, color: colors.walk },
        { data: strengthData, color: colors.strength }
    ];

    const maxVal = Math.max(...sysData, ...diaData, ...walkData, ...strengthData, 100);

    dataSets.forEach(ds => {
        ctx.beginPath();
        ds.data.forEach((val, i) => {
            const x = (i / (ds.data.length - 1)) * canvas.width;
            const y = canvas.height - (val / maxVal) * canvas.height;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        ctx.strokeStyle = ds.color;
        ctx.lineWidth = 2;
        ctx.stroke();
    });
}

// =======================
// Initialize Date Picker & Filters
// =======================
const datePicker = document.getElementById("datePicker");
const bpFilter = document.getElementById("bpFilter");

// Populate date dropdown
Object.keys(dailyLogs).sort().forEach(date => {
    const option = document.createElement("option");
    option.value = date;
    option.text = date;
    datePicker.appendChild(option);
});

// Render summary when date or filter changes
datePicker.addEventListener("change", () => renderDailySummary(datePicker.value));
bpFilter.addEventListener("change", () => renderDailySummary(datePicker.value));
document.querySelectorAll('input[name="rollingDays"]').forEach(radio => {
    radio.addEventListener("change", () => renderDailySummary(datePicker.value));
});

// Render first date by default
if (datePicker.options.length) renderDailySummary(datePicker.options[0].value);

window.renderDailySummary = renderDailySummary;
