// Tabs functionality
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Show the first tab by default on reload (optional)
window.onload = function() {
  document.querySelector('.tab-link').click();

  // Project graph (example)
  var ctx1 = document.getElementById('stats1');
  if (ctx1) {
    new Chart(ctx1, {
      type: 'doughnut',
      data: {
        labels: ['UX', 'Brand', 'Print'],
        datasets: [{
          data: [60, 25, 15],
          backgroundColor: ['#3d5a80', '#ee6c4d', '#98c1d9'],
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
  }
};
