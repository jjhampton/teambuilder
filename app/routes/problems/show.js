import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    // addUser: function(problem) {
    //   console.log(problem);
    //   console.log('clicked route');
    //   return Ember.$.ajax("https://api.parse.com/1/classes/Problem/" + problem.id,
    //   {
    //     type: "PUT",
    //     data: JSON.stringify({
    //       members: {
    //         __op: "AddUnique",
    //         objects: [
    //           {
    //             __type: 'Pointer',
    //             className: 'User',
    //             objectId: this.get('session.currentUser.id')
    //           }
    //         ]
    //       }
    //     })
    //   });
    // }
    addUser: function(problem) {
      console.log(this.get('session.currentUser'));
      console.log(problem);
      console.log(problem.get('members'));
      var currentUser = this.get('session.currentUser');
      problem.get('members').addObject(this.get('session.currentUser'));
      console.log(problem.get('members'));
      problem.save().then(function() {
        this.transitionTo('index');
      }.bind(this));
    }
  }
});
