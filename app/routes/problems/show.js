import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    joinTeam: function(problem) {
      console.log(problem);
      console.log('clicked route');
      console.log(this.get('session.currentUser'));
      problem.get('members').addObject(this.get('session.currentUser'));
      problem.save().then(function() {
        this.transitionTo('index');
      }.bind(this));
    }
  }
});
