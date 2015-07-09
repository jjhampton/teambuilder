import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createUser: function() {
      this.sendAction('action', this.get('model'));
    },
    addInterestInput: function() {
      var interestInput = '<input class="users-create-interest" type="text" placeholder="Enter a personal interest here" name="interest">';
      $('.button-interest-add').before(interestInput);
    }
  }
});
