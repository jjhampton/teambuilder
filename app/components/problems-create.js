import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createProblem: function() {
      if (this.get('session.isAuthenticated')) {
        var validationList = [this.get('model.name'), this.get('model.description'), this.get('model.deadline')];

        function isTruthy(element) {
          return element;
        }
        var isValid = validationList.every(isTruthy);

        if (isValid) {
          this.sendAction('action', this.get('model'));
          toastr.options = {
            "positionClass": "toast-top-center",
            "showDuration": "2000",
            "hideDuration": "2000",
            "timeOut": "3000",
            "extendedTimeOut": "2000",
            "showEasing": "linear",
            "hideEasing": "swing",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"};
          toastr.success('Your problem was added!');
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
          toastr.error("Please fill in the required problem information above before submitting.");
        }
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
        toastr.error("Please sign in to add a problem that you would like help with solving.");
      }
    },
    addTagInput: function() {
      var tagInput = '<input class="problems-create-tag" type="text" placeholder="Enter in a tag describing your problem" name="tag">';
      $('.problems-create-button-addtag').before(tagInput);
    }
  }
});
