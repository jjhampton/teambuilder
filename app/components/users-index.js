import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['users-index'],

  sortedList: function() {
    return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
      sortProperties: ['totalPoints'],
      sortAscending: false,
      content: this.get('model')
    });
  }.property('model'),
});
