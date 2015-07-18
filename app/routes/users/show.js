import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    sendUserEmail: function(text, senderName, senderEmail, recipientName, recipientEmail) {
      console.log("show route > ", text, senderName, senderEmail, recipientName, recipientEmail);
      var adapter = this.store.adapterFor('application');

      adapter.ajax("https://api.parse.com/1/functions/sendMailgun", "POST", {
        data: {
          text: text,
          senderName: senderName,
          senderEmail: senderEmail,
          subject: recipientName,
          recipientEmail: recipientEmail
        }
      }).then(function(response) {
        console.log('adapter.ajax response:', response);
        // this.transitionTo('index');
      }.bind(this));
    }
  }
});
