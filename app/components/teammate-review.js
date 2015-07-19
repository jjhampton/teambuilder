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
      console.log('starting reviewKeys array is', reviewKeys);
      console.log('this reviewKey is ', reviewKey);

      var isAlreadyReviewed = _.contains(reviewKeys, reviewKey);
      console.log('isAlreadyReviewed value is', isAlreadyReviewed);

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
        toastr.options = {
          "positionClass": "toast-top-right",
          "showDuration": "2000",
          "hideDuration": "2000",
          "timeOut": "3000",
          "extendedTimeOut": "2000",
          "showEasing": "linear",
          "hideEasing": "swing",
          "showMethod": "fadeIn",
          "hideMethod": "fadeOut"};
        toastr.success('Teammate Reviewed!');
      }
    }
  }
});
