// Define global object of Utility
(function (global) {
  var ctor = function(){};

  global.Utility = Utility;
  ctor.prototype = Utility.prototype;
  global.utility = new ctor();

  function Utility() {
    throw new Error('Cannot new singleton!');
  }

}(this));

getStageTitle = function(_title, _stage_id) {
    // 協力プレイは例外的に処理
    if (_stage_id != 200) {
      _title = _title + "★" + (Math.floor(_stage_id / 10) % 10);
    }

    return _title;
};
