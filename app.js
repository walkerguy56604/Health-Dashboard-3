// =======================
// Export Buttons
// =======================

// Create container for buttons
// =======================
// Export Selected Date Button
// =======================
const exportSelectedBtn = document.createElement('button');
exportSelectedBtn.textContent = 'Export Selected Date';
exportSelectedBtn.onclick = () => {
  const selectedDate = document.getElementById('datePicker').value;
  if(!selectedDate || !dailyLogs[selectedDate]){
    alert('No data for the selected date!');
    return;
  }
  exportSelectedJSON(selectedDate);
};
exportContainer.appendChild(exportSelectedBtn);

// =======================
// Function: Export Selected Date as JSON
// =======================
function exportSelectedJSON(date){
  const data = { [date]: dailyLogs[date] };
  const dataStr = JSON.stringify(data, null, 2);
  const blob = new Blob([dataStr], {type: "application/json"});
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `health_log_${date}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
const exportContainer = document.createElement('div');
exportContainer.style.marginTop = '20px';
exportContainer.style.display = 'flex';
exportContainer.style.gap = '10px';

// CSV Button
const csvBtn = document.createElement('button');
csvBtn.textContent = 'Export CSV';
csvBtn.onclick = () => exportCSV();
exportContainer.appendChild(csvBtn);

// JSON Button
const jsonBtn = document.createElement('button');
jsonBtn.textContent = 'Export JSON';
jsonBtn.onclick = () => exportJSON();
exportContainer.appendChild(jsonBtn);

// Add buttons to page below daily summary
document.body.insertBefore(exportContainer, document.getElementById('trendContainer'));

// =======================
// Export Functions
// =======================
function exportCSV() {
  const rows = [['Date','BP Systolic','BP Diastolic','BP HR','BP Note','Glucose','Walk','Treadmill','Strength','Calories','Avg HR']];
  for(const date of Object.keys(dailyLogs).sort()){
    const d = dailyLogs[date];
    const maxBP = d.bloodPressure.length || 1;
    for(let i=0; i<maxBP; i++){
      const bp = d.bloodPressure[i] || { systolic:'', diastolic:'', heartRate:'', note:'' };
      const glucose = d.glucose[i]?.value ?? '';
      rows.push([
        date,
        bp.systolic,
        bp.diastolic,
        bp.heartRate,
        bp.note,
        glucose,
        d.walk,
        d.treadmill,
        d.strength,
        d.calories,
        d.heartRate
      ]);
    }
  }
  const csvContent = "data:text/csv;charset=utf-8," + rows.map(e => e.join(",")).join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `health_logs_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function exportJSON() {
  const dataStr = JSON.stringify(dailyLogs, null, 2);
  const blob = new Blob([dataStr], {type: "application/json"});
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `health_logs_${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
