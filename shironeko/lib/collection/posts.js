Posts = new Mongo.Collection('posts');
/*
Posts.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    // return !! userId;
    return true;
  }
});
*/

Posts.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    console.log(doc);
    return true;
    // return !! userId;
  }
});

Meteor.methods({
  postInsert: function(postAttributes) {
    check(postAttributes, {
      title: String,
      url: String
    });

    if (Meteor.isServer) {
      postAttributes.title += "(server)";
      // wait for 5 seconds
      Meteor._sleepForMs(5000);
    } else {
      postAttributes.title += "(client)";
    }

    var user = Meteor.user();
    var post = _.extend(postAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });
    var postId = Posts.insert(post);
    return {
      _id: postId
    };
  }
});
