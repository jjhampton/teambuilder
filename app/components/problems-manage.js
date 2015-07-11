import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    remove: function(problem) {
      console.log('remove clicked');
      problem.set('member1', null);
      problem.save();
    }
  }
});
