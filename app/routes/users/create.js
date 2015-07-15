import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('parseUser');
  },

  actions: {
    createUser: function(user) {
      var interestArray = [];
      $('input[name=interest]').each(function() {
        interestArray.push($(this).val());
      });

      var latitude = user.get('latitude');
      var longitude = user.get('longitude');
      var latlng = latitude.toString() + ',' + longitude.toString();
      var location;
      var locationCity = '';
      var locationCountry = '';
      var geoData;

      Ember.$.ajax({
        url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latlng,
        type: 'GET',
        dataType: 'json'
      }).then(function(data) {
        geoData = data.results;
        var arrAddress = geoData[0].address_components;
        //credit: http://stackoverflow.com/questions/5341023/retrieving-postal-code-with-google-maps-javascript-api-v3-reverse-geocode
        // iterate through address_component array
        $.each(arrAddress, function (i, address_component) {
          if (address_component.types[0] === "locality"){
              locationCity = address_component.long_name;
              return false;
          }
        });
        $.each(arrAddress, function (i, address_component) {
          if (address_component.types[0] === "country"){
              locationCountry = address_component.long_name;
          }
        });
        location = locationCity + ", " + locationCountry;
      }).then(function() {
        user.set('thinker', 0);
        user.set('enabler', 0);
        user.set('connector', 0);
        user.set('location', location);
        user.set('email', user.get('username'));
        user.set('interests', interestArray);
        user.save().then(function() {
          this.get('session').authenticate('authenticator:parse-token', {
            sessionToken: user.get('sessionToken')
          });
          this.transitionTo('index');
        }.bind(this));
      }.bind(this));
    }
  }
});
