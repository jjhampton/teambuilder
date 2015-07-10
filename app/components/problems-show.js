import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addUser: function(problem) {
      this.sendAction('action', problem);
    }
  }
});
