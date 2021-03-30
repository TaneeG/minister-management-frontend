import Model from '@ember-data/model';
import { tracked } from '@glimmer/tracking';

export default class Minister extends Model {
  @attr('string') firstName;
  @attr('string') lastName;
  @tracked authorities;

  constructor({ id, firstName, lastName, authorities }, relationships = {}) {
    super();
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.authorities = authorities || [];
    this.relationships = relationships;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
