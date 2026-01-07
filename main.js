// Update logs below chart with arrows
function updateLogs(log) {
  const container = document.getElementById('logEntries');
  container.innerHTML = '';

  // Blood Pressure Entries with arrows
  if (log.bloodPressure.length > 0) {
    log.bloodPressure.forEach((bp, i) => {
      const div = document.createElement('div');
      div.className = 'log-entry';
      
      // Placeholder arrows: ↑ for increase, ↓ for decrease, → for no change
      const systolicArrow = '↑';    // placeholder
      const diastolicArrow = '↓';   // placeholder
      const hrArrow = '→';           // placeholder

      div.innerHTML = `
        <span>BP Reading ${i + 1}:</span> 
        ${bp.systolic}${systolicArrow}/${bp.diastolic}${diastolicArrow} 
        HR:${bp.heartRate}${hrArrow} 
        Note: ${bp.note || '-'}
      `;
      container.appendChild(div);
    });
  } else {
    const div = document.createElement('div');
    div.className = 'log-entry';
    div.textContent = 'No blood pressure recorded';
    container.appendChild(div);
  }

  // Notes Entries
  if (log.notes.length > 0) {
    log.notes.forEach(note => {
      const div = document.createElement('div');
      div.className = 'log-entry';
      div.innerHTML = `<span>Note:</span> ${note}`;
      container.appendChild(div);
    });
  }

  // Placeholder for future metrics (weight, glucose, HRV, mood)
  const futureMetrics = ['Weight', 'Glucose', 'HRV', 'Mood'];
  futureMetrics.forEach(metric => {
    const div = document.createElement('div');
    div.className = 'log-entry';
    div.innerHTML = `<span>${metric}:</span> -- placeholder -- ↑↓→`;
    container.appendChild(div);
  });
}
