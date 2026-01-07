// main.js
document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Load daily logs JSON
    const response = await fetch("dailyLogs.json");
    const dailyLogs = await response.json();

    // Get the date selector and display elements
    const dateSelect = document.getElementById("dateSelect");
    const dashboard = document.getElementById("dashboard");
    const chartCanvas = document.getElementById("healthChart").getContext("2d");

    // Populate date selector
    Object.keys(dailyLogs).forEach(date => {
      const option = document.createElement("option");
      option.value = date;
      option.textContent = date;
      dateSelect.appendChild(option);
    });

    // Function to display metrics
    function displayMetrics(date) {
      const data = dailyLogs[date];
      if (!data) return;

      // Clear dashboard
      dashboard.innerHTML = "";

      // Metrics to display
      const metrics = [
        { label: "Walk", value: data.walk, color: "green" },
        { label: "Strength", value: data.strength, color: "red" },
        { label: "Treadmill", value: data.treadmill, color: "orange" },
        { label: "Calories", value: data.calories, color: "limegreen" },
        { label: "Heart Rate", value: data.heartRate, color: "blue" },
        { label: "Weight", value: data.weight, color: "purple" },
        { label: "Glucose", value: data.glucose, color: "darkorange" },
        { label: "Sleep", value: data.sleep, color: "teal" },
        { label: "HRV", value: data.HRV, color: "pink" },
        { label: "Mood", value: data.mood, color: "gold" }
      ];

      metrics.forEach(m => {
        const p = document.createElement("p");
        p.textContent = `${m.label}: ${m.value !== null ? m.value : "No data"}`;
        p.style.color = m.color;
        dashboard.appendChild(p);
      });

      // Blood Pressure
      if (data.bloodPressure && data.bloodPressure.length > 0) {
        const bpHeader = document.createElement("p");
        bpHeader.textContent = "Blood Pressure:";
        bpHeader.style.fontWeight = "bold";
        dashboard.appendChild(bpHeader);

        data.bloodPressure.forEach(bp => {
          const bpEntry = document.createElement("p");
          bpEntry.textContent = `${bp.systolic}/${bp.diastolic} (HR ${bp.heartRate}) • ${bp.note}`;
          dashboard.appendChild(bpEntry);
        });
      }

      // Notes
      if (data.notes && data.notes.length > 0) {
        const notesHeader = document.createElement("p");
        notesHeader.textContent = "Notes:";
        notesHeader.style.fontWeight = "bold";
        dashboard.appendChild(notesHeader);

        data.notes.forEach(note => {
          const noteEntry = document.createElement("p");
          noteEntry.textContent = `- ${note}`;
          dashboard.appendChild(noteEntry);
        });
      }
    }

    // Initial display
    const firstDate = Object.keys(dailyLogs)[0];
    displayMetrics(firstDate);
    dateSelect.value = firstDate;

    // Update on date change
    dateSelect.addEventListener("change", e => displayMetrics(e.target.value));

    // Prepare chart data
    const chartData = {
      labels: Object.keys(dailyLogs),
      datasets: [
        {
          label: "Walk",
          data: Object.values(dailyLogs).map(d => d.walk),
          backgroundColor: "green"
        },
        {
          label: "Strength",
          data: Object.values(dailyLogs).map(d => d.strength),
          backgroundColor: "red"
        },
        {
          label: "Treadmill",
          data: Object.values(dailyLogs).map(d => d.treadmill),
          backgroundColor: "orange"
        },
        {
          label: "Calories",
          data: Object.values(dailyLogs).map(d => d.calories),
          backgroundColor: "limegreen"
        },
        {
          label: "Weight",
          data: Object.values(dailyLogs).map(d => d.weight || 0),
          backgroundColor: "purple"
        }
      ]
    };

    // Render bar chart using Chart.js
    new Chart(chartCanvas, {
      type: "bar",
      data: chartData,
      options: {
        responsive: true,
        plugins: {
          legend: { position: "top" },
          title: { display: true, text: "Daily Metrics Overview" }
        }
      }
    });

  } catch (err) {
    console.error("Error loading daily logs:", err);
  }
});
