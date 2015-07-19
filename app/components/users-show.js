import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sendUserEmail: function(comment) {
      if (this.get('session.isAuthenticated')) {
        var text =  comment;
        var senderName = this.get('session.currentUser.name');
        var senderEmail = this.get('session.currentUser.email');
        var recipientName = this.get('model.name');
        var recipientEmail = this.get('model.email');
        this.sendAction('action', text, senderName, senderEmail, recipientName, recipientEmail);
        this.set('comment', '');
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
        toastr.error('Please sign in if you wish to send a message to this user.');
      }
    }
  },

  isUser: function() {
    var profileUserId = this.get('model.id');

    var currentUserId = this.get('session.currentUser.id');
    return (profileUserId === currentUserId);
  }.property('model', 'session'),
});
