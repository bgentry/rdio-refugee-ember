import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  isNewSerializerAPI: true,
  extractId(modelClass, resourceHash) {
    return parseInt(this._super(modelClass, resourceHash));
  }
});
