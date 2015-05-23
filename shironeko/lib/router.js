Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('posts'); }
});


Router.route('/', {name: 'postsList'});

Router.route('/list/four/', {name: 'stageListFour'});
Router.route('/list/two/', {name: 'stageListTwo'});

Router.route('/posts/:_id', {
  name: 'postPage',
  data: function(){return Posts.findOne(this.params._id);}
});
Router.route('/stage/:_id', {
  name: 'stagePage',
  data: function(){return Stage.findOne(this.params._id);}
});

Router.route('/submit', {name: 'postSubmit'});

Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction('dataNotFound', {only: 'stagePage'});
