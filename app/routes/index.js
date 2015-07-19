import Ember from 'ember';
import ResetScroll from '../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {
  model: function() {
    return this.store.findAll('problem');
  },

  actions: {
    transitionSearch: function(query, queryType) {

      if (queryType === "users") {
        this.transitionTo('users.search', query);
      }
      else {
        this.transitionTo('problems.search', query);
      }
    }
  }
});
