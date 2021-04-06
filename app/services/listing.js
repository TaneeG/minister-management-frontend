import Service from '@ember/service';
import { tracked } from 'tracked-built-ins';
import GovernmentModel from '../models/government';
import MinisterModel from '../models/minister';
import AuthorityModel from '../models/authority';
import { isArray } from '@ember/array';

function extractRelationships(object) {
  let relationships = {};
  for (let relationshipName in object) {
    relationships[relationshipName] = object[relationshipName].links.related;
  }
  return relationships;
}

export default class ListingService extends Service {
  storage = {};

  constructor() {
    super(...arguments);
    this.storage.governments = tracked([]);
    this.storage.ministers = tracked([]);
    this.storage.authorities = tracked([]);
  }

  async fetchAll(type) {
    if (type === 'gov') {
      let response = await fetch('/governments');
      let json = await response.json();
      this.loadAll(json);
      return this.governments;
    } else if (type === 'minister') {
      let response = await fetch('/ministers');
      let json = await response.json();
      this.loadAll(json);
      return this.ministers;
    } else {
      let response = await fetch('/authorities');
      let json = await response.json();
      this.loadAll(json);
      return this.authorities;
    }
  }

  find(type, filterFn) {
    let collection;
    if (type === 'gov') {
      collection = this.governments;
    } else if (type === 'minister') {
      collection = this.ministers;
    } else {
      collection = this.authorities;
    }
    return collection.find(filterFn);
  }

  add(type, record) {
    let collection;
    if (type === 'gov') {
      collection = this.storage.governments;
    } else if (type === 'minister') {
      collection = this.storage.ministers;
    } else {
      collection = this.storage.authorities;
    }
    let recordIds = collection.map((record) => record.id);
    if (!recordIds.includes(record.id)) {
      collection.push(record);
    }
  }

  loadAll(json) {
    let records = [];
    for (let item of json.data) {
      records.push(this._loadResource(item));
    }
    return records;
  }

  _loadResource(data) {
    let record;
    let { id, type, attributes, relationships } = data;
    if (type === 'gov') {
      let rels = extractRelationships(relationships);
      record = new GovernmentModel({ id, ...attributes }, rels);
      this.add('gov', record);
    } else if (type === 'minister') {
      let rels = extractRelationships(relationships);
      record = new MinisterModel({ id, ...attributes }, rels);
      this.add('minister', record);
    } else if (type === 'authority') {
      let rels = extractRelationships(relationships);
      record = new AuthorityModel({ id, ...attributes }, rels);
      this.add('authority', record);
    }
    return record;
  }

  async fetchRelated(record, relationship) {
    let url = record.relationships[relationship];
    let response = await fetch(url);
    let json = await response.json();
    if (isArray(json.data)) {
      record[relationship] = this.loadAll(json);
    } else {
      record[relationship] = this.load(json);
    }
    return record[relationship];
  }

  load(response) {
    return this._loadResource(response.data);
  }

  getpayloadType(type) {
    if (type === 'gov') {
      return 'governments';
    }
    if (type === 'minister') {
      return 'ministers';
    }
    if (type === 'authority') {
      return 'authorities';
    }
  }

  async create(type, attributes, relationships = {}) {
    let payload = {
      data: {
        type: this.getpayloadType(type),
        attributes,
        relationships,
      },
    };
    let response = await fetch('/' + this.getpayloadType(type), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/vnd.api+json',
      },
      body: JSON.stringify(payload),
    });
    let json = await response.json();
    return this.load(json);
  }

  async update(type, record, attributes) {
    let payload = {
      data: {
        id: record.id,
        type: this.getpayloadType(),
        attributes,
      },
    };
    let url = '/' + this.getpayloadType() + '/' + record.id;
    await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/vnd.api+json',
      },
      body: JSON.stringify(payload),
    });
  }

  async delete(type, record, attributes) {
    let payload = {
      data: {
        id: record.id,
        type: this.getpayloadType(),
        attributes,
      },
    };
    let url = '/' + this.getpayloadType() + '/' + record.id;
    await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/vnd.api+json',
      },
      body: JSON.stringify(payload),
    });
  }
}
