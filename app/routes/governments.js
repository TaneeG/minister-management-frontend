import Route from '@ember/routing/route';
import Government from "../models/government";
import { inject as service } from '@ember/service';
import fetch from 'fetch';

export default class GovernmentsRoute extends Route {
  @service catalog;

  async model() {
    // let response = await fetch('/governments');
    // let json = await response.json();
    // for (let item of json.data) {
    //   let { id, attributes, relationships } = item;
    //   let rels = {};
    //   for (let relationshipName in relationships) {
    //     rels[relationshipName] =
    //       relationships[relationshipName].links.related;
    //   }
    //   let record = new Government({ id, ...attributes }, rels);
    //   this.catalog.add('gov', record);
    // }
    return this.catalog.governments;
  }
}
