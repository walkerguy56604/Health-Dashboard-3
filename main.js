document.addEventListener("DOMContentLoaded", () => {
  fetch("dailyLogs.json")
    .then(res => res.json())
    .then(data => {
      console.log("JSON loaded!", data);
      const select = document.getElementById("dateSelect");
      Object.keys(data).forEach(d => {
        const opt = document.createElement("option");
        opt.value = d;
        opt.textContent = d;
        select.appendChild(opt);
      });
      // Just pick the last date
      select.value = Object.keys(data)[Object.keys(data).length - 1];
      document.getElementById("metricsContainer").textContent = JSON.stringify(data[select.value], null, 2);
    })
    .catch(err => console.error("Error loading JSON:", err));
});
