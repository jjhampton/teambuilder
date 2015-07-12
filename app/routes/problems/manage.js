import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('problem');
  },

  actions: {
    removeMember: function(problem, member) {
      console.log('clicked route');
      var adapter = this.store.adapterFor('problem');
      var data = {};
      data[member] = {"__op":"Delete"};
      console.log(adapter);
      console.log('member in route is', member);
      adapter.ajax("https://api.parse.com/1/classes/Problem/" + problem.id, 'PUT', {
        data: data
      }).then(function(){
        problem.set(member, null);
      });
    }
  }

});
