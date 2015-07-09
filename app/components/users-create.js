import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createUser: function() {
      console.log(this.get('model'));
      this.sendAction('action', this.get('model'));
    }
  }
});
