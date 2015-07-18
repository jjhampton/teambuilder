import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addUser: function(problem) {
      this.sendAction('addUser', problem);
    },
    sendEmail: function(comment) {
      var text =  comment;
      var userName = this.get('session.currentUser.name');
      var userEmail = this.get('session.currentUser.email');
      var problem = this.get('model.name');
      var problemOwner = this.get('model.owner.email');
      this.sendAction('sendEmail', text, userName, userEmail, problem, problemOwner);
    }
  },

  isOwner: function() {
    var problemOwnerId = this.get('model.owner.id');

    var currentUserId = this.get('session.currentUser.id');
    return (problemOwnerId === currentUserId);
  }.property('model', 'session'),

  isMember: function() {
    var members = [this.get('model.owner.id'), this.get('model.member1.id'), this.get('model.member2.id'), this.get('model.member3.id'), this.get('model.member4.id'), this.get('model.member5.id')];
    console.log(members);
    var currentUserId = this.get('session.currentUser.id');
    console.log(_.contains(members, currentUserId));
    return _.contains(members, currentUserId);
  }.property('model', 'session')
});
