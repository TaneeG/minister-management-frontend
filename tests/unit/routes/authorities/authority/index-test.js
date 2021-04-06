import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | authorities/authority/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:authorities/authority/index');
    assert.ok(route);
  });
});
