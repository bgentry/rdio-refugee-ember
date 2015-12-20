import DS from 'ember-data';
const { attr, hasMany } = DS;

export default DS.Model.extend({
  matches: hasMany('albumMatches'),
  rdioAlbum: attr(),
  selectedMatchId: attr('string'),

  createdAt: attr('date'),
  updatedAt: attr('date')
});
