import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createProblem: function() {
      var validationList = [this.get('model.name'), this.get('model.name'), this.get('model.description'),
      this.get('model.password')];

      function isTruthy(element) {
        return element;
      }
      var isValid = validationList.every(isTruthy);

      if (isValid) {
        this.sendAction('action', this.get('model'));
      }
      else {
        alert("Please fill in the required problem information fields before submitting.");
      }
    },
    addTagInput: function() {
      var tagInput = '<input class="problems-create-tag" type="text" placeholder="Enter in a tag describing your problem" name="tag">';
      $('.problems-create-button-addtag').before(tagInput);
    }
  }
});
