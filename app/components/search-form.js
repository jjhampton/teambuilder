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

      var queryType = $('input[name=queryType]:checked').val();

      this.sendAction('action', escapedQuery, queryType);
    }
  }
});
