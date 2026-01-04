<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Health Dashboard</title>

  <style>
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
      margin: 20px;
      background: #f9f9fb;
    }

    h1 {
      margin-bottom: 12px;
    }

    .controls {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin-bottom: 20px;
    }

    .control-group {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .category {
      margin-top: 16px;
      font-weight: 600;
    }

    #dailySummaryOutput {
      background: #fff;
      padding: 16px;
      border-radius: 8px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.08);
    }

    canvas {
      margin-top: 16px;
      width: 100%;
      max-width: 600px;
    }
  </style>
</head>
<body>

  <h1>Health Dashboard</h1>

  <!-- Controls -->
  <div class="controls">

    <!-- Date Picker -->
    <div class="control-group">
      <label for="datePicker">Date:</label>
      <select id="datePicker"></select>
    </div>

    <!-- BP Filter -->
    <div class="control-group">
      <label for="bpFilter">BP Filter:</label>
      <select id="bpFilter">
        <option value="all">All</option>
        <option value="L">Low</option>
        <option value="M">Medium</option>
        <option value="H">High</option>
      </select>
    </div>

    <!-- Rolling Window -->
    <div class="control-group">
      <span>Rolling:</span>
      <label><input type="radio" name="rollingDays" value="7" checked> 7d</label>
      <label><input type="radio" name="rollingDays" value="14"> 14d</label>
      <label><input type="radio" name="rollingDays" value="30"> 30d</label>
    </div>

  </div>

  <!-- Output -->
  <div id="dailySummaryOutput">
    <!-- main.js renders here -->
  </div>

  <!-- Scripts -->
  <script type="module" src="./main.js"></script>

</body>
</html>
