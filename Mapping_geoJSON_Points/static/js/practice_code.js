//var marker = L.marker([51.5, -0.09]).addTo(map);
// Add a marker to the map for Los Angeles, CA.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);
// L.circle([34.0522, -118.2437], {
//     radius: 100
// }).addTo(map);
// L.circleMarker([34.0522,-118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor: '#ffffa1'
// }).addTo(map);

//An array containing each city's location, state and population.
// let cities = [{
//     location: [40.7128, -74.0059],
//     city: "New York City",
//     state: "NY",
//     population: 8398748
// },
// {
//     location: [41.8781, -87.6298],
//     city: "Chicago",
//     state: "IL",
//     population: 2705994

// },
// {   location: [29.7604, -95.3698],
//     city: "Houston",
//     state: "TX",
//     population: 2325502
// }, 
// {
//     location: [34.0522, -118.2437],
//     city: "Los Angeles",
//     state: "CA",
//     population: 3990456
//   },
//   {
//     location: [33.4484, -112.0740],
//     city: "Phoenix",
//     state: "AZ",
//     population: 1660272
//   }
//   ];
  //Loop through the cities array and create one marker for each city with a popup.


  //creating the object using GeoJSON feature collection syntax and grabbing our GeoJson data practice code
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


L.geoJSON(sanFranAirport, {
    //we turn each feature into a marker on the map
    pointToLayer: function(feature, latlng) {
      console.log(feature);
      return L.marker(latlng).bindPopup("<h2>" + feature.properties.city + "</h2>");
    }
  }).addTo(map);