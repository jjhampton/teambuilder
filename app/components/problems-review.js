import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    reviewTeammate: function(user, review, reviewKey) {
      this.sendAction('action', user, review, reviewKey);
    }
  },

  isOwner: function() {
    var problemOwnerId = this.get('model.owner.id');
    var currentUserId = this.get('session.currentUser.id');
    return (problemOwnerId === currentUserId);
  }.property('model', 'session'),

  memberNumber: function() {

  }
});
