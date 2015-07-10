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
  owner: DS.belongsTo('parseUser', {async:true}),
  // members: DS.hasMany('parseUser'),
  member1: DS.belongsTo('parseUser'),
  member2: DS.belongsTo('parseUser'),
  member3: DS.belongsTo('parseUser'),
  progress: DS.attr('number')
});
