import Ember from 'ember';

export default Ember.Route.extend({
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
