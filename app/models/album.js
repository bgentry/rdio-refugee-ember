import DS from 'ember-data';
const { attr } = DS;

export default DS.Model.extend({
  tracks: attr(),

  artistName: attr('string'),
  duration: attr('number'),
  icon: attr('string'),
  isClean: attr('boolean'),
  isExplicit: attr('boolean'),
  length: attr('number'),
  name: attr('string'),
  releaseDate: attr('date'),
  shortUrl: attr('string'),
  upcs: attr()
});
