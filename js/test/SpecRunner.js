require(['../main'],function(main){
  require.config({baseUrl : '../../glasswing/js'});

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
      // 'test/views/section',
      // 'test/router',
      // 'test/views/section',

      // 'test/views/guide/chapter',
    ], function(require, config) {
      mocha.run();
    });
    // require([
    //   'test/glasswing.js',
    // ], function(glasswing) {
    //   mocha.run();
    // });

  });
});
