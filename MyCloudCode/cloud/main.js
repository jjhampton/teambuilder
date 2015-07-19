
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:

Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.define("reviewTeammate", function(request, response) {
  Parse.Cloud.useMasterKey();
  var userId = request.params.userId;
  var reviewKey = request.params.reviewKey;
  var thinkingReview = request.params.review.thinkingReview;
  var actionReview = request.params.review.actionReview;
  var socialReview = request.params.review.socialReview;
  var query = new Parse.Query("User");

  query.get(userId).then(function(user) {
    user.increment("thinking", thinkingReview);
    user.increment("action", actionReview);
    user.increment("social", socialReview);
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

	var text = "Team Builder Comment\n" +
		"From: " + request.params.senderName + "\n" +
    "For: " + request.params.senderEmail + "\n\n" +
		"Comments:\n" + request.params.text + "\n\n" +
    "Reply to this comment at: " + request.params.senderEmail;

  var params = {
    to: request.params.recipientEmail,
    from: "mailgun@sandboxff5a943272184648b20a5c2c318b254a.mailgun.org",
    subject: "Team Builder Crowdsourced Comment for: " + request.params.subject,
    text: text
  };

  var options = {
    success: function() {
      response.success(request.params + " send on Mailgun succeeded");
    },
    error: function() {
      response.error("error on Parse Cloud");
    }
  };

  Mailgun.sendEmail(params, options);
});
