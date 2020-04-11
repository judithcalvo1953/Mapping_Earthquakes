//add console.log to check to see if our code is working.
console.log("working");
// Create the map object with a center and zoom level
let map = L.map('mapid').setView([37.5, -122.5],10);

//We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 10,
    id: 'mapbox.streets',
    accessToken: API_KEY

});
//coordinates for each point to be used in the polyline
let line = [
  [33.9416, -118.4085],
  [37.6123, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];
L.polyline(line, {
  color: "yellow"
}).addTo(map);
//then we add our 'streets' tile layer to the map.
streets.addTo(map);
// get data from cities.js
let cityData = cities;
// Add GeoJSON data
let sanFranAirport =
{"type": "FeatureCollection", "features":[{
  "type":"Feature",
  "properties":{
    "id":"3469",
    "name":"San Francisco International Airport",
    "city": "San Francisco",
    "country":"United States",
    "faa":"SFO",
    "icao":"KSFO",
    "alt":"13",
    "tz-offset":"-8",
    "dst":"A",
    "tz":"America/Los_Angeles"},
    "geometry":{
      "type":"Point",
      "coordinates":[-122.375,37.61899948120117]}
}]};
//grabbing our GeoJson data
L.geoJSON(sanFranAirport, {
  //we turn each feature into a marker on the map
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup();
  }
}).addTo(map);



  cityData.forEach(function(city) {
      console.log(city)
      L.circleMarker(city.location, {
        radius: city.population/100000
      })
      .bindPopup("<h2>" + city.city + "," + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() +"</h3>")
      .addTo(map);
  });
