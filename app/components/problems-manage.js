import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    removeMember: function(problem) {
      console.log('component bubbled');
      // console.log(problem.get('member1.username'));
      // console.log('remove clicked');
      // problem.set('member1.id', "undefined");
      // problem.save();
      this.sendAction('action', problem);
    }
  }
});
