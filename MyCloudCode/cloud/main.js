
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:

Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});se.Cloud.define("reviewTeammate", function(request, response) {
  Parse.Cloud.useMasterKey();
  var userId = request.params.userId;
  var thinkerReview = request.params.review.thinkerReview;
  var enablerReview = request.params.review.enablerReview;
  var connectorReview = request.params.review.connectorReview;
  var query = new Parse.Query("User");

  query.get(userId).then(function(user) {
    user.increment("thinker", thinkerReview);
    user.increment("enabler", enablerReview);
    user.increment("connector", connectorReview);
    return user.save();
  }).then(function(user) {
    response.success({
      message: "Updated score for " + user.get('name')
    });
  }, function(error) {
    console.log("Failed: " +error.message);
    response.error(error);
  });
});
