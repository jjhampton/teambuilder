import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('problem');
  },

  actions: {
    createProblem: function(problem) {
      var tagArray = [];
      $('input[name=tag]').each(function() {
        tagArray.push($(this).val());
      });
      problem.set('owner', this.get('session.currentUser'));
      problem.set('tags', tagArray);
      problem.save().then(function() {
        this.transitionTo('index');
      }.bind(this));
    }
  }
});
