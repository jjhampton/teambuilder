/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import('bower_components/moment/moment.js');
app.import('bower_components/pikaday/pikaday.js');
app.import('bower_components/pikaday/css/pikaday.css');
app.import('bower_components/underscore/underscore-min.js');
app.import('bower_components/planetary.js/dist/planetaryjs.min.js');
app.import('bower_components/leaflet/dist/leaflet.js');
app.import('bower_components/leaflet/dist/leaflet-src.js');
app.import('bower_components/leaflet/dist/leaflet.css');
app.import('bower_components/leaflet-control-osm-geocoder/Control.OSMGeocoder.js');
app.import('bower_components/leaflet-control-osm-geocoder/Control.OSMGeocoder.css');
app.import('bower_components/leaflet-awesome-markers/dist/leaflet.awesome-markers.min.js');
app.import('bower_components/leaflet-awesome-markers/dist/leaflet.awesome-markers.css');
app.import('bower_components/font-awesome/fonts/fontawesome-webfont.ttf');
app.import('bower_components/crypto-js/build/rollups/hmac-md5.js');
app.import('bower_components/Chart.js/Chart.min.js');
app.import('bower_components/toastr/toastr.min.js');

module.exports = app.toTree();
