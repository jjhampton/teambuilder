import Ember from 'ember';

export default Ember.Component.extend({
  insertMap: function() {
    alert('yes');
  }.on('didInsertElement')
});
