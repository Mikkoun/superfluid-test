const StyleConfiguration = {
  primary: "#00ADB5",
  secondary: "#FF5722",
  body: "#303841",
  background: "#EEEEEE",
  success: "rgb(0, 200, 83)",
  alert: "rgb(216, 67, 21)",
}

const ChartConfiguration = {
  options: {
    responsive: true,
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0.3,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
  dataset: {
    fill: {
      target: "origin",
      above: StyleConfiguration.primary,
    },
    borderColor: StyleConfiguration.body,
    backgroundColor: StyleConfiguration.body,
    borderWidth: 3,
  },
}

const Configuration = {
  style: StyleConfiguration,
  chart: ChartConfiguration,
}

export default Configuration
