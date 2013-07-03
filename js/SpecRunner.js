
require(['main'],function(main){
  var should;
  require(['chai','chaiJquery'], function(chai, chaiJquery){

    // Chai

    should = chai.should();
    chai.use(chaiJquery);
    // console.log('1');
    // console.log(chaiJquery);

    /*globals mocha */
    mocha.setup('bdd');
    // console.log('2');
    require([
      'test/glasswing',
      'test/config',
      'test/router',
      // 'test/router',
      // 'test/views/section',

      // 'test/views/guide/chapter',
    ], function(require, sectionView, router) {
      mocha.run();
    });
    // require([
    //   'test/glasswing.js',
    // ], function(glasswing) {
    //   mocha.run();
    // });

  });
});
