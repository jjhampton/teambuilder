import DS from 'ember-data';
import ParseUser from 'ember-parse-adapter/models/parse-user';

export function initialize() {
  ParseUser.reopen({
    name: DS.attr('string', {async:true}),
    thinker: DS.attr('number', {async:true}),
    enabler: DS.attr('number', {async:true}),
    connector: DS.attr('number', {async:true}),
    email: DS.attr('string', {async:true}),
    latitude: DS.attr('number', {async:true}),
    longitude: DS.attr('number', {async:true}),
    city: DS.attr('string', {async:true}),
    state: DS.attr('string', {async:true}),
    country: DS.attr('string', {async:true}),
    age: DS.attr('number', {async:true}),
    occupation: DS.attr('string', {async:true}),
    interests: DS.attr({async:true}),
    contributions: DS.attr({async:true}),
    reviewKeys: DS.attr({async:true})
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
