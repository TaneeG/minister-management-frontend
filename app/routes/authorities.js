import Route from '@ember/routing/route';

export default class AuthoritiesRoute extends Route {
  model() {
    return this.store.findAll('authority');
  }
}
