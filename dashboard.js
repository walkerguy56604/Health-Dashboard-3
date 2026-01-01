import { dailyLogs } from "./data/dailyLogs.js";
import { getTotalWalkMinutes } from "./helpers.js";
console.log("Daily logs loaded:", dailyLogs);
import { dailyLogs } from "./data/dailyLogs.js";

const today = "2025-12-31";
if (!dailyLogs[today]) dailyLogs[today] = { bloodPressure: [], glucose: [], walk:0, treadmill:0, strength:0, calories:0, heartRate:0 };

// ===== Helpers =====
function getBPCategory(s,d){ if(s>=140||d>=90)return"H"; if(s>=120||d>=80)return"M"; return"L"; }
function getBPColor(cat){ return cat==="H"?"red":cat==="M"?"orange":"green"; }
function getLastNDates(endDate,n){ const allDates=Object.keys(dailyLogs).sort(); const idx=allDates.indexOf(endDate); if(idx===-1)return[]; return allDates.slice(Math.max(0,idx-n+1),idx+1); }

function get7DayRolling(date){
  const windowDates=getLastNDates(date,7);
  let sums={ sys:0, dia:0, bpCount:0, glucose:0, glucoseCount:0, walk:0, treadmill:0, strength:0, calories:0, heartRate:0, hrCount:0 };
  windowDates.forEach(d=>{
    const day=dailyLogs[d];
    day.bloodPressure.forEach(bp=>{ sums.sys+=bp.systolic; sums.dia+=bp.diastolic; sums.bpCount++; });
    day.glucose.forEach(g=>{ sums.glucose+=g.value??g; sums.glucoseCount++; });
    sums.walk+=day.walk??0; sums.treadmill+=day.treadmill??0; sums.strength+=day.strength??0; sums.calories+=day.calories??0;
    if(day.heartRate){ sums.heartRate+=day.heartRate; sums.hrCount++; }
  });
  return {
    bpSys: sums.bpCount ? (sums.sys/sums.bpCount).toFixed(1) : "—",
    bpDia: sums.bpCount ? (sums.dia/sums.bpCount).toFixed(1) : "—",
    glucose: sums.glucoseCount ? (sums.glucose/sums.glucoseCount).toFixed(1) : "—",
    walk: sums.walk, treadmill: sums.treadmill, strength: sums.strength, calories: sums.calories,
    heartRate: sums.hrCount ? (sums.heartRate/sums.hrCount).toFixed(0) : "—"
  };
}

// ===== Render Daily Summary =====
export function renderDailySummary(date){
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
  if(d.glucose.length){ d.glucose.forEach(g=> html+=`<div>${g.value??g} mmol/L${g.time? " (Time:"+g.time+")":""}</div>`); }
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

// ===== Initialize Dashboard =====
const picker=document.getElementById("datePicker");
const history=document.getElementById("historyList");
picker.value=today;
renderDailySummary(today);

if (![...history.children].some(b=>b.dataset.date===today)){
  const btn=document.createElement('button');
  btn.textContent=today; btn.dataset.date=today;
  btn.onclick=()=>{ renderDailySummary(today); };
  history.prepend(btn);
}

picker.addEventListener("change",e=>{
  const date=e.target.value;
  renderDailySummary(date);
  if(![...history.children].some(b=>b.dataset.date===date)){
    const btn=document.createElement('button');
    btn.textContent=date; btn.dataset.date=date;
    btn.onclick=()=>{ renderDailySummary(date); };
    history.prepend(btn);
  }
});
