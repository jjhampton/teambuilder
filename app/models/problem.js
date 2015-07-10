import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  deadline: DS.attr('date'),
  createdAt: DS.attr('date'),
  tags: DS.attr(),
  city: DS.attr('string'),
  state: DS.attr('string'),
  country: DS.attr('string'),
  trelloURL: DS.attr('string'),
  progress: DS.attr('number'),
  owner: DS.belongsTo('parseUser', {async:true}),
  // member1: DS.hasMany('parseUser', {async:true}),
  member1: DS.belongsTo('parseUser'),
  member2: DS.belongsTo('parseUser'),
  member3: DS.belongsTo('parseUser'),
  member4: DS.belongsTo('parseUser'),
  member5: DS.belongsTo('parseUser')
});
