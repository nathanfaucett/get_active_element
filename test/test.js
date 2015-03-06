var assert = require("assert"),
    Browser = require("zombie"),
    getActiveElement = require("../src/index");


describe("getActiveElement([ownerDocument : Document])", function() {
    before(function(done) {
        var _this = this;

        Browser.visit("http://localhost", function(e, browser) {
            _this.document = browser.window.document;
            done();
        });
    });

    it("should check if node a contains or is node b", function() {
        var a = this.document.createElement("input");

        this.document.body.appendChild(a);
        a.focus();

        assert.equal(getActiveElement(this.document), a);
    });
});
