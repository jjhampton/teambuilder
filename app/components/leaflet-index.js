import Ember from 'ember';

export default Ember.Component.extend({

  insertMap: function() {
    var problems = this.get('problems');

    var redMarker = L.AwesomeMarkers.icon({
      icon: 'star',
      markerColor: 'darkgreen',
      prefix: 'fa'
    });

    var Stamen_Watercolor = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png', {
    	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    	subdomains: 'abcd',
    	minZoom: 1,
    	maxZoom: 15,
    	ext: 'png'
    });

    var map = L.map('indexmap', {attributionControl: false, zoomControl: false}).setView([40.866667, 10.566667], 1);


    Stamen_Watercolor.addTo(map);

    problems.forEach(function(problem) {
      L.marker(problem.get('latLng'), {icon: redMarker}).addTo(map);
    });

    return map;

  }.on('didInsertElement')
});
