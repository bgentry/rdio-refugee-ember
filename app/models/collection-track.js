import DS from 'ember-data';
const { attr, hasMany } = DS;

export default DS.Model.extend({
  matches: hasMany('trackMatches'),
  rdioTrack: attr(),
  selectedMatchId: attr('number'),

  createdAt: attr('date'),
  updatedAt: attr('date')
});
