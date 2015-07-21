import Ember from 'ember';
import ResetScroll from '../../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {

  model: function(params) {
      return this.store.find('problem', params.problem_id).then(function(problem){
        return Ember.RSVP.hash ({
          problems: problem,
          photos: Ember.$.ajax({
            url: "https://en.wikipedia.org//w/api.php?action=query&prop=pageimages&format=json&piprop=thumbnail&pithumbsize=200&pilimit=100&generator=geosearch&redirects=&ggscoord=" + problem.get('latitude') + "%7C" + problem.get('longitude') + "&ggsradius=10000&ggslimit=50",
            type: 'GET',
            dataType: 'jsonp',
            contentType: "application/json",
            headers: {
              'User_Agent': "jjhampton.github.io"
            }
          }).then(function(response){

            function isTruthy(element) {
              return element.hasOwnProperty('thumbnail');
            }

            if (response.query) {
              var responseArray = _.toArray(response.query.pages);

              var truthyArray = _.filter(responseArray, isTruthy);

              return _.sample(truthyArray, 4);
            }
            else {
              return null;
            }
          })
        });
      });
      // console.log(problem.get('name'));
  },

  actions: {
    addUser: function(problem) {
      var adapter = this.store.adapterFor('application');
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

      // User data to be sent as Parse Cloud Code
      var userData = {
        userId: this.get('session.currentUser.id'),
        contributionId: problem.get('id'),
        contributionName: problem.get('name'),
        contributionLatLng: problem.get('latLng')
      };


      //Checks if current user's id is in membersArray, if is, sets isMember true
      if (_.indexOf(membersArray, currentUser) !== -1) {
        isMember = true;
      }



      // if not a member, allows to join team
      if (!isMember) {
        if (problem.get('member1.createdAt') === undefined) {
          problem.set('member1', this.get('session.currentUser'));
          problem.save();

          adapter.ajax("https://api.parse.com/1/functions/addContributionToUser", "POST", {
            data: userData
          }).then(function(response) {
            console.log('adapter.ajax response:', response.result.message);
            this.get('session.currentUser.contributions').pushObject({
              id: problem.get('id'),
              name: problem.get('name'),
              latLng: problem.get('latLng')
            });
            console.log(this.get('session.currentUser.contributions'));
          }.bind(this));
        }
        else if (problem.get('member2.createdAt') === undefined) {
          problem.set('member2', this.get('session.currentUser'));
          problem.save();

          adapter.ajax("https://api.parse.com/1/functions/addContributionToUser", "POST", {
            data: userData
          }).then(function() {
            this.get('session.currentUser.contributions').pushObject({
              id: problem.get('id'),
              name: problem.get('name'),
              latLng: problem.get('latLng')
            });
          }.bind(this));
        }
        else if (problem.get('member3.createdAt') === undefined) {
          problem.set('member3', this.get('session.currentUser'));
          problem.save();

          adapter.ajax("https://api.parse.com/1/functions/addContributionToUser", "POST", {
            data: userData
          }).then(function() {
            this.get('session.currentUser.contributions').pushObject({
              id: problem.get('id'),
              name: problem.get('name'),
              latLng: problem.get('latLng')
            });
          }.bind(this));
        }
        else if (problem.get('member4.createdAt') === undefined) {
          problem.set('member4', this.get('session.currentUser'));
          problem.save();

          adapter.ajax("https://api.parse.com/1/functions/addContributionToUser", "POST", {
            data: userData
          }).then(function() {
            this.get('session.currentUser.contributions').pushObject({
              id: problem.get('id'),
              name: problem.get('name'),
              latLng: problem.get('latLng')
            });
          }.bind(this));
        }
        else if (problem.get('member5.createdAt') === undefined) {
          problem.set('member5', this.get('session.currentUser'));
          problem.save();

          adapter.ajax("https://api.parse.com/1/functions/addContributionToUser", "POST", {
            data: userData
          }).then(function() {
            this.get('session.currentUser.contributions').pushObject({
              id: problem.get('id'),
              name: problem.get('name'),
              latLng: problem.get('latLng')
            });
          }.bind(this));
        }
        else {
          toastr.options = {
            "positionClass": "toast-top-right",
            "showDuration": "2000",
            "hideDuration": "2000",
            "timeOut": "3000",
            "extendedTimeOut": "2000",
            "showEasing": "linear",
            "hideEasing": "swing",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"};
          toastr.error('Sorry, this team is already full.');
        }
      }
      else {
        toastr.options = {
          "positionClass": "toast-top-right",
          "showDuration": "2000",
          "hideDuration": "2000",
          "timeOut": "3000",
          "extendedTimeOut": "2000",
          "showEasing": "linear",
          "hideEasing": "swing",
          "showMethod": "fadeIn",
          "hideMethod": "fadeOut"};
        toastr.error('You are already a member.');
      }
    },

    sendOwnerEmail: function(text, senderName, senderEmail, problem, ownerEmail) {
      console.log("show route > ", text, senderName, senderEmail, problem, ownerEmail);
      var adapter = this.store.adapterFor('application');

      adapter.ajax("https://api.parse.com/1/functions/sendMailgun", "POST", {
        data: {
          text: text,
          senderName: senderName,
          senderEmail: senderEmail,
          subject: problem,
          recipientEmail: ownerEmail
        }
      }).then(function(response) {
        console.log('adapter.ajax response:', response);
        toastr.options = {
          "positionClass": "toast-top-right",
          "showDuration": "2000",
          "hideDuration": "2000",
          "timeOut": "3000",
          "extendedTimeOut": "2000",
          "showEasing": "linear",
          "hideEasing": "swing",
          "showMethod": "fadeIn",
          "hideMethod": "fadeOut"};
        toastr.success('Email sent!');
        // this.transitionTo('index');
      }.bind(this));
    }
  }
});
