import Component from '@glimmer/component';
import {tracked} from "@glimmer/tracking";

export default class GovernmentCardComponent extends Component {
  @tracked government;

  constructor() {
    super(...arguments);
  }
}
