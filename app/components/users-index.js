import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['users-index'],
  sortProperties: ['totalPoints'],

  actions: {
    sortBy: function(property) {
      this.set('sortProperties', [property]);
    }
  },

  sortedList: function() {
    console.log(this.get('sortProperties'));
    return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
      sortProperties: this.get('sortProperties'),
      sortAscending: false,
      content: this.get('model')
    });
  }.property('model', 'sortProperties')

});
