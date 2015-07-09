import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('parseUser');
  },

  actions: {
    createUser: function(user) {
      var interestArray = new Array();
      $('input[name=interest]').each(function() {
        interestArray.push($(this).val());
      });
      
      user.set('email', user.get('username'));
      user.set('interests', interestArray);
      user.save().then(function() {
        this.get('session').authenticate('authenticator:parse-token', {
          sessionToken: user.get('sessionToken')
        });
        this.transitionTo('index');
      }.bind(this));
    }
  }
});
