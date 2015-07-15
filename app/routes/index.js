import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('problem');
  },

  actions: {
    getResults: function() {
      console.log('clicked');
      var query = $('.index-search-input').val();
      console.log('search input value is: ', query);

      var problemNames = this.store.findAll('problem').then(function(response) {
        return response.map(function(problem) {
          return problem.get('name');
        });
      }).then(function(response){
        console.log(response);
      });

      console.log(problemNames);





      // var queryResult = this.store.findQuery('problem', {name: "Pikaday Test"}).then(function(response) {
      //   return response.map(function(problem) {
      //     return [problem.get('name')];
      //   });
      // });
      // console.log(queryResult);
    }
  }
});
