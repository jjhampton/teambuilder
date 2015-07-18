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
    console.log(problemOwnerId);

    var currentUserId = this.get('session.currentUser.id');
    console.log(currentUserId);
    return (problemOwnerId === currentUserId);
  }.property('model', 'session')
});
//
// latLng: function() {
//   return [this.get('latitude'),  this.get('longitude')];
// }.property('latitude', 'longitude')
