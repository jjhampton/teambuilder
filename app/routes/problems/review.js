import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    // reviewTeammate: function(user, thinkerReview, thinkerCurrent) {
    //   console.log('router > reviewTeammate');
    //   user.set('thinker', thinkerCurrent + thinkerReview);
    //   console.log(user.get('thinker'));
    //   user.save();
    // }

    reviewTeammate: function(user, thinkerReview) {
      console.log('route > reviewTeammate');
      console.log('route user name is', user.get('name'));
      console.log('route user id is', user.get('id'));
      var adapter = this.store.adapterFor('application');

      adapter.ajax("https://api.parse.com/1/functions/reviewTeammate", "POST", {
        data: {
          userId: user.get('id'),
          thinkerReview: thinkerReview
        }
      }).then(function(response) {
        console.log('adapter.ajax response:', response);
      });
    }
  }

});
