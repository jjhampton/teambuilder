import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['problems-index'],

  problems: [
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
  ]
});
