Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('stage', function() {
  return Stage.find();
});
