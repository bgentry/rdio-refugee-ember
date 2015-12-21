import DS from 'ember-data';
const { attr } = DS;

export default DS.Model.extend({
  // matches: hasMany('albumMatches'),
  rdioTrack: attr(),
  selectedMatchId: attr('number'),

  createdAt: attr('date'),
  updatedAt: attr('date')
});
