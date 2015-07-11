import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    removeMember: function(problem, member) {
      this.sendAction('action', problem, member);
    }
  }
});
