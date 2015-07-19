import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  deadline: DS.attr('date'),
  createdAt: DS.attr('date'),
  tags: DS.attr(),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  country: DS.attr('string'),
  trelloURL: DS.attr('string'),
  progress: DS.attr('number'),
  isComplete: DS.attr('boolean'),
  owner: DS.belongsTo('parseUser', {async:true}),
  // member1: DS.hasMany('parseUser', {async:true}),
  member1: DS.belongsTo('parseUser', {async:true}),
  member2: DS.belongsTo('parseUser', {async:true}),
  member3: DS.belongsTo('parseUser', {async:true}),
  member4: DS.belongsTo('parseUser', {async:true}),
  member5: DS.belongsTo('parseUser', {async:true}),
  latLng: function() {
    return [this.get('latitude'),  this.get('longitude')];
  }.property('latitude', 'longitude'),
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
  }.property('city', 'state', 'country'),
  members: function() {
    return [this.get('member1'), this.get('member2'), this.get('member3'), this.get('member4'), this.get('member5')];
  }.property('member1', 'member2', 'member3', 'member4', 'member5')
});
