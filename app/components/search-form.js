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
  },

  modifyPlaceholder: function() {
    $("input[name='queryType']").change(radioValueChanged);

    function radioValueChanged() {
      if ($('#users').is(":checked")) {
        $('.index-search-input').attr('placeholder', "Find volunteers to help you - search by keyword, location, or interests.");
      }
      else if ($('#problems').is(":checked")) {
        $('.index-search-input').attr('placeholder', "Find problems to help solve - search by keyword, location, or tags.");
      }
    }
  }.on('didInsertElement')
});
