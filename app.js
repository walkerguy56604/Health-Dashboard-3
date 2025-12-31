// =======================
// Auto-create today's button if missing
// =======================
function addTodayButton() {
  const today = new Date().toISOString().split('T')[0];
  if (![...history.children].some(b => b.dataset.date === today)) {
    const btn = document.createElement("button");
    btn.textContent = today;
    btn.dataset.date = today;
    btn.onclick = () => { 
      renderDailySummary(today); 
      renderBPTrends(today, 7); 
    };
    history.prepend(btn); // newest on top
  }
}

// Call it once on page load
addTodayButton();
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
  "2025-12-30": { bloodPressure: [{ systolic: 125, diastolic: 71, heartRate: 91 }], glucose: [], walk: 0, treadmill: 0, strength: 15, calories: 0, heartRate: 91 } // Today's entry
};

// =======================
// Baseline
// =======================
const baselineDate = "2024-10-29";

// =======================
// BP Helpers
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
// Auto-create today's entry
// =======================
function ensureTodayEntry() {
  const today = new Date().toISOString().split("T")[0];
  if (!dailyLogs[today]) {
    dailyLogs[today] = { bloodPressure: [], glucose: [], walk: 0, treadmill: 0, strength: 0, calories: 0, heartRate: 0 };
  }
  return today;
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
        html += `<div style="color:${getBPColor(cat)}">BP #${i+1}: ${bp.systolic}/${bp.diastolic} HR:${bp.heartRate} (${cat})${bp.note? " ("+bp.note+")":""}</div>`;
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
// Date Picker + History
// =======================
const picker = document.getElementById("datePicker");
const history = document.getElementById("historyList");

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
// BP Trend Chart (Systolic & Diastolic)
// =======================
let bpChart=null;
function renderBPTrends(endDate, days=7){
  const lastDays = getLastNDates(endDate,days);
  const labels=[];
  const sysDataset={ label:'Systolic', data:[], borderColor:'red', backgroundColor:'rgba(0,0,0,0)', pointBackgroundColor:[] };
  const diaDataset={ label:'Diastolic', data:[], borderColor:'blue', backgroundColor:'rgba(0,0,0,0)', pointBackgroundColor:[] };

  lastDays.forEach(date=>{
    const day=dailyLogs[date] || { bloodPressure: [] };
    if(day.bloodPressure.length){
      // Use first BP of the day for graph
      const bp=day.bloodPressure[0];
      sysDataset.data.push({x:date,y:bp.systolic});
      diaDataset.data.push({x:date,y:bp.diastolic});
      sysDataset.pointBackgroundColor.push(getBPColor(getBPCategory(bp.systolic,bp.diastolic)));
      diaDataset.pointBackgroundColor.push(getBPColor(getBPCategory(bp.systolic,bp.diastolic)));
    } else {
      sysDataset.data.push({x:date,y:null});
      diaDataset.data.push({x:date,y:null});
      sysDataset.pointBackgroundColor.push('gray');
      diaDataset.pointBackgroundColor.push('gray');
    }
  });

  const ctx=document.getElementById("trendChart").getContext("2d");
  if(bpChart) bpChart.destroy();
  bpChart=new Chart(ctx,{
    type:'line',
    data:{ datasets:[sysDataset,diaDataset] },
    options:{
      responsive:true,
      plugins:{ legend:{ position:'top' } },
      scales:{ x:{ type:'category', labels:lastDays }, y:{ beginAtZero:false, suggestedMin:50, suggestedMax:160 } }
    }
  });
}

// =======================
// Export Buttons
// =======================
function exportCSV(){
  const rows=[];
  Object.keys(dailyLogs).sort().forEach(date=>{
    const day=dailyLogs[date];
    day.bloodPressure.forEach(bp=>{
      rows.push([date,'BP',bp.systolic,bp.diastolic,bp.heartRate,bp.note??'']);
    });
    day.glucose.forEach(g=>{
      rows.push([date,'Glucose',g.value,g.time??'']);
    });
    rows.push([date,'Walk',day.walk]);
    rows.push([date,'Treadmill',day.treadmill]);
    rows.push([date,'Strength',day.strength]);
    rows.push([date,'Calories',day.calories]);
    rows.push([date,'HeartRate',day.heartRate]);
  });
  let csvContent = "data:text/csv;charset=utf-8," + rows.map(r=>r.join(",")).join("\n");
  const encodedUri = encodeURI(csvContent);
  const link=document.createElement("a");
  link.setAttribute("href",encodedUri);
  link.setAttribute("download","health_logs.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function exportJSON(){
  const dataStr = JSON.stringify(dailyLogs,null,2);
  const blob = new Blob([dataStr], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const link=document.createElement("a");
  link.href=url;
  link.download="health_logs.json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// =======================
// Initialize
// =======================
const today = ensureTodayEntry();
picker.value = today;
renderDailySummary(today);
renderBPTrends(today,7);
