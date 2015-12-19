import DS from 'ember-data';
const { attr } = DS;

export default DS.Model.extend({
  artistId: attr('string'),
  artistName: attr('string'),
  image: attr('string'),
  name: attr('string'),
  releaseDate: attr('string'),
  spotifyId: attr('string'),
  tracks: attr(),
  upc: attr('string'),
  url: attr('string')
});
