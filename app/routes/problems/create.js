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

      console.log(this.session.currentUser);
      // problem.set('owner', this.session.currentUser);
      problem.set('tags', tagArray);
      problem.save().then(function() {
        this.transitionTo('index');
      }.bind(this));
    }
  }
});
