
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:

Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.define("reviewTeammate", function(request, response) {
  Parse.Cloud.useMasterKey();
  var userId = request.params.userId;
  var thinkerReview = request.params.thinkerReview;
  var query = new Parse.Query("User");

  query.get(userId).then(function(user) {
    user.increment("thinker", thinkerReview);
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
