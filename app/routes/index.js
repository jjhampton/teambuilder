import Ember from 'ember';
import ResetScroll from '../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {

  activate: function(){
    $('.primary-nav').toggleClass("nav-shadow");
  },

  deactivate: function(){
    $('.primary-nav').toggleClass("nav-shadow");
  },

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
