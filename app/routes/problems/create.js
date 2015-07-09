import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('problem');
  },

  actions: {
    createProblem: function(problem) {
      problem.save().then(function() {
        this.transitionTo('index');
      }.bind(this));
    }
  }
});
