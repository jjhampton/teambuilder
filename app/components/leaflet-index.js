import Ember from 'ember';

export default Ember.Component.extend({

  insertMap: function() {
    var problems = this.get('problems');

    var redMarker = L.AwesomeMarkers.icon({
      icon: 'star',
      markerColor: 'red',
      prefix: 'fa'
    });



    var mapBoxBackground = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      id: 'jjhampton.f68b0cad',
      accessToken: 'pk.eyJ1IjoiampoYW1wdG9uIiwiYSI6ImEwM2Y0NWRjYTMxYTYzNGZlYzgxOGNmMzBhZmE3MDUzIn0.SN40uu8Q9bCtOf6stNTjZA',
    	minZoom: 1,
    	maxZoom: 15,
    });

    var map = L.map('indexmap', {attributionControl: false, zoomControl: false}).setView([40.866667, 10.566667], 2);


    mapBoxBackground.addTo(map);

    problems.forEach(function(problem) {
      L.marker(problem.get('latLng'), {icon: redMarker}).addTo(map);
    });

    return map;

  }.on('didInsertElement')
});
