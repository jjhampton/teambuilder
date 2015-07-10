import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addUser: function(problem) {
      console.log('clicked component');
      this.sendAction('action', problem);
    }
  }
});
