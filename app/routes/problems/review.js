import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('problem', params.problem_id);
  },

  actions: {
    reviewTeammate: function(user, review) {
      console.log(this.get('model'));
      console.log('route > reviewTeammate ', review);

      var adapter = this.store.adapterFor('application');

      adapter.ajax("https://api.parse.com/1/functions/reviewTeammate", "POST", {
        data: {
          userId: user.get('id'),
          review: review
        }
      }).then(function(response) {
        console.log('adapter.ajax response:', response);
      });
    }.bind(this)
  }

});
