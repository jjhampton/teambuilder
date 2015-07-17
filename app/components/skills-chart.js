import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    var thinker = (this.get('user.thinker'));
    var enabler = (this.get('user.enabler'));
    var connector = (this.get('user.connector'));
    var ctx = $("#skillsChart").get(0).getContext("2d");
    var data = {
    labels: ["Thinker", "Enabler", "Connector"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(27, 54, 255, 0.8)",
            strokeColor: "rgba(27, 54, 255, 1)",
            pointColor: "rgba(27, 54, 255, 1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [thinker, enabler, connector, 1465, 4334, 4103]
        }
      ]
    };
    var myNewChart = new Chart(ctx).Radar(data);
  }
});
