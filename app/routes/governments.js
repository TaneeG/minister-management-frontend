import Route from '@ember/routing/route';


export default class GovernmentsRoute extends Route {
   model() {
    return this.store.findAll('government');
  }
}
