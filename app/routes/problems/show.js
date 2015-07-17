import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    addUser: function(problem) {
      //initialize isMember as false before checking
      var isMember = false;
      var currentUser = this.get('session.currentUser.id');
      var membersArray = [
        problem.get('owner.id'),
        problem.get('member1.id'),
        problem.get('member2.id'),
        problem.get('member3.id'),
        problem.get('member4.id'),
        problem.get('member5.id')
      ];

      //Checks if current user's id is in membersArray, if is, sets isMember true
      if (_.indexOf(membersArray, currentUser) !== -1) {
        isMember = true;
      }

      // if not a member, allows to join team
      if (!isMember) {
        if (problem.get('member1.createdAt') === undefined) {
          problem.set('member1', this.get('session.currentUser'));
          problem.save();
        }
        else if (problem.get('member2.createdAt') === undefined) {
          problem.set('member2', this.get('session.currentUser'));
          problem.save();
        }
        else if (problem.get('member3.createdAt') === undefined) {
          problem.set('member3', this.get('session.currentUser'));
          problem.save();
        }
        else if (problem.get('member4.createdAt') === undefined) {
          problem.set('member4', this.get('session.currentUser'));
          problem.save();
        }
        else if (problem.get('member5.createdAt') === undefined) {
          problem.set('member5', this.get('session.currentUser'));
          problem.save();
        }
      }
      else {
        alert("You are already a member.");
      }
    // addUser: function(problem) {
    //   var currentUser = this.get('session.currentUser');
    //   problem.get('members').addObject(currentUser);
    //   problem.save().then(function() {
    //     this.transitionTo('index');
    //   }.bind(this));
    // }
    },

    sendEmail: function(text, userName, userEmail, problem, problemOwner) {
      console.log("show route > ", text, userName, userEmail, problem, problemOwner);
      var adapter = this.store.adapterFor('application');

      adapter.ajax("https://api.parse.com/1/functions/sendMailgun", "POST", {
        data: {
          text: text,
          userName: userName,
          userEmail: userEmail,
          problem: problem,
          problemOwner: problemOwner
        }
      }).then(function(response) {
        // console.log('adapter.ajax response:', response);
        // this.transitionTo('index');
      }.bind(this));
    }
  }
});
