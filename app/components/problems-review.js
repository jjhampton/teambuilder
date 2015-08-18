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

  membersToReview: function() {
    var currentUserId = this.get('session.currentUser.id');
    var allMembers = this.get('model.members');

    var membersToReview =  _.filter(allMembers, function(member) {
      return member.get('id') !== currentUserId;
    });

    return membersToReview;
  }.property('model', 'session')

});
