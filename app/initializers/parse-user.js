import DS from 'ember-data';
import ParseUser from 'ember-parse-adapter/models/parse-user';

export function initialize() {
  ParseUser.reopen({
    name: DS.attr('string'),
    thinking: DS.attr('number'),
    action: DS.attr('number'),
    social: DS.attr('number'),
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
    comments: DS.attr(),
    reviewKeys: DS.attr(),
    thinkingRatio: function() {
      return this.get('thinking') / (this.get('thinking') + this.get('action') + this.get('social'));
    }.property('thinking', 'action', 'social'),
    actionRatio: function() {
      return this.get('action') / (this.get('thinking') + this.get('action') + this.get('social'));
    }.property('thinking', 'action', 'social'),
    socialRatio: function() {
      return this.get('social') / (this.get('thinking') + this.get('action') + this.get('social'));
    }.property('thinking', 'action', 'social'),
    totalPoints: function() {
      return this.get('thinking') + this.get('action') + this.get('social');
    }.property('thinking', 'action', 'social'),
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
