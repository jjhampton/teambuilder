import Ember from 'ember';

export default Ember.Component.extend({

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
