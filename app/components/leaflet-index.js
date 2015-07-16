import Ember from 'ember';

export default Ember.Component.extend({
  insertMap: function() {
    var redMarker = L.AwesomeMarkers.icon({
      icon: 'coffee',
      markerColor: 'red'
    });

    var Stamen_TonerBackground = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png', {
    	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    	subdomains: 'abcd',
    	minZoom: 2,
    	maxZoom: 10,
    	ext: 'png'
    });

    var map = L.map('map',{attributionControl: false, zoom: 5}).locate({setView: true});
    var osmGeocoder = new L.Control.OSMGeocoder({
            text: 'Enter location',
			});

    map.addControl(osmGeocoder);
    Stamen_TonerBackground.addTo(map);

    map.on('locationfound', onLocationFound);

    function onLocationFound(e) {
        // create a marker at the users "latlng" and add it to the map
        L.marker(e.latlng, {icon: redMarker}, {draggable: true}).addTo(map);
    }



  }.on('didInsertElement')
});
