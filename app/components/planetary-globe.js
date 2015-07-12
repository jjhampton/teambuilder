import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['problems-globe-container'],

  /* didInsertElement: function() {
    var planet = planetaryjs.planet();

    // Make the planet fit well in its canvas
    planet.loadPlugin(planetaryjs.plugins.earth({
      topojson: { file: 'assets/world-110m.json' },
      oceans:   { fill:   'blue' },
      land:     { fill:   'brown' },
      borders: {stroke: '#fff'}
    }));
    planet.projection.scale(250).translate([250, 250]);

    // Planet drag plugin - allows modificatin of rotation w/ mouse
    planet.loadPlugin(planetaryjs.plugins.drag());

    // Planet zoom plugin
    planet.loadPlugin(planetaryjs.plugins.zoom());

    // Planet autorotate
    // planet.loadPlugin(autorotate(10))

    // Load planet ping plugin
    planet.loadPlugin(planetaryjs.plugins.pings());

    // Show pings at an interval
    setInterval(function() {
      var wbdLat = 50.0800;
      var wbdLong = 8.2400;
      var gvlLat = 34.8444;
      var gvlLong = -82.3856;
      var naiLat = -1.2833;
      var naiLong = 36.8167;
      var beiLat = 39.9167;
      var beiLong = 116.3833;
      var color = 'green';
      planet.plugins.pings.add(wbdLong, wbdLat, {color: color, ttl: 1000, angle: 5});
      planet.plugins.pings.add(gvlLong, gvlLat, {color: color, ttl: 1000, angle: 5});
      planet.plugins.pings.add(naiLong, naiLat, {color: color, ttl: 1000, angle: 5});
      planet.plugins.pings.add(beiLong, beiLat, {color: color, ttl: 1000, angle: 5});
    }, 300);

    // Add planet to canvas
    var canvas = document.getElementById('globe');
    planet.draw(canvas);

    // plugin credit: http://planetaryjs.com/examples/rotating.html
    // This plugin will automatically rotate the globe around its vertical
    // axis a configured number of degrees every second.
    function autorotate(degPerSec) {
      // Planetary.js plugins are functions that take a `planet` instance
      // as an argument...
      return function(planet) {
        var lastTick = null;
        var paused = false;
        planet.plugins.autorotate = {
          pause:  function() { paused = true;  },
          resume: function() { paused = false; }
        };
        // ...and configure hooks into certain pieces of its lifecycle.
        planet.onDraw(function() {
          if (paused || !lastTick) {
            lastTick = new Date();
          } else {
            var now = new Date();
            var delta = now - lastTick;
            // This plugin uses the built-in projection (provided by D3)
            // to rotate the globe each time we draw it.
            var rotation = planet.projection.rotate();
            rotation[0] += degPerSec * delta / 1000;
            if (rotation[0] >= 180) {rotation[0] -= 360;}
            planet.projection.rotate(rotation);
            lastTick = now;
          }
        });
      };
    }
  } */
});
