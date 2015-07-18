import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sendUserEmail: function(comment) {
      console.log("users-show component clicked");
      var text =  comment;
      var senderName = this.get('session.currentUser.name');
      var senderEmail = this.get('session.currentUser.email');
      var recipientName = this.get('model.name');
      var recipientEmail = this.get('model.email');
      this.sendAction('action', text, senderName, senderEmail, recipientName, recipientEmail);
    }
  }
});
