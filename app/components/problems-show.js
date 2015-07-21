import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    addUser: function(problem) {
      if (this.get('session.isAuthenticated')) {
        this.sendAction('addUser', problem);
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
        toastr.error('Please sign in if you wish to join a team.');
      }
    },

    sendOwnerEmail: function(comment) {
      if (this.get('session.isAuthenticated')) {
        if (comment) {
          var text =  comment;
          var senderName = this.get('session.currentUser.name');
          var senderEmail = this.get('session.currentUser.email');
          var problem = this.get('model.name');
          var ownerEmail = this.get('model.owner.email');
          this.sendAction('sendOwnerEmail', text, senderName, senderEmail, problem, ownerEmail);
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
          toastr.error('Please enter the message that you wish to send to the problem owner.');
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
        toastr.error('Please sign in if you wish to send a message to the problem owner.');
      }
    }
  },

  isOwner: function() {
    var problemOwnerId = this.get('model.owner.id');

    var currentUserId = this.get('session.currentUser.id');
    return (problemOwnerId === currentUserId);
  }.property('model', 'session'),

  isMember: function() {
    var members = [this.get('model.owner.id'), this.get('model.member1.id'), this.get('model.member2.id'), this.get('model.member3.id'), this.get('model.member4.id'), this.get('model.member5.id')];
    var currentUserId = this.get('session.currentUser.id');
    return _.contains(members, currentUserId);
  }.property('model', 'session')
});
