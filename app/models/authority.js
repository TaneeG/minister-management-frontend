import Model, { hasMany, attr } from '@ember-data/model';

export default class AuthorityModel extends Model {
  @attr('string') title;
  @attr('number') pickOrder;
  @hasMany('minister') ministers;
}
