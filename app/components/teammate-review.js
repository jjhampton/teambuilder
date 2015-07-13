import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['teammate-review'],
  actions: {
    reviewTeammate: function(user) {

      var review = {
        thinkerReview: Number(this.get('thinkerReview')),
        enablerReview: Number(this.get('enablerReview')),
        connectorReview: Number(this.get('connectorReview'))
      };
      
      this.sendAction('action', user, review);
    }
  }
});
