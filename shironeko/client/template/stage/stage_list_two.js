Template.stageListTwo.helpers({
  stages_for_two: function() {
    return Stage.find({stage_id : {$lt: 400}});
  }
});
