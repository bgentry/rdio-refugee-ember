import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    tracks: { deserialize: 'records', serialize: false }
  },
  isNewSerializerAPI: true
});
