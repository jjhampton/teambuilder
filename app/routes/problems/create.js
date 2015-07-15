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
      console.log(latlng);
      var location;
      var locationCity = '';
      var locationCountry = '';
      var geoData;

      Ember.$.ajax({
        url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latlng,
        type: 'GET',
        dataType: 'json'
      }).then(function(data) {
        console.log(data);
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
        console.log("location name is", location);
      }).then(function() {
        problem.set('location', location);
        problem.set('owner', this.get('session.currentUser'));
        problem.set('tags', tagArray);
        problem.save().then(function() {
          this.transitionTo('index');
        }.bind(this));
      }.bind(this));
    }
  }
});
