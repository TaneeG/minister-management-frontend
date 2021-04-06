import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class GovernmentsNewController extends Controller {
  @service listing;
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
  async save() {
    await this.listing.create('gov', {
      name: this.name,
      startDate: this.startDate,
      endDate: this.endDate,
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
