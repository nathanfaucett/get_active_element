var tape = require("tape"),
    focusNode = require("focus_node"),
    getActiveElement = require("..");


tape("getActiveElement([ownerDocument : Document]) should return active node in document", function(assert) {
    var input = document.createElement("input");

    document.body.appendChild(input);
    focusNode(input);

    assert.equal(getActiveElement(document), input);
    assert.end();
});
