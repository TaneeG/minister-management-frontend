import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class GovernmentsNewController extends Controller {
  @service router;

  @tracked name;
  @tracked startDate;
  @tracked endDate;

  @action
  updateName(event) {
    this.name = event.target.value;
  }
  @action
  updateStartDate(event) {
    this.startDate = event.target.value;
  }
  @action
  updateEndDate(event) {
    this.endDate = event.target.value;
  }

  @action
  async saveNew() {
    let gov = this.store.createRecord('government', {
      name: this.name,
      startDate: this.startDate,
      endDate: this.endDate,
    });
    gov.save();
    this.router.transitionTo('governments');
  }

  @action
  async saveUpdate(index) {
    this.store.findRecord('government', index).then(function(gov) {
      gov.name = this.name;
      gov.startDate = this.startDate;
      gov.endDate = this.endDate;
      gov.save(); // => PATCH to '/posts/1'
    });
    this.router.transitionTo('governments');
  }

  @action
  cancel() {
    this.name = '';
    this.startDate = '';
    this.endDate = '';
    this.router.transitionTo('governments');
  }
}
