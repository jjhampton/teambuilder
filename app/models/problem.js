import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  createdAt: DS.attr('date'),
  categories: DS.attr(),
  tags: DS.attr(),
  members: DS.attr(),
  deadline: DS.attr('date'),
  progress: DS.attr('number')
});
