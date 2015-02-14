Meteor.publish('posts', function() {
  return Posts.find();
});

/*
Stage.publish('stage', function() {
  return Stage.find();
});
*/
