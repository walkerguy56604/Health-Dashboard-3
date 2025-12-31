
// =======================
// Historical Data
// =======================
const dailyLogs = {
  "2024-10-29": { bloodPressure: [{ systolic: 108, diastolic: 62, heartRate: 69, note: "IHB" }, { systolic: 118, diastolic: 59, heartRate: 72, note: "IHB" }], glucose: [], walk: 40, treadmill: 0, strength: 30, calories: 0, heartRate: 75 },
  "2024-11-01": { bloodPressure: [{ systolic: 114, diastolic: 65, heartRate: 77 }, { systolic: 112, diastolic: 59, heartRate: 75 }], glucose: [], walk: 30, treadmill: 0, strength: 30, calories: 0, heartRate: 76 },
  "2024-11-04": { bloodPressure: [{ systolic: 111, diastolic: 58, heartRate: 78 }, { systolic: 122, diastolic: 68, heartRate: 76 }], glucose: [{ value: 6.7 }], walk: 20, treadmill: 0, strength: 30, calories: 0, heartRate: 77 },
  "2024-11-07": { bloodPressure: [], glucose: [{ value: 5.1 }], walk: 20, treadmill: 0, strength: 0, calories: 0, heartRate: 72 },
  "2024-11-08": { bloodPressure: [{ systolic: 112, diastolic: 61, heartRate: 77 }, { systolic: 119, diastolic: 71, heartRate: 74 }], glucose: [], walk: 25, treadmill: 0, strength: 30, calories: 0, heartRate: 75 },
  "2024-11-11": { bloodPressure: [{ systolic: 117, diastolic: 58, heartRate: 76 }, { systolic: 132, diastolic: 69, heartRate: 76 }], glucose: [{ value: 6 }], walk: 30, treadmill: 0, strength: 30, calories: 0, heartRate: 76 },
  "2024-11-12": { bloodPressure: [], glucose: [{ value: 6.1, time: "morning" }], walk: 20, treadmill: 0, strength: 0, calories: 0, heartRate: 73 },
  "2024-11-15": { bloodPressure: [{ systolic: 118, diastolic: 69, heartRate: 83 }, { systolic: 120, diastolic: 66, heartRate: 82 }], glucose: [{ value: 7.7, time: "5:00 AM" }, { value: 4.6, time: "6:30 AM" }], walk: 40, treadmill: 10, strength: 30, calories: 11, heartRate: 100 },
  "2024-11-16": { bloodPressure: [{ systolic: 125, diastolic: 71, heartRate: 91 }], glucose: [{ value: 6.3 }], walk: 35, treadmill: 15, strength: 20, calories: 12, heartRate: 92 },
  "2025-12-30": { bloodPressure: [{ systolic: 125, diastolic: 71, heartRate: 91 }], glucose: [], walk: 0, treadmill: 0, strength: 15, calories: 0, heartRate: 91 } // Today's entry
};

// =======================
// Baseline
// =======================
const baselineDate = "2024-10-29";

// =======================
// BP helpers
// =======================
function getBPCategory(s, d) {
  if (s >= 140 || d >= 90) return "H";
  if (s >= 120 || d >= 80) return "M";
  return "L";
}

function getBPColor(cat) {
  return cat === "H" ? "red" : cat === "M" ? "orange" : "green";
}

// =======================
// Helper: Last N Dates
// =======================
function getLastNDates(endDate, n) {
  const allDates = Object.keys(dailyLogs).sort();
  const idx = allDates.indexOf(endDate);
  if (idx === -1) return [];
  return allDates.slice(Math.max(0, idx - n + 1), idx + 1);
}

// =======================
// 7-Day Rolling Averages
// =======================
function get7DayRolling(date) {
  const windowDates = getLastNDates(date, 7);
  let sums = { sys:0, dia:0, bpCount:0, glucose:0, glucoseCount:0, walk:0, treadmill:0, strength:0, calories:0, heartRate:0, hrCount:0 };

  windowDates.forEach(d => {
    const day = dailyLogs[d];
    day.bloodPressure.forEach(bp => { sums.sys += bp.systolic; sums.dia += bp.diastolic; sums.bpCount++; });
    day.glucose.forEach(g => { sums.glucose += g.value ?? g; sums.glucoseCount++; });
    sums.walk += day.walk ?? 0;
    sums.treadmill += day.treadmill ?? 0;
    sums.strength += day.strength ?? 0;
    sums.calories += day.calories ?? 0;
    if(day.heartRate){ sums.heartRate += day.heartRate; sums.hrCount++; }
  });

  return {
    bpSys: sums.bpCount ? (sums.sys / sums.bpCount).toFixed(1) : "—",
    bpDia: sums.bpCount ? (sums.dia / sums.bpCount).toFixed(1) : "—",
    glucose: sums.glucoseCount ? (sums.glucose / sums.glucoseCount).toFixed(1) : "—",
    walk: sums.walk,
    treadmill: sums.treadmill,
    strength: sums.strength,
    calories: sums.calories,
    heartRate: sums.hrCount ? (sums.heartRate / sums.hrCount).toFixed(0) : "—"
  };
}

// =======================
// Render Daily Summary
// =======================
function renderDailySummary(date) {
  const out = document.getElementById("dailySummaryOutput");
  const d = dailyLogs[date];
  if(!d) { out.innerHTML = `<div>No data for ${date}</div>`; return; }

  let html = `<h3>${date}</h3>`;

  // BP
  html += `<h4>Blood Pressure</h4>`;
  d.bloodPressure.length
    ? d.bloodPressure.forEach((bp,i)=>{
        const cat = getBPCategory(bp.systolic,bp.diastolic);
        html += `<div style="color:${getBPColor(cat)}">BP #${i+1}: ${bp.systolic}/${bp.diastolic} HR:${bp.heartRate} (${cat})</div>`;
      })
    : html += `<div>No BP recorded</div>`;

  // Glucose
  html += `<h4>Glucose</h4>`;
  d.glucose.length
    ? d.glucose.forEach((g,i)=> html += `<div>${g.value??g} mmol/L${g.time? " (Time:"+g.time+")":""}</div>`)
    : html += `<div>No glucose</div>`;

  // Activity
  html += `
    <h4>Activity</h4>
    <div>Walk: ${d.walk} min</div>
    <div>Treadmill: ${d.treadmill} min</div>
    <div>Strength: ${d.strength} reps</div>
    <div>Calories: ${d.calories}</div>
    <div>Avg HR: ${d.heartRate}</div>
  `;

  // 7-day rolling
  const r = get7DayRolling(date);
  if(r){
    html += `
      <h4>7-Day Rolling Averages</h4>
      <div>BP: ${r.bpSys}/${r.bpDia}</div>
      <div>Glucose: ${r.glucose}</div>
      <div>Walk: ${r.walk} min</div>
      <div>Treadmill: ${r.treadmill} min</div>
      <div>Strength: ${r.strength} reps</div>
      <div>Calories: ${r.calories}</div>
      <div>Avg HR: ${r.heartRate}</div>
    `;
  }

  out.innerHTML = html;
}

// =======================
// History + Date Picker
// =======================
const picker = document.getElementById("datePicker");
const history = document.getElementById("historyList");

// Auto-create today's button
function createTodayButton() {
  const today = new Date().toISOString().split('T')[0];
  if (!dailyLogs[today]) {
    dailyLogs[today] = { bloodPressure: [], glucose: [], walk:0, treadmill:0, strength:0, calories:0, heartRate:0 };
  }
  if (![...history.children].some(b => b.dataset.date === today)) {
    const btn = document.createElement("button");
    btn.textContent = today;
    btn.dataset.date = today;
    btn.onclick = () => { renderDailySummary(today); renderBPTrends(today,7); };
    history.prepend(btn);
  }
}
createTodayButton();

picker.addEventListener("change", e=>{
  const date = e.target.value;
  renderDailySummary(date);
  renderBPTrends(date,7);
  if(![...history.children].some(b=>b.dataset.date===date)){
    const btn=document.createElement("button");
    btn.textContent=date;
    btn.dataset.date=date;
    btn.onclick=()=>{ renderDailySummary(date); renderBPTrends(date,7); };
    history.prepend(btn);
  }
});

// =======================
// BP Trend Chart
// =======================
let bpChart=null;
function renderBPTrends(endDate, days=7){
  const lastDays = getLastNDates(endDate,days);
  const labels=[];
  const datasets=[];

  lastDays.forEach(date=>{
    const day=dailyLogs[date] || { bloodPressure: [] };
    day.bloodPressure.forEach((bp,i)=>{
      if(!datasets[i]) datasets[i]={ label:`BP Reading ${i+1}`, data:[], borderColor:i%2===0?'red':'blue', backgroundColor:'rgba(0,0,0,0)', pointBackgroundColor:[] };
      datasets[i].data.push({x:date,y:bp.systolic});
      const cat=getBPCategory(bp.systolic,bp.diastolic);
      datasets[i].pointBackgroundColor.push(getBPColor(cat));
    });
    for(let j=day.bloodPressure.length;j<datasets.length;j++){
      datasets[j].data.push({x:date,y:null});
      datasets[j].pointBackgroundColor.push('gray');
    }
  });

  const ctx=document.getElementById("trendChart").getContext("2d");
  if(bpChart) bpChart.destroy();
  bpChart=new Chart(ctx,{
    type:'line',
    data:{ datasets:datasets },
    options:{
      responsive:true,
      plugins:{ legend:{ position:'top' } },
      scales:{
        x:{ type:'category', labels:lastDays },
        y:{ beginAtZero:false, suggestedMin:50, suggestedMax:160 }
      }
    }
  });
}

// =======================
// Export Buttons Container
// =======================
const exportContainer = document.createElement('div');
exportContainer.style.marginTop = '15px';
document.body.insertBefore(exportContainer, document.getElementById('trendContainer'));

// JSON Export
const exportJSONBtn = document.createElement('button');
exportJSONBtn.textContent = 'Export All JSON';
exportJSONBtn.onclick = () => {
  const blob = new Blob([JSON.stringify(dailyLogs,null,2)], {type: "application/json"});
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'health_logs.json';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
exportContainer.appendChild(exportJSONBtn);

// CSV Export for Selected Date
const exportCSVBtn = document.createElement('button');
exportCSVBtn.textContent = 'Export Selected Date CSV';
exportCSVBtn.onclick = () => {
  const selectedDate = picker.value;
  if(!selectedDate || !dailyLogs[selectedDate]){
    alert('No data for the selected date!');
    return;
  }
  exportSelectedCSV(selectedDate);
};
exportContainer.appendChild(exportCSVBtn);

// =======================
// CSV Export Function
// =======================
function exportSelectedCSV(date){
  const day = dailyLogs[date];
  const rows = [];

  rows.push(['Type','Systolic','Diastolic','Heart Rate','Note','Glucose','Time','Walk','Treadmill','Strength','Calories','Avg HR']);

  day.bloodPressure.forEach(bp=>{
    rows.push(['BP', bp.systolic, bp.diastolic, bp.heartRate, bp.note||'', '', '', '', '', '', '', '']);
  });

  day.glucose.forEach(g=>{
    rows.push(['Glucose', '', '', '', '', g.value, g.time||'', '', '', '', '', '']);
  });

  rows.push(['Activity','','','','','', '', day.walk, day.treadmill, day.strength, day.calories, day.heartRate]);

  const csvContent = rows.map(r=>r.map(cell=>`"${cell}"`).join(',')).join('\n');
  const blob = new Blob([csvContent], {type: "text/csv"});
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `health_log_${date}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
