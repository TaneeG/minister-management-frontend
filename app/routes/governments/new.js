import Route from '@ember/routing/route';

export default class GovernmentsNewRoute extends Route {
  resetController(controller) {
    controller.name = '';
  }
}
