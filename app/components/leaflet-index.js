import Ember from 'ember';

export default Ember.Component.extend({

  insertMap: function() {
    var problems = this.get('problems');

    var redMarker = L.AwesomeMarkers.icon({
      icon: 'star',
      markerColor: 'blue',
      prefix: 'fa'
    });

    var mapBoxBackground = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      id: 'jjhampton.f68b0cad',
      accessToken: 'pk.eyJ1IjoiampoYW1wdG9uIiwiYSI6ImEwM2Y0NWRjYTMxYTYzNGZlYzgxOGNmMzBhZmE3MDUzIn0.SN40uu8Q9bCtOf6stNTjZA',
    	minZoom: 2,
    	maxZoom: 15,
      continuousWorld: false,
      noWrap: true
    });

    var map = L.map('indexmap', {attributionControl: false, zoomControl: false}).setView([30.866667, 5], 2);

    mapBoxBackground.addTo(map);
    //marker = L.marker(latLng,{icon: greenMarker}, {draggable: true}).addTo(map).bindPopup('<a href="problems/' + this.get('model.id') + '">' + this.get('model.name') + '</a>');
    problems.forEach(function(problem) {
      var marker = L.marker(problem.get('latLng'), {icon: redMarker}).addTo(map).bindPopup('<a href="#/problems/' + problem.get('id') + '">' + problem.get('name') + '</a>');
      marker.on('mouseover', function (e) {
        this.openPopup();
      });
      marker.on('mouseout', function (e) {
        setTimeout(function() {
          this.closePopup();
        }.bind(this), 1500);
      });
    });

    return map;

  }.on('didInsertElement')
});
