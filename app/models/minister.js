import Model, { attr, hasMany } from '@ember-data/model';

export default class MinisterModel extends Model {
  @attr('string') firstName;
  @attr('string') lastName;
  @hasMany('authority') authorities;
  @hasMany('government') governments;

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
