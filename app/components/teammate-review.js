import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    reviewTeammate: function() {
      console.log('componenet > reviewTeammate');
      var thinkerReview = this.get('thinkerReview');
      console.log(thinkerReview);
    }
  }
});
