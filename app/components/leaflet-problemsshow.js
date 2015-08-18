import Ember from 'ember';

export default Ember.Component.extend({

  insertMap: function() {

    var problemLatitude = this.get('model.latitude');
    var problemLongitude = this.get('model.longitude');

    // marker that will be centered on map
    var marker = null;

    // specialized marker style for use as marker option
    var redMarker = L.AwesomeMarkers.icon({
      icon: 'star',
      markerColor: 'blue',
      prefix: 'fa'
    });

    // map tile
    var mapBoxBackground = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'jjhampton.f68b0cad',
    accessToken: 'pk.eyJ1IjoiampoYW1wdG9uIiwiYSI6ImEwM2Y0NWRjYTMxYTYzNGZlYzgxOGNmMzBhZmE3MDUzIn0.SN40uu8Q9bCtOf6stNTjZA',
    maxZoom: 15
    });

    // map object, set to locate geolocation
    var map = L.map('showmap', {attributionControl: false, zoomControl: false}).setView([problemLatitude, problemLongitude], 5);

    // add tile to map
    mapBoxBackground.addTo(map);

    //add marker to center of map
    marker = L.marker(map.getCenter(),{icon: redMarker}, {draggable: true}).addTo(map);

    // disable map interaction
    map.dragging.disable();
    map.touchZoom.disable();
    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
    map.boxZoom.disable();

  }.on('didInsertElement')
});
