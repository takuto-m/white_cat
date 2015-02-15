Template.sidebar.helpers({
  stages_for_four: function() {
    return Stage.find({stage_id : {$gt: 400}});
  },
  stages_for_two: function() {
    return Stage.find({stage_id : {$lt: 400}});
  }
});
