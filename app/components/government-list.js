import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class GovernmentListComponent extends Component {
  @tracked governments;

  constructor() {
    super(...arguments);
    //
    // fetch('/governments').then((data) => {
    //   this.governments = data;
    // });
    // this.governments = this.store.findAll('government');
  }

  // get governments() {
  //   // return this.store.findAll('government');
  // }
}
