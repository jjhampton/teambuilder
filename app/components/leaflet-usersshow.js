import Ember from 'ember';

export default Ember.Component.extend({

  insertMap: function() {

    var userLatitude = this.get('model.latitude');
    var userLongitude = this.get('model.longitude');
    console.log(userLatitude);

    // marker that will be centered on map
    var marker = null;

    // specialized marker style for use as marker option
    var redMarker = L.AwesomeMarkers.icon({
      markerColor: 'red'
    });

    // map tile
    var mapBoxBackground = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'jjhampton.f68b0cad',
    accessToken: 'pk.eyJ1IjoiampoYW1wdG9uIiwiYSI6ImEwM2Y0NWRjYTMxYTYzNGZlYzgxOGNmMzBhZmE3MDUzIn0.SN40uu8Q9bCtOf6stNTjZA',
    maxZoom: 15
    });

    // map object, set to locate geolocation
    var map = L.map('showmap',{attributionControl: false}).setView([userLatitude, userLongitude], 1);

    // add tile to map
    mapBoxBackground.addTo(map);


  }.on('didInsertElement')
});
