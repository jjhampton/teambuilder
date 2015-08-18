import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['users-index'],
  sortProperties: ['totalPoints'],

  actions: {
    sortBy: function(property) {
      $('.search-button-sort').removeClass('search-button-selected');
      $('button:hover').addClass('search-button-selected');
      this.set('sortProperties', [property]);
    }
  },

  sortedList: function() {
    return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
      sortProperties: this.get('sortProperties'),
      sortAscending: false,
      content: this.get('model')
    });
  }.property('model', 'sortProperties')

});
