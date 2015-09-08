Template.stagePage.helpers({
  title: function() {
    return getStageTitle(this.title, this.stage_id);
  },
  comments: function() {
    commentMaster.init();
    // var ultimate = commentMaster.getCommentFromUltimate(this.ultimate_id);
    var gamerch = commentMaster.getCommentFromGamerch(this.gamerch_id);
  }
});
