import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    removeMember: function(problem) {
      var adapter = this.store.adapterFor('problem');
      console.log(adapter);
      adapter.ajax("https://api.parse.com/1/classes/Problem/" + problem.id, 'PUT', {
        data: {
          'member1': {"__op":"Delete"}
        }
      }).then(function(response){
        console.log(response);
      });
    }
  }

});
