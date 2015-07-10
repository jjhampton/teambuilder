import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addUser: function(problem) {
      console.log(problem);
      console.log('clicked route');

      var adapter = this.store.adapterFor('problem');
      return adapter.ajax("https://api.parse.com/1/classes/Problem/" + problem.id, "PUT", {
        data: JSON.stringify({
          members: [
              {
                __type: 'Pointer',
                className: '_User',
                objectId: this.get('session.currentUser.id')
              }
            ]
        })
      });
    }
    // addUser: function(problem) {
    //   var currentUser = this.get('session.currentUser');
    //   problem.get('members').addObject(currentUser);
    //   problem.save().then(function() {
    //     this.transitionTo('index');
    //   }.bind(this));
    // }
  }
});
