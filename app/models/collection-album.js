import DS from 'ember-data';
const { attr, belongsTo } = DS;

export default DS.Model.extend({
  rdioAlbum: attr(),

  createdAt: attr('date'),
  updatedAt: attr('date')
});
