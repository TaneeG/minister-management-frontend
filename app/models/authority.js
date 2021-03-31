import Model, { hasMany }  from '@ember-data/model';


export default class AuthorityModel extends Model {
  @attr('string') title;
  @attr('number') pickOrder;
  @hasMany('minister') ministers;

}
