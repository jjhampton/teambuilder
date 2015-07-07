import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {
        name: "Jones Family Home"
      },
      {
        name: "Greenville Traffic Analysis"
      },
      {
        name: "Middle School Math Tutoring"
      },
      {
        name: "Community Garden Needs"
      }
    ];
  }
});
