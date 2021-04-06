import Route from '@ember/routing/route';

export default class GovernmentsGovernmentRoute extends Route {
  model() {
    return this.store.peekRecord(`$:id`);
  }
}
