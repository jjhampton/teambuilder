import Ember from 'ember';

export default Ember.Component.extend({
  insertMap: function() {

    var Stamen_TonerBackground = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png', {
    	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    	subdomains: 'abcd',
    	minZoom: 0,
    	maxZoom: 20,
    	ext: 'png'
    });


    var osmGeocoder = new L.Control.OSMGeocoder();

    var map = L.map('map',{attributionControl: false}).setView([51.505, -0.09], 13);

    Stamen_TonerBackground.addTo(map);

    map.addControl(osmGeocoder);

    L.marker([51.5, -0.09]).addTo(map);

    map.locate({setView: true, maxZoom: 15});

    map.on('locationfound', onLocationFound);

    function onLocationFound(e) {
        // create a marker at the users "latlng" and add it to the map
        L.marker(e.latlng, {draggable: true}).addTo(map);
    }

  }.on('didInsertElement')
});
