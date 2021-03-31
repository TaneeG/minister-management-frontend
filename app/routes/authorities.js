import Route from '@ember/routing/route';

export default class AuthoritiesRoute extends Route {
  @service listing;

  async model() {
    return this.listing.fetchAll('authority');
  }
}
