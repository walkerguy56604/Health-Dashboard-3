// =======================
// Daily Logs
// =======================
const dailyLogs = {
  // ===== December 2025 =====
  "2025-12-29": {
    bloodPressure: [
      { systolic: 125, diastolic: 70, heartRate: 85 },
      { systolic: 130, diastolic: 72, heartRate: 86 }
    ],
    glucose: [{ value: 5.8 }],
    walk: 15, treadmill: 10, strength: 20, calories: 220, heartRate: 82
  },
  "2025-12-30": {
    bloodPressure: [
      { systolic: 128, diastolic: 69, heartRate: 80 }
    ],
    glucose: [{ value: 6.0 }],
    walk: 20, treadmill: 5, strength: 18, calories: 210, heartRate: 80
  },
  "2025-12-31": {
    bloodPressure: [
      { systolic: 130, diastolic: 69, heartRate: 80 },
      { systolic: 121, diastolic: 67, heartRate: 80 },
      { systolic: 144, diastolic: 75, heartRate: 87 },
      { systolic: 137, diastolic: 72, heartRate: 86 },
      { systolic: 125, diastolic: 59, heartRate: 88 }
    ],
    glucose: [{ value: 5.4 }],
    walk: 10, treadmill: 5, strength: 20, calories: 200, heartRate: 82
  },

  // ===== January 2025 =====
  "2025-01-01": { bloodPressure: [{ systolic: 108, diastolic: 60, heartRate: 77 }], glucose: [], walk:0, treadmill:0, strength:0, calories:0, heartRate:0 },
  "2025-01-02": { bloodPressure: [], glucose: [{ value: 5.6 }], walk:0, treadmill:0, strength:0, calories:0, heartRate:0 },
  "2025-01-03": { bloodPressure: [{ systolic: 123, diastolic: 65, heartRate: 87 }, { systolic: 110, diastolic: 63, heartRate: 87 }], glucose: [], walk:0, treadmill:0, strength:0, calories:0, heartRate:0 },
  "2025-01-04": { bloodPressure: [], glucose: [{ value: 6.8 }], walk:0, treadmill:0, strength:0, calories:0, heartRate:0 },
  "2025-01-05": { bloodPressure: [{ systolic: 111, diastolic: 61, heartRate: 78 }], glucose: [], walk:0, treadmill:0, strength:0, calories:0, heartRate:0 },
  "2025-01-06": { bloodPressure: [{ systolic: 106, diastolic: 59, heartRate: 80 }, { systolic: 127, diastolic: 71, heartRate: 79 }], glucose: [{ value: 6.1 }], walk:0, treadmill:0, strength:0, calories:0, heartRate:0 },

  // ===== February 2025 =====
  "2025-02-01": { bloodPressure: [], glucose: [{ value: 4.6 }], walk:0, treadmill:0, strength:0, calories:0, heartRate:0 },
  "2025-02-02": { bloodPressure: [{ systolic: 137, diastolic: 69, heartRate: 75 }], glucose: [], walk:0, treadmill:0, strength:0, calories:0, heartRate:0 },
  "2025-02-03": { bloodPressure: [{ systolic: 126, diastolic: 71, heartRate: 73 }, { systolic: 124, diastolic: 67, heartRate: 72 }], glucose: [{ value: 5.9 }], walk:0, treadmill:0, strength:0, calories:0, heartRate:0 },
  "2025-02-04": { bloodPressure: [], glucose: [{ value: 6.5 }], walk:0, treadmill:0, strength:0, calories:0, heartRate:0 },
  "2025-02-05": { bloodPressure: [{ systolic: 128, diastolic: 70, heartRate: 71 }], glucose: [], walk:0, treadmill:0, strength:0, calories:0, heartRate:0 }
};

// =======================
// Helpers
// =======================
function getBPCategory(s,d){ return (s>=140||d>=90)?"H":(s>=120||d>=80)?"M":"L"; }
function getBPColor(cat){ return cat==="H"?"red":cat==="M"?"orange":"green"; }
function getLastNDates(endDate,n){ const allDates=Object.keys(dailyLogs).sort(); const idx=allDates.indexOf(endDate); if(idx===-1) return []; return allDates.slice(Math.max(0,idx-n+1),idx+1); }
function get7DayRolling(date){
  const windowDates=getLastNDates(date,7);
  let sums={ sys:0,dia:0,bpCount:0,glucose:0,glucoseCount:0,walk:0,treadmill:0,strength:0,calories:0,heartRate:0,hrCount:0 };
  windowDates.forEach(d=>{
    const day=dailyLogs[d];
    day.bloodPressure.forEach(bp=>{ sums.sys+=bp.systolic; sums.dia+=bp.diastolic; sums.bpCount++; });
    day.glucose.forEach(g=>{ sums.glucose+=g.value??g; sums.glucoseCount++; });
    sums.walk+=day.walk??0; sums.treadmill+=day.treadmill??0; sums.strength+=day.strength??0; sums.calories+=day.calories??0;
    if(day.heartRate){ sums.heartRate+=day.heartRate; sums.hrCount++; }
  });
  return {
    bpSys: sums.bpCount?sums.sys/sums.bpCount:"—",
    bpDia: sums.bpCount?sums.dia/sums.bpCount:"—",
    glucose: sums.glucoseCount?sums.glucose/sums.glucoseCount:"—",
    walk: sums.walk, treadmill: sums.treadmill, strength: sums.strength, calories: sums.calories,
    heartRate: sums.hrCount?sums.heartRate/sums.hrCount:"—"
  };
}

// =======================
// Render Daily Summary
// =======================
function renderDailySummary(date){
  const out=document.getElementById("dailySummaryOutput");
  const d=dailyLogs[date];
  if(!d){ out.innerHTML=`<div>No data for ${date}</div>`; return; }
  let html=`<h3>${date}</h3><h4>Blood Pressure</h4>`;
  if(d.bloodPressure.length){
    d.bloodPressure.forEach((bp,i)=>{
      const cat=getBPCategory(bp.systolic,bp.diastolic);
      html+=`<div style="color:${getBPColor(cat)}">BP #${i+1}: ${bp.systolic}/${bp.diastolic} HR:${bp.heartRate} (${cat})</div>`;
    });
  } else html+="<div>No BP recorded</div>";
  html+=`<h4>Glucose</h4>`;
  if(d.glucose.length) d.glucose.forEach(g=> html+=`<div>${g.value??g} mmol/L</div>`);
  else html+="<div>No glucose</div>";
  html+=`<h4>Activity</h4>
    <div>Walk: ${d.walk} min</div>
    <div>Treadmill: ${d.treadmill} min</div>
    <div>Strength: ${d.strength} reps</div>
    <div>Calories: ${d.calories}</div>
    <div>Avg HR: ${d.heartRate}</div>`;
  const r=get7DayRolling(date);
  html+=`<h4>7-Day Rolling Averages</h4>
    <div>BP: ${r.bpSys}/${r.bpDia}</div>
    <div>Glucose: ${r.glucose}</div>
    <div>Walk: ${r.walk} min</div>
    <div>Treadmill: ${r.treadmill} min</div>
    <div>Strength: ${r.strength} reps</div>
    <div>Calories: ${r.calories}</div>
    <div>Avg HR: ${r.heartRate}</div>`;
  out.innerHTML=html;
}

// =======================
// Render BP Trends
// =======================
function renderBPTrends(endDate,days=7){
  const lastDays=getLastNDates(endDate,days);
  const datasets=[];
  lastDays.forEach(date=>{
    const day=dailyLogs[date]||{bloodPressure:[]};
    day.bloodPressure.forEach((bp,i)=>{
      if(!datasets[i]) datasets[i]={ label:`BP Reading ${i+1}`, data:[], borderColor:i%2===0?'red':'blue', backgroundColor:'rgba(0,0,0,0)', pointBackgroundColor:[] };
      datasets[i].data.push({x:date,y:bp.systolic});
      datasets[i].pointBackgroundColor.push(getBPColor(getBPCategory(bp.systolic,bp.diastolic)));
    });
    for(let j=day.bloodPressure.length;j<datasets.length;j++){ datasets[j].data.push({x:date,y:null}); datasets[j].pointBackgroundColor.push('gray'); }
  });
  const ctx=document.getElementById("trendChart").getContext("2d");
  if(window.bpChart) window.bpChart.destroy();
  window.bpChart=new Chart(ctx,{
    type:'line',
    data:{ datasets },
    options:{ responsive:true, plugins:{legend:{position:'top'}}, scales:{ x:{type:'category', labels:lastDays}, y:{beginAtZero:false,suggestedMin:50,suggestedMax:160} } }
  });
}

// =======================
// Initialize Dashboard
// =======================
const today="2025-12-31";
renderDailySummary(today);
renderBPTrends(today,7);
