import Ember from 'ember';

export default Ember.Route.extend({
  
  actions: {
    reviewTeammate: function(user, thinkerReview, thinkerCurrent) {
      console.log('router > reviewTeammate');
      //convert input value to Number, for some reason it is a string even though input type="number"
      user.set('thinker', thinkerCurrent + thinkerReview);
      console.log(user.get('thinker'));
      user.save();
    }
  }
});
