//add console.log to check to see if our code is working.
console.log("working");

//We create the tile layers that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: API_KEY

});

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

let baseMaps = {
  "Streets": streets,
  "Satellite Streets": satelliteStreets
 }
let map = L.map('mapid', {
  center: [43.7,-79.3],
  zoom: 11,
  layers: [streets]
});

//pass the map layers into our layer controls
L.control.layers(baseMaps).addTo(map);
 
// Add GeoJSON data multiple points
let torontoHoods = "https://raw.githubusercontent.com/judithcalvo1953/Mapping_Earthquakes/master/torontoNeighborhoods.json"


//grabbing our GeoJson data
d3.json(torontoHoods).then(function(data) {
  console.log(data);
//create a style for the lines.
L.geoJson(data).addTo(map);
});

let myStyle = {
  color: "#ffffa1",
  weight:2
}

//creating a GeoJSON layer with the retrieved data

// L.geoJson(data, {
//   style: myStyle, 
//   onEachFeature: function(feature, layer) {
//     layer.bindPopup("<h3> Airline: " +feature.properties.airline + "</h3> <hr> Destination: " + feature.properties.dst +"</h3>");
//   }
// })
// .addTo(map);
// });