//add console.log to check to see if our code is working.
console.log("working");

//We create the tile layers that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 10,
    id: 'mapbox.streets',
    accessToken: API_KEY

});

let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

let baseMaps = {
  Street: streets,
  Dark: dark
}
let map = L.map('mapid', {
  center: [30,30],
  zoom: 2,
  layers: [streets]
});

//pass the map layers into our layer controls
L.control.layers(baseMaps).addTo(map);
 
// Add GeoJSON data multiple points
let airportData = "https://raw.githubusercontent.com/judithcalvo1953/Mapping_Earthquakes/master/majorAirports.json"


//grabbing our GeoJson data
d3.json(airportData).then(function(data) {
  console.log(data);
  L.geoJson(data).addTo(map);
});
