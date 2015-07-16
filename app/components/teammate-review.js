import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['teammate-review'],
  actions: {
    reviewTeammate: function(user, problem) {
      var problemId = problem.id;
      var currentUserId = this.get('session.currentUser').id;

      // Unique identifier that is generated when a review is submitted and saved in array on Parse user object
      var reviewKey = problemId + currentUserId;
      var reviewKeys = user.get('reviewKeys'); //user's current reviewKeys array

      console.log('this reviewKey is ', reviewKey);
      console.log('user current review keys are: ', user.get('reviewKeys'));

      var isAlreadyReviewed = _.contains(reviewKeys, reviewKey);
      console.log(isAlreadyReviewed);

      if (isAlreadyReviewed) {
        alert("You have already reviewed this team member for this problem.");
      }
      else {
        var review = {
          thinkerReview: Number(this.get('thinkerReview')),
          enablerReview: Number(this.get('enablerReview')),
          connectorReview: Number(this.get('connectorReview'))
        };

        this.sendAction('action', user, review, reviewKey);
      }
    }
  }
});
