import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    reviewTeammate: function(user) {
      console.log('component tr > reviewTeammate');
      var thinkerReview = Number(this.get('thinkerReview'));
      var thinkerCurrent = user.get('thinker');
      console.log(thinkerReview);
      console.log(typeof thinkerReview);
      console.log(thinkerCurrent);
      this.sendAction('action', user, thinkerReview, thinkerCurrent);
    }
  }
});
