import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['teammate-review'],
  actions: {
    reviewTeammate: function(user) {
      console.log('component tr > reviewTeammate');
      var thinkerReview = Number(this.get('thinkerReview'));
      var thinkerCurrent = user.get('thinker');
      console.log('thinkerReview', thinkerReview);
      console.log('thinkerCurrent', thinkerCurrent);
      this.sendAction('action', user, thinkerReview, thinkerCurrent);
    }
  }
});
