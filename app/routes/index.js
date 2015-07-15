import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('problem');
  },

  actions: {
    getResults: function() {
      console.log('clicked');
      var query = $('.index-search-input').val();
      console.log('search input value', query);
      this.store.find('problem', 'u5UQU4E85T').then(function(response) {
        console.log(response.get('name'));
      });
    }
  }
});
