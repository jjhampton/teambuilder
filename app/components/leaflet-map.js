import Ember from 'ember';

export default Ember.Component.extend({
  insertMap: function() {
    var cloudmadeAttribution = 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade';

    var osmGeocoder = new L.Control.OSMGeocoder();

    var map = L.map('map').setView([51.505, -0.09], 13);

    map.addControl(osmGeocoder);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'jjhampton.f68b0cad',
    accessToken: 'pk.eyJ1IjoiampoYW1wdG9uIiwiYSI6ImEwM2Y0NWRjYTMxYTYzNGZlYzgxOGNmMzBhZmE3MDUzIn0.SN40uu8Q9bCtOf6stNTjZA'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map);

    map.locate({setView: true, maxZoom: 15});

    map.on('locationfound', onLocationFound);

    function onLocationFound(e) {
        // create a marker at the users "latlng" and add it to the map
        L.marker(e.latlng, {draggable: true}).addTo(map);
    }

  }.on('didInsertElement')
});
