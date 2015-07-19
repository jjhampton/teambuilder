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
      scaleLineColor: '#058ED9',
      responsive: true,
      maintainAspectRatio: true,
      pointLabelFontColor : '#058ED9',
    });
  }
});
