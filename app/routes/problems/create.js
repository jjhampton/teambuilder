import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('problem');
  },

  actions: {
    createProblem: function(problem) {
      var tagArray = [];
      $('input[name=tag]').each(function() {
        tagArray.push($(this).val());
      });

      var latitude = problem.get('latitude');
      var longitude = problem.get('longitude');
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
        problem.set('city', city);
        problem.set('state', state);
        problem.set('country', country);
        problem.set('owner', this.get('session.currentUser'));
        problem.set('tags', tagArray);
        problem.save().then(function() {
          this.transitionTo('index');
        }.bind(this));
      }.bind(this));
    }
  }
});
