import Model, { hasMany } from '@ember-data/model';

export default class GovernmentModel extends Model {
  @attr('string') name;
  @attr('date') startDate;
  @attr('date') endDate;
  @hasMany('minister') ministers;
}
