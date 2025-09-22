/ Example graph per project (can be customized for each project)
const ctx1 = document.getElementById('stats1').getContext('2d');
const chart1 = new Chart(ctx1, {
  type: 'doughnut',
  data: {
    labels: ['UX', 'Brand', 'Print'],
    datasets: [{
      data: [60, 25, 15], // Example: Project effort breakdown
      backgroundColor: ['#5ac8fa', '#007aff', '#b2e0fe'],
      borderWidth: 0
    }]
  },
  options: {
    plugins: { legend: { display: false } },
    cutout: '70%',
    layout: { padding: 0 },
    responsive: false
  }
});
// To add unique graphs for each project, create more <canvas> elements + duplicate code above with new IDs and dataset
