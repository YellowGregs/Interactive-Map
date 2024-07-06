const map = L.map('map').setView([37.7749, -122.4194], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

document.getElementById('zoomIn').addEventListener('click', () => {
  map.zoomIn();
});

document.getElementById('zoomOut').addEventListener('click', () => {
  map.zoomOut();
});

document.getElementById('reset').addEventListener('click', () => {
  map.setView([37.7749, -122.4194], 13);
});
