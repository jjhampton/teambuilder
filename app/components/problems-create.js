import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createProblem: function() {
      this.sendAction('action', this.get('model'));
    },
    addTagInput: function() {
      var tagInput = '<input class="problems-create-tag" type="text" placeholder="Enter in a tag describing your problem" name="tag">';
      $('.button-tag-add').before(tagInput);
    }
  }
});
