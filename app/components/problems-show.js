import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    joinTeam: function(problem) {
      console.log('clicked component');
      this.sendAction('action', problem);
    }
  }
});
