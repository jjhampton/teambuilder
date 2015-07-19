import Ember from 'ember';
import ResetScroll from '../../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {

  actions: {

    reviewTeammate: function(user, review, reviewKey) {

      var adapter = this.store.adapterFor('application');

      adapter.ajax("https://api.parse.com/1/functions/reviewTeammate", "POST", {
        data: {
          userId: user.get('id'),
          review: review,
          reviewKey: reviewKey
        }
      }).then(function(response) {
        console.log('adapter.ajax response:', response.result.message);
        // this.transitionTo('index');
        user.get('reviewKeys').pushObject(reviewKey);
      }.bind(this));
    }
  }

});
