import Component from '@glimmer/component';

export default class GovernmentListComponent extends Component {
  @service router;

  get governments() {
    return this.args.governments.map((government) => {
      return {
        government,
        isActive: this.router.isActive('governments.government', government),
      };
    });
  }
}
