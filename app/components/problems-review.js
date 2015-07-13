import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    reviewTeammate: function(user, review) {
      this.sendAction('action', user, review);
    }
  }
});
