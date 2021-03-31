import Component from '@glimmer/component';

export default class GovernmentListComponent extends Component {
  @tracked governments;

  constructor() {
    super(...arguments);

    fetch('/governments').then(data => {
      this.governments = data;
    });
  }
}
