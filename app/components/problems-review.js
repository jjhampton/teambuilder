import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    reviewTeammate: function(user, review) {
      console.log('component pr > reviewTeammate ', review);
      this.sendAction('action', user, review);
    }
  }
});
