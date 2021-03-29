import Model from '@ember-data/model';
import { tracked } from '@glimmer/tracking';

export default class Government extends Model {
  @tracked name;
  @tracked period;
  @tracked members;

  constructor({ id, name, period, members }, relationships = {}){
    super();
    this.id = id;
    this.name = name;
    this.members = members || [];
    this.relationships = relationships;
  }
}
