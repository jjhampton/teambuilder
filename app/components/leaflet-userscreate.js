import Ember from 'ember';

export default Ember.Component.extend({

  insertMap: function() {
    var currentUser = this.get('model');

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
    var map = L.map('createmap',{attributionControl: false}).locate({setView: true, maxZoom: 15});

    // geocoder object
    var osmGeocoder = new L.Control.OSMGeocoder({
            text: 'Enter location',
			});

    // add geocoder object to map
    map.addControl(osmGeocoder);
    // add tile to map
    mapBoxBackground.addTo(map);

    map.on('load', onLoad);
    map.on('viewreset', onLoad);
    map.on('moveend', onLoad);

    // Removes  marker if already on map, then adds marker to map at center location
    function onLoad() {
      if (marker !== null) {
        map.removeLayer(marker);
      }
      marker = L.marker(map.getCenter(),{icon: redMarker}, {draggable: true}).addTo(map);

      // Sets latitude and longitude on current user model that is being created
      currentUser.set('latitude', marker.getLatLng().lat);
      currentUser.set('longitude', marker.getLatLng().lng);
    }

    map.on('click', function (e) {
      if (marker !== null) {
          map.removeLayer(marker);
      }
      marker = L.marker(e.latlng,{icon: redMarker},{draggable: true}).addTo(map);
      marker.dragging.enable();

      // Sets latitude and longitude on current user model that is being created
      currentUser.set('latitude', marker.getLatLng().lat);
      currentUser.set('longitude', marker.getLatLng().lng);
    });

  }.on('didInsertElement')
});
