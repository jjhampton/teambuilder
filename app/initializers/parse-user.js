import DS from 'ember-data';
import ParseUser from 'ember-parse-adapter/models/parse-user';

export function initialize() {
  ParseUser.reopen({
    name: DS.attr('string'),
    thinker: DS.attr('number'),
    enabler: DS.attr('number'),
    connector: DS.attr('number'),
    email: DS.attr('string'),
    latitude: DS.attr('number'),
    longitude: DS.attr('number'),
    city: DS.attr('string'),
    state: DS.attr('string'),
    country: DS.attr('string'),
    age: DS.attr('number'),
    occupation: DS.attr('string'),
    interests: DS.attr(),
    contributions: DS.attr(),
    reviewKeys: DS.attr(),
    location: function() {
      var city = this.get('city');
      var state = this.get('state');
      var country = this.get('country');
      if (typeof country === "undefined" || country === null) {
        return "Outside national boundaries";
      }
      if (city && state) {
        return city + ', ' + state + ', ' + country;
      }
      else if (city) {
        return city + ', ' + country;
      }
      else if (state) {
        return state + ', ' + country;
      }
    }.property('city', 'state', 'country')
    //
    // parseClassName: function(){
    //   return "_User";
    // }
  });
}

export default {
  name: 'parse-user',
  initialize: initialize
};
