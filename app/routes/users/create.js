import Ember from 'ember';
import ResetScroll from '../../mixins/reset-scroll';


export default Ember.Route.extend(ResetScroll, {
  model: function() {
    return this.store.createRecord('parseUser');
  },

  actions: {
    createUser: function(user) {
      var interestArray = [];
      $('input[name=interest]').each(function() {
        if ($(this).val()) {
          interestArray.push($(this).val());
        }
      });

      var latitude = user.get('latitude');
      var longitude = user.get('longitude');
      var latlng = latitude.toString() + ',' + longitude.toString();
      var city;
      var state;
      var country;
      var geoData;

      Ember.$.ajax({
        url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latlng,
        type: 'GET',
        dataType: 'json'
      }).then(function(data) {
        geoData = data.results;
        if (geoData.length > 0) {
          var arrAddress = geoData[0].address_components;

          //credit: http://stackoverflow.com/questions/5341023/retrieving-postal-code-with-google-maps-javascript-api-v3-reverse-geocode
          // iterate through address_component array
          $.each(arrAddress, function (i, address_component) {
            if (address_component.types[0] === "locality"){
                city = address_component.long_name;
                return false;
            }
          });
          $.each(arrAddress, function (i, address_component) {
            if (address_component.types[0] === "administrative_area_level_1"){
                state = address_component.long_name;
                return false;
            }
          });
          $.each(arrAddress, function (i, address_component) {
            if (address_component.types[0] === "country"){
                country = address_component.long_name;
            }
          });
        }
        else {
          city = null;
          state = null;
          country = null;
        }
      }).then(function() {
        user.set('reviewKeys', []);
        user.set('thinker', 0);
        user.set('enabler', 0);
        user.set('connector', 0);
        user.set('city', city);
        user.set('state', state);
        user.set('country', country);
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
