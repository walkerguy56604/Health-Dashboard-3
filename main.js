import { dailyLogs } from "./dailylogs.js";
// =======================
// Rolling Calculations
// =======================

function getRolling(date, days) {
  const dates = Object.keys(dailyLogs).sort();
  const idx = dates.indexOf(date);
  if (idx === -1) return null;

  const windowDates = dates.slice(
    Math.max(0, idx - (days - 1)),
    idx + 1
  );

  const totals = {
    sys: 0, dia: 0, bpCount: 0,
    walk: 0,
    treadmill: 0,
    strength: 0,
    calories: 0,
    hr: 0, hrCount: 0
  };

  windowDates.forEach(d => {
    const day = dailyLogs[d];
    if (!day) return;

    (day.bloodPressure || []).forEach(bp => {
      totals.sys += bp.systolic;
      totals.dia += bp.diastolic;
      totals.bpCount++;
    });

    totals.walk += day.walk || 0;
    totals.strength += day.strength || 0;
    totals.calories += day.calories || 0;

    (day.treadmill || []).forEach(t => {
      totals.treadmill += t.distance || 0;
    });

    if (day.heartRate != null) {
      totals.hr += day.heartRate;
      totals.hrCount++;
    }
  });

  return {
    bpSys: totals.bpCount ? (totals.sys / totals.bpCount).toFixed(1) : "—",
    bpDia: totals.bpCount ? (totals.dia / totals.bpCount).toFixed(1) : "—",
    walk: totals.walk,
    treadmill: totals.treadmill.toFixed(2),
    strength: totals.strength,
    calories: totals.calories,
    hr: totals.hrCount
      ? Math.round(totals.hr / totals.hrCount)
      : "—"
  };
}

function getRollingDays() {
  return Number(
    document.querySelector('input[name="rollingDays"]:checked')?.value || 7
  );
}
function getRolling(date, days) {
  const dates = Object.keys(dailyLogs).sort();
  const idx = dates.indexOf(date);
  if (idx === -1) return null;

  const windowDates = dates.slice(Math.max(0, idx - (days - 1)), idx + 1);

  const sums = {
    sys: 0, dia: 0, bpCount: 0,
    walk: 0,
    treadmill: 0,
    strength: 0,
    calories: 0,
    hr: 0, hrCount: 0
  };

  windowDates.forEach(d => {
    const day = dailyLogs[d];
    if (!day) return;

    // BP
    (day.bloodPressure || []).forEach(bp => {
      sums.sys += bp.systolic;
      sums.dia += bp.diastolic;
      sums.bpCount++;
    });

    // Activity
    sums.walk += day.walk || 0;
    sums.strength += day.strength || 0;
    sums.calories += day.calories || 0;

    // Treadmill distance
    (day.treadmill || []).forEach(t => {
      sums.treadmill += t.distance || 0;
    });

    // Heart rate
    if (day.heartRate != null) {
      sums.hr += day.heartRate;
      sums.hrCount++;
    }
  });

  return {
    bpSys: sums.bpCount ? (sums.sys / sums.bpCount).toFixed(1) : "—",
    bpDia: sums.bpCount ? (sums.dia / sums.bpCount).toFixed(1) : "—",
    walk: sums.walk,
    treadmill: sums.treadmill.toFixed(2),
    strength: sums.strength,
    calories: sums.calories,
    hr: sums.hrCount ? Math.round(sums.hr / sums.hrCount) : "—"
  };
}
