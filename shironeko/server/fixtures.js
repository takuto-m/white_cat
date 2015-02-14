if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  });
}

/*
if (Stage.find().count() === 0) {
  Stage.insert({
    title: '草原',
    stage_id: 410
  });

  Stage.insert({
    title: '試練',
    stage_id: 420
  });

  Stage.insert({
    title: '洞窟',
    stage_id: 430
  });

  Stage.insert({
    title: '激震',
    stage_id: 440
  });

  Stage.insert({
    title: '狂乱',
    stage_id: 450
  });

  Stage.insert({
    title: '花畑',
    stage_id: 451
  });

  Stage.insert({
    title: '角',
    stage_id: 460
  });

  Stage.insert({
    title: '紅葉',
    stage_id: 461
  });

  Stage.insert({
    title: '大樹',
    stage_id: 462
  });

  Stage.insert({
    title: '奈落',
    stage_id: 470
  });

  Stage.insert({
    title: '峻烈',
    stage_id: 471
  });

  Stage.insert({
    title: '廃都',
    stage_id: 480
  });

  Stage.insert({
    title: '傀儡',
    stage_id: 481
  });

  Stage.insert({
    title: '黄昏',
    stage_id: 482
  });

  Stage.insert({
    title: '墓標',
    stage_id: 490
  });

  Stage.insert({
    title: '魔障',
    stage_id: 491
  });

  Stage.insert({
    title: '永久',
    stage_id: 492
  });

  Stage.insert({
    title: 'スタンドアップ',
    stage_id: 250
  });

  Stage.insert({
    title: 'コンツェルト',
    stage_id: 280
  });

  Stage.insert({
    title: 'ブレイクスルー',
    stage_id: 290
  });

  Stage.insert({
    title: 'フレンドシップ',
    stage_id: 291
  });

  Stage.insert({
    title: 'レボリューション',
    stage_id: 292
  });

  Stage.insert({
    title: '2人協力(助けに向かう)',
    stage_id: 200
  });
}
*/
