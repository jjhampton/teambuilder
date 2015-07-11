import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    removeMember: function(problem, member) {
      this.sendAction('remove', problem, member);
    },
    updateProgress: function(problem) {
      problem.save();
    },
    markComplete: function(problem) {
      problem.set('isComplete', true);
      problem.save().then(function(response){
        console.log(response);
      });
    }
  }
});
