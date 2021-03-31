import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | governments/government', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:governments/government');
    assert.ok(route);
  });
});
