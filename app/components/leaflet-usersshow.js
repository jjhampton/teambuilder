import Ember from 'ember';

export default Ember.Component.extend({

  insertMap: function() {

    var userLatitude = this.get('model.latitude');
    var userLongitude = this.get('model.longitude');
    var contributions = this.get('contributions');

    var latLng = L.latLng(userLatitude, userLongitude);

    // marker that will be centered on map
    var marker = null;

    // specialized marker style for use as marker option
    var greenMarker = L.AwesomeMarkers.icon({
      icon: 'home',
      markerColor: 'green',
      prefix: 'fa'
    });
    var blueMarker = L.AwesomeMarkers.icon({
      icon: 'star',
      markerColor: 'blue',
      prefix: 'fa'
    });

    // map tile
    var mapBoxBackground = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'jjhampton.f68b0cad',
    accessToken: 'pk.eyJ1IjoiampoYW1wdG9uIiwiYSI6ImEwM2Y0NWRjYTMxYTYzNGZlYzgxOGNmMzBhZmE3MDUzIn0.SN40uu8Q9bCtOf6stNTjZA',
    maxZoom: 15,
    minZoom: 1
    });

    // map object, set to locate geolocation
    var map = L.map('showmap',{attributionControl: false}).setView([userLatitude, userLongitude], 2);


    // add markers for contribution locations
    contributions.forEach(function(contribution) {
      var contributionMarker = L.marker(contribution.latLng,{icon: blueMarker}, {draggable: true}).addTo(map).bindPopup('<a href="problems/' + contribution.id + '">' + contribution.name + '</a>');
      contributionMarker.on('mouseover', function (e) {
        this.openPopup();
      });
      contributionMarker.on('mouseout', function (e) {
        setTimeout(function() {
          this.closePopup();
        }.bind(this), 1500);
      });
    });

    // add marker to user's home location
    marker = L.marker(latLng,{icon: greenMarker}, {draggable: true}).addTo(map).bindPopup(this.get('model.name') + "'s home");
    marker.on('mouseover', function (e) {
      this.openPopup();
    });
    marker.on('mouseout', function (e) {
      this.closePopup();
    });

    // add tile to map
    mapBoxBackground.addTo(map);

  }.on('didInsertElement')
});
