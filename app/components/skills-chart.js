import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  didInsertElement: function() {
    var thinking = (this.get('user.thinking'));
    var action = (this.get('user.action'));
    var social = (this.get('user.social'));
    var ctx = $("#skillsChart").get(0).getContext("2d");
    var data = {
    labels: ["Thinking Score", "Action Score", "Social Score"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(27, 54, 255, 0.8)",
            strokeColor: "rgba(27, 54, 255, 1)",
            pointColor: "rgba(27, 54, 255, 1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [thinking, action, social]
        }
      ]
    };
    var myNewChart = new Chart(ctx).Radar(data);
  }
});
