import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    createUser: function() {
      var validationList = [this.get('model.name'), this.get('model.username'), this.get('model.password')];

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
          "timeOut": "2000",
          "extendedTimeOut": "2000",
          "showEasing": "linear",
          "hideEasing": "swing",
          "showMethod": "slideDown",
          "hideMethod": "slideUp"};
        toastr.success('Your account has been created!');
      }
      else {
        alert("Please fill in the required user information fields before submitting.");
      }
    },

    addInterestInput: function() {
      var interestInput = '<input class="users-create-optional" type="text" placeholder="Enter a personal interest of yours" name="interest">';
      $('.users-create-button-addinterest').before(interestInput);
    }
  }
});
