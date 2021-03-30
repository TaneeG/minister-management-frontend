import Model from '@ember-data/model';
import { tracked } from '@glimmer/tracking';

export default class Government extends Model {
  @attr('string') name;
  @attr('date') startDate;
  @attr('date') endDate;
  @tracked ministers;

  constructor({ id, name, period, ministers }, relationships = {}){
    super();
    this.id = id;
    this.name = name;
    this.ministers = ministers || [];
    this.relationships = relationships;
  }
}
