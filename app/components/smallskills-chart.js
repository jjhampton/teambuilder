import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  didInsertElement: function() {
    var canvasId = this.get('user.id');
    var thinking = (this.get('user.thinking'));
    var action = (this.get('user.action'));
    var social = (this.get('user.social'));
    var ctx = $("#" + canvasId).get(0).getContext("2d");
    var data = {
    labels: ["Thinking", "Action", "Social"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(64, 212, 37, 0.8)",
            strokeColor: "rgba(5, 142, 217, 1)",
            pointColor: "rgba(63, 63, 55, 1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [thinking, action, social]
        }
      ]
    };
    var myNewChart = new Chart(ctx).Radar(data, { 
      pointLabelFontColor : '#058ED9',
    });
  }
});
