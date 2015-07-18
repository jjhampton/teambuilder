import ValidatableForm from 'ember-cli-html5-validation/components/validatable-form';

export default ValidatableForm.extend({
  classNames: ['users-create-form'],

  actions: {
    createUser: function() {
      this.sendAction('action', this.get('model'));
    },

    addInterestInput: function() {
      var interestInput = '<input class="users-create-optional" type="text" placeholder="Enter a personal interest of yours" name="interest">';
      $('.users-create-button-addinterest').before(interestInput);
    }
  }
});
