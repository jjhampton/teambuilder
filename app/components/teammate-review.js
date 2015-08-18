import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['teammate-review'],
  actions: {
    reviewTeammate: function(user, problem) {
      var review; // review object that will be sent w/ action bubbling

      // review values entered by user, sets to 0 if blank/NaN
      var thinkingReview = Number(this.get('thinkingReview') || 0);
      var actionReview = Number(this.get('actionReview') || 0);
      var socialReview = Number(this.get('socialReview') || 0);
      var commentReview = {
        problem: {
          id: problem.id,
          name: problem.get('name')
        },
        text: this.get('commentReview') || "No review comment entered",
        reviewer: {
          id: this.get('session.currentUser').id,
          name: this.get('session.currentUser.name')
        }
      };

      var scoreTotal; // sum of different review scores, not to exceed 100
      var problemId = problem.id;
      var currentUserId = this.get('session.currentUser').id;

      // Unique identifier that is generated when a review is submitted and saved in array on Parse user object
      var reviewKey = problemId + currentUserId;
      var reviewKeys = user.get('reviewKeys'); //user's current reviewKeys array

      var isAlreadyReviewed = _.contains(reviewKeys, reviewKey);

      if (isAlreadyReviewed) {
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
        toastr.error('You have already reviewed this teammate for this problem.');
      }
      else {
        scoreTotal = thinkingReview + actionReview + socialReview;
        if (scoreTotal <= 100) {
          review = {
            thinkingReview: thinkingReview,
            actionReview: actionReview,
            socialReview: socialReview,
            commentReview: commentReview
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
        else {
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
          toastr.error('Sum of review scores cannot exceed 100.');
        }
      }
    }
  }
});
