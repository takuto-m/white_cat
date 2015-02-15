Template.stageItem.helpers({
  title: function() {
    var title = this.title;

    if (this.stage_id != 200)
    {
      title = title + "★" + (Math.floor(this.stage_id / 10) % 10);
    }

    return title;
  }
});
