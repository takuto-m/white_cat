Template.stageItem.helpers({
  title: function() {
    return getStageTitle(this.title, this.stage_id);
  }
});
