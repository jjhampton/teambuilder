import DS from 'ember-data';
import ParseUser from 'ember-parse-adapter/models/parse-user';

export function initialize() {
  ParseUser.reopen({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
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

    parseClassName: function(){
      return "_User";
    }
  });
}

export default {
  name: 'parse-user',
  initialize: initialize
};
