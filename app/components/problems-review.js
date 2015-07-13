import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    reviewTeammate: function(user, thinkerReview, thinkerCurrent) {
      console.log('component pr > reviewTeammate');
      this.sendAction('action', user, thinkerReview, thinkerCurrent);
    }
  }
});
