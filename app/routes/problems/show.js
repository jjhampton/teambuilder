import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addUser: function(problem) {
      console.log('clicked route');
      problem.set('member1', this.get('session.currentUser'));
      problem.save().then(function() {
          this.transitionTo('index');
      }.bind(this));
      // if (problem.get('member1') !== undefined) {
      //   problem.set('member2', this.get('session.currentUser'));
      //   problem.save().then(function() {
      //     this.transitionTo('index');
      //   }.bind(this));
      // }
    }
  }
});
