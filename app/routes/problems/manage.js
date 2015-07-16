import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    removeMember: function(problem, member) {
      var adapter = this.store.adapterFor('problem');
      var data = {};
      data[member] = {"__op":"Delete"};
      adapter.ajax("https://api.parse.com/1/classes/Problem/" + problem.id, 'PUT', {
        data: data
      }).then(function(){
        problem.set(member, null);
      });
    }
  }

});
