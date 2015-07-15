import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('problem');
  },

  actions: {
    getResults: function() {
      var query = $('.index-search-input').val();

     this.store.findAll('problem').then(function(response) {
        return response.map(function(problem) {
          return [problem.get('id'), problem.get('name'), problem.get('tags'), problem.get('location')];
        });
      }).then(function(response){
        console.log("Problem searchables are", response);
        console.log("search query was", query);
        var matched = _.filter(response, function(problem){
          return _.contains(problem, query);
        });
        console.log(matched[0][1]);
      });






      // var queryResult = this.store.findQuery('problem', {name: "Pikaday Test"}).then(function(response) {
      //   return response.map(function(problem) {
      //     return [problem.get('name')];
      //   });
      // });
      // console.log(queryResult);
    }
  }
});
