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

  filteredList: function(){
    // var filter = this.get('filter');
    var users = this.sortedList;

    return users.filter(function(user) {
      return user.get('name').match(rx) || country.get('continent').match(rx);
    });

  }.property('arrangedContent', 'filter')
});
