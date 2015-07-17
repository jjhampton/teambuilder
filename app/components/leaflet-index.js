import Ember from 'ember';

export default Ember.Component.extend({
  insertMap: function() {
    var redMarker = L.AwesomeMarkers.icon({
      icon: 'coffee',
      markerColor: 'red'
    });

    var Stamen_Watercolor = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png', {
    	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    	subdomains: 'abcd',
    	minZoom: 1,
    	maxZoom: 15,
    	ext: 'png'
    });

    var map = L.map('indexmap', {attributionControl: false, zoomControl: false}).setView([40.866667, 10.566667], 1);

    // map.fitWorld().zoomIn();

    Stamen_Watercolor.addTo(map);

    // map.on('locationfound', onLocationFound);
    //
    // function onLocationFound(e) {
    //     // create a marker at the users "latlng" and add it to the map
    //     L.marker(e.latlng, {icon: redMarker}, {draggable: true}).addTo(map);
    // }



  }.on('didInsertElement')
});
