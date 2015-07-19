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
        var review = {
          thinkingReview: Number(this.get('thinkingReview')),
          actionReview: Number(this.get('actionReview')),
          socialReview: Number(this.get('socialReview'))
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
