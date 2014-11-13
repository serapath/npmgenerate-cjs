var test = require('tape');

var {{projectName}} = require('../SOURCE/{{projectName}}.js');

test('{{projectName}} is a function', function (assert) {
    assert.strictEqual(typeof {{projectName}}, 'function');
    assert.end();
});
