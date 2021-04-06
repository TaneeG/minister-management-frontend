import Route from '@ember/routing/route';

export default class MinistersRoute extends Route {
  model() {
    return this.store.findAll('minister');
  }
}
