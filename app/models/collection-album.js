import DS from 'ember-data';
const { attr, belongsTo } = DS;

export default DS.Model.extend({
  matches: attr(),
  rdioAlbum: attr(),
  selectedMatchId: attr('number'),

  createdAt: attr('date'),
  updatedAt: attr('date')
});
