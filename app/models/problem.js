import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  deadline: DS.attr('date'),
  createdAt: DS.attr('date'),
  tags: DS.attr(),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  location: DS.attr('string'),
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
  member5: DS.belongsTo('parseUser', {async:true})
});
