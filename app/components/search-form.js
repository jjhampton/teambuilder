import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['index-search-form'],

  actions: {
    sendQuery: function() {
      function escapeRegExp(string) {
        return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      }
      var escapedQuery = escapeRegExp(this.get('query'));

      var queryType = $('.index-search-select').val();

      this.sendAction('action', escapedQuery, queryType);
    }
  }
});
