import Model from '@ember-data/model';
import { tracked } from '@glimmer/tracking';

export default class Authority extends Model {
  @tracked title;
  @tracked pickOrder;


  constructor({ id, title,pickOrder }) {
    super();
    this.id = id;
    this.title = title;
    this.pickOrder = pickOrder;
  }
}
