describe("Router", function() {
	var router = glasswing.router, pushStateSpy;
	var config = glasswing.config;
  	it("router should exist", function () {
  		should.exist(router);
  		(router.guide).should.exist;

		// this.section.data.should.equal(this.data);
 	// 	this.section.should.equal(this.section);
 	// 	this.section.title.should.equal('i-am-title');
 	// 	this.section.$el.data('view').should.equal(this.section);

	});


    it('has a "home" route and it works', function () {
        (router.routes['']).should.equal(config.routes.home);
        (router.routes['guide']).should.equal(config.routes.home);
        (router.routes['guide/']).should.equal(config.routes.home);

        // (glasswing.router.initial_route).should.equal(true);
        router.navigate('');
        console.log(router.guide.$titlePage.html());

				// this.$titlePage.animate({left: '0%'},this.animation.page,'easeInOutQuad');
				// this.sidebar.$el.animate({left: '100%'},this.animation.page,'easeInOutQuad');
				// this.$glasswing.animate({left: '100%'}, this.animation.page, 'easeInOutQuad');


        // (glasswing.router.initial_route).should.equal(false);

        // router.navigate('procedure/2');

        (router.guide).should.exist;

    });
    it('has a "home" route', function () {
        // (router.routes['']).should.equal('home');
    });
});
