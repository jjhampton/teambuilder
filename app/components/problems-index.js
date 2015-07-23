import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['problems-index'],

  sortedList: function() {
    return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
      sortProperties: ['progress'],
      sortAscending: true,
      content: this.get('model')
    });
  }.property('model')
});
