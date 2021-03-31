import Service from '@ember/service';
import { tracked } from 'tracked-built-ins';

export default class ListingService extends Service {
  storage ={};

  constructor() {
    super(...arguments);
    this.storage.governments = tracked([]);
    this.storage.ministers = tracked([]);
    this.storage.authorities = tracked([]);
  }

  fetchAll(type) {
    if (type === 'gov'){
      return this.storage.governments
    } else if (type === 'minister'){
      return this.storage.ministers
    }else{
      return this.storage.authorities
    }
  }

  find(type, filterFn) {
    let collection;
      if (type === 'gov'){
        collection = this.governments
      } else if (type === 'minister'){
        collection = this.ministers
      }else{
        collection = this.authorities
      }
    return collection.find(filterFn);
  }
  add(type, record) {
    let collection;
    if (type === 'gov'){
      collection = this.storage.governments
    } else if (type === 'minister'){
      collection = this.storage.ministers
    }else{
      collection = this.storage.authorities
    }
    collection.push(record);
  }
}
