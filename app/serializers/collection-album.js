import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    matches: { deserialize: 'records', serialize: 'none' }
  },
  isNewSerializerAPI: true
});
