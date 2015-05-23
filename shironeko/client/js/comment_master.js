// Define global object of CommentMaster
(function (global) {
  var ctor = function(){};

  global.CommentMaster = CommentMaster;
  ctor.prototype = CommentMaster.prototype;
  global.commentMaster = new ctor();

  function CommentMaster() {
    throw new Error('Cannot new singleton!');
  }

  // private variable
  var comments = [];

  // public function
  global.commentMaster.init = init;
  global.commentMaster.render = render;
  global.commentMaster.append = append;
  global.commentMaster.setSpinnerEnabled = setSpinnerEnabled;

  function getTime(time) {
    if (time < 60) {
      return "今さっき";
    } else if (time < 3600) {
      return ~~(time / 60) + "分前";
    } else if (time < 84000) {
      return ~~(time / 3600) + "時間前";
    } else {
      return ~~(time / 60) + "日前";
    }
  }

  function init() {
    var target = $("#comments");

    this.setSpinnerEnabled(true);
    target.empty();
    comments = [];
  }

  function setSpinnerEnabled(bool) {
    var display = "none"

    if (!! bool) {
      display = "block"
    }

    $("#spinner").each(function() {
      $(this).css("display", display);
    });
  }

  function render() {
    var target = $("#comments");

    for (var i = 0, len = comments.length; i < len; ++i) {
      var item = $("<li>");
      var ul = $("<ul>");
      var liComment = $("<li>");
      var liTime = $("<li>");

      liTime.addClass("time");
      liTime.text(getTime(comments[i].time));
      ul.append(liTime);
      liComment.addClass("comment");
      liComment.text(comments[i].comment);
      ul.append(liComment);
      item.append(ul);
      target.append(item);
    }
  }

  function append(comment) {
    comments.push(comment)
  }

}(this));

CommentMaster.prototype.getCommentFromUltimate = function(stageId) {
  var getElapsedTime = function(count, timeText) {
    var elapsedTime = parseInt(timeText);
    if (isNaN(elapsedTime)) {
      elapsedTime = 0;
    } else if (0 < timeText.indexOf("分")) {
      elapsedTime *= 60;
    } else if (0 < timeText.indexOf("時間")) {
      elapsedTime *= 3600;
    } else if (0 < timeText.indexOf("日")) {
      elapsedTime *= 3600;
    }

    elapsedTime += count;

    return elapsedTime;
  };
  var that = this;

  $.ajax({
    url: 'http://shironeko.me/bbs_invitation?place_id=' + stageId,
    type: "GET",
    success: function(res) {
      var data = $(res.responseText).find(".bbs_invitation").html();
      var commentArray = $(data).find("li.comment");
      var timeArray = $(data).find("li.time");

      for (var i = 0, len = Math.min(commentArray.length, 10); i < len; ++i) {
        var elapsedTime = getElapsedTime(i, timeArray[i].innerText);
        that.append({comment:commentArray[i].innerText, time:elapsedTime});
      }

      that.setSpinnerEnabled(false);
      that.render();
    }
  });
}
