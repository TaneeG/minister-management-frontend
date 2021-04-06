import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | authorities/authority', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:authorities/authority');
    assert.ok(route);
  });
});