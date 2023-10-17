// JavaScript to handle the map and random temperature updates

document.addEventListener('DOMContentLoaded', function () {
  // Define the map and set it to be centered on Poland
  var map = L.map('map').setView([52.0693, 19.4803], 6); // Latitude and longitude of the center of Poland and zoom level

  // Add OpenStreetMap tiles to the map
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Define cities with their latitude and longitude
  const cities = {
    "Warsaw": { "lat": 52.2297, "lon": 21.0122 },
    "Krakow": { "lat": 50.0647, "lon": 19.9450 },
    "Gdansk": { "lat": 54.3520, "lon": 18.6466 },
    // ... add other cities here
  };

  // Function to generate a random temperature
  function getRandomTemp() {
    return Math.floor(Math.random() * 35);
  }

  // Place markers for each city with a popup containing the temperature
  Object.keys(cities).forEach(city => {
    const temp = getRandomTemp();
    const marker = L.marker([cities[city].lat, cities[city].lon]).addTo(map);
    marker.bindPopup(`<b>${city}</b><br>${temp}°C`).openPopup();
  });
});