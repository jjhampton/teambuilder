import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addUser: function(problem) {
      if (problem.get('member1.createdAt') === undefined) {
        problem.set('member1', this.get('session.currentUser'));
        problem.save();
      }
      else if (problem.get('member2.createdAt') === undefined) {
        problem.set('member2', this.get('session.currentUser'));
        problem.save();
      }
      else if (problem.get('member3.createdAt') === undefined) {
        problem.set('member3', this.get('session.currentUser'));
        problem.save();
      }
      else if (problem.get('member4.createdAt') === undefined) {
        problem.set('member4', this.get('session.currentUser'));
        problem.save();
      }
      else if (problem.get('member5.createdAt') === undefined) {
        problem.set('member5', this.get('session.currentUser'));
        problem.save();
      }
    }
    // addUser: function(problem) {
    //   var currentUser = this.get('session.currentUser');
    //   problem.get('members').addObject(currentUser);
    //   problem.save().then(function() {
    //     this.transitionTo('index');
    //   }.bind(this));
    // }
  }
});
