Template.stageListFour.helpers({
  stages_for_four: function() {
    return Stage.find({stage_id : {$gt: 400}});
  }
});
