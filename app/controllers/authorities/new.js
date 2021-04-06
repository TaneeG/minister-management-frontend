import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class AuthoritiesNewController extends Controller {
  @service router;

  @tracked title;
  @tracked pickOrder;

  @action
  updateTitle(event) {
    this.title = event.target.value;
  }
  @action
  updatePickOrder(event) {
    this.pickOrder = event.target.value;
  }

  @action
  async saveNew() {
    let auth = this.store.createRecord('authority', {
      title: this.title,
      pickOrder: this.pickOrder,
    });
    auth.save();
    this.router.transitionTo('authorities');
  }

  @action
  async saveUpdate(index) {
    this.store.findRecord('authority', index).then(function(auth) {
      auth.title = this.title;
      auth.pickOrder = this.pickOrder;
      auth.save();
    });
    this.router.transitionTo('authorities');
  }

  @action
  cancel() {
    this.title = '';
    this.pickOrder = 0;

    this.router.transitionTo('authorities');
  }
}
