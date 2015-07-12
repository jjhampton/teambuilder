import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'canvas',
  classNames: ['canvas-map'],
  width: 100,
  height: 100,
  attributeBindings: ['width','height'],
  didInsertElement: function() {
    alert('inserted');
    var planet = planetaryjs.planet();
    // Make the planet fit well in its canvas
    planet.loadPlugin(planetaryjs.plugins.earth({
      topojson: { file: 'assets/world-110m.json' }
    }));
    planet.projection.scale(250).translate([250, 250]);
    var canvas = document.getElementById('globe');
    planet.draw(canvas);
  }
});
