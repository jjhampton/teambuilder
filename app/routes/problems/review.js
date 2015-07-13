import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    reviewTeammate: function(user, thinkerReview, thinkerCurrent) {
      console.log('router > reviewTeammate');
      user.set('thinker', thinkerCurrent + thinkerReview);
      console.log(user.get('thinker'));
      user.save();
    }
  }
});
