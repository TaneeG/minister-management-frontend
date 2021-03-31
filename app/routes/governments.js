import Route from '@ember/routing/route';
import Government from "../models/government";
import { inject as service } from '@ember/service';
import fetch from 'fetch';

export default class GovernmentsRoute extends Route {
  @service listing;

  async model() {
    return this.listing.fetchAll('gov');
  }
}
