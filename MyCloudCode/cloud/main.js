
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:

Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.define("reviewTeammate", function(request, response) {
  Parse.Cloud.useMasterKey();
  var userId = request.params.userId;
  var reviewKey = request.params.reviewKey;
  var thinkerReview = request.params.review.thinkerReview;
  var enablerReview = request.params.review.enablerReview;
  var connectorReview = request.params.review.connectorReview;
  var query = new Parse.Query("User");

  query.get(userId).then(function(user) {
    user.increment("thinker", thinkerReview);
    user.increment("enabler", enablerReview);
    user.increment("connector", connectorReview);
    user.add("reviewKeys", reviewKey);
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

Parse.Cloud.define("sendMailgun", function(request, response) {

  var Mailgun = require('mailgun');
  Mailgun.initialize('sandboxff5a943272184648b20a5c2c318b254a.mailgun.org','key-7dd87a6b809f919c0480a13c4a4f8f8d');

	var text = "Team Builder Crowdsourced Comment\n" +
		"From:" + request.params.userName + "\n" +
    "For: " + request.params.problem + "\n\n" +
		"Comments:\n" + request.params.text + "\n\n" +
    "Reply to this comment at: " + request.params.userEmail;

  var params = {
    to: request.params.problemOwner,
    from: "mailgun@sandboxff5a943272184648b20a5c2c318b254a.mailgun.org",
    subject: "Team Builder Crowdsourced Comment for: " + request.params.problem,
    text: text
  };

  var options = {
    success: function() {
      response.success(request.params + " YEAH");
    },
    error: function() {
      response.error("error on Parse Cloud");
    }
  };

  Mailgun.sendEmail(params, options);
});
