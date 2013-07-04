var should = chai.should();
var expect = chai.expect();
describe("Application", function() {

	it("creates a global variable for its name space", function () {
		should.exist(glasswing);
	});
	it("should return the correct template", function() {
		glasswing.template("tab.html").should.equal('<a href="#<%= url %>"><%= name %></a>');
		glasswing.template("tab").should.equal('<a href="#<%= url %>"><%= name %></a>');

	});
});