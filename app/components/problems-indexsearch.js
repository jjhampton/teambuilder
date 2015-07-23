import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['problems-index'],
  sortProperties: ['progress'],

  actions: {
    sortBy: function(property) {
      $('.search-button-sort').removeClass('search-button-selected');
      $('button:hover').addClass('search-button-selected');
      this.set('sortProperties', [property]);
    },

    toggleOrder: function() {
      this.get('sortedList').toggleProperty('sortAscending');
    }
  },

  sortedList: function() {
    console.log(this.get('sortProperties'));
    return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
      sortProperties: this.get('sortProperties'),
      sortAscending: true,
      content: this.get('model')
    });
  }.property('model', 'sortProperties', 'sortAscending')
});
