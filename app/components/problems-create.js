import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createProblem: function() {
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
        toastr.success('Your problem was submitted!');
      }
      else {
        alert("Please fill in the required problem information fields before submitting.");
      }
    },
    addTagInput: function() {
      var tagInput = '<input class="problems-create-tag" type="text" placeholder="Enter in a tag describing your problem" name="tag">';
      $('.problems-create-button-addtag').before(tagInput);
    }
  }
});
