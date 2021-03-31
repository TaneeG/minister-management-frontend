import Controller from '@ember/controller';

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
    this.name = event.target.value;
  }
  @action
  updateEndDate(event) {
    this.name = event.target.value;
  }

  @action
  async save() {
    await this.listing.create('gov', { name: this.name , startDate: this.startDate, endDate:this.endDate });
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
