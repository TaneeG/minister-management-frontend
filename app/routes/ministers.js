import Route from '@ember/routing/route';

export default class MinistersRoute extends Route {
  @service listing;

  async model() {
    return this.listing.fetchAll('minister');
  }
}
