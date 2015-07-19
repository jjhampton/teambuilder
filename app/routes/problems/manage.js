import Ember from 'ember';
import ResetScroll from '../../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {

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
