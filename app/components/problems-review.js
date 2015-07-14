import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    reviewTeammate: function(user, review, reviewKey) {
      this.sendAction('action', user, review, reviewKey);
    }
  }
});
