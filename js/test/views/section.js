// require(['views/guide/section'],function(sectionView){

// 	describe("Section View", function() {
// 		describe("Initialization", function() {

// 			// beforeEach(function(){
// 			// 	this.data = {
// 	  // 				title: 'test',
// 	  // 				paragraphs : ['one','two','three']
// 	  // 			};
// 			// 	this.section = new sectionView(this.data);
// 			// })

// 	  		it("initialize should have data set", function () {

// 	  			this.section.data.should.equal(this.data);
// 	  			section.should.equal(section);

// 			})
// 		})
// 	})
// })

define(['views/guide/section'],function(sectionView){


	describe("Section View Init", function() {
		beforeEach(function(){
			this.data = {
  				title: 'I Am Title',
  				paragraphs : ['one','two','three']
  			};

			this.section = new sectionView(this.data);
		})
	  	it("initialize should set data correctly", function () {

			this.section.data.should.equal(this.data);
	 		this.section.should.equal(this.section);
	 		this.section.title.should.equal('i-am-title');
	 		this.section.$el.data('view').should.equal(this.section);

		});
	});
	describe("Section View Close", function() {
		it("should open and close correctly",function(){

			this.data = {
  				title: 'I Am Title',
  				paragraphs : ['one','two','three']
  			};

			this.section = new sectionView(this.data);

			this.section.$el.hasClass('active').should.equal(false);
			this.section.close().should.equal(this.section);


			this.section = new sectionView(this.data);
			this.section.open().should.equal(this.section);
			this.section.$el.hasClass('active').should.equal(true);

		})
	});
})