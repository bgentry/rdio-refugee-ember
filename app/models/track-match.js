import Ember from 'ember';
import DS from 'ember-data';
const { attr, belongsTo } = DS;
const { computed } = Ember;

export default DS.Model.extend({
  spotifyAlbum: belongsTo('albumMatch'),

  albumId: attr('number'),
  spotifyId: attr('string'),
  artistId: attr('number'),
  artistName: attr('string'),
  artistUrl: attr('string'),
  durationMs: attr('number'),
  explicit: attr('boolean'),
  isrc: attr('string'),
  name: attr('string'),
  discNum: attr('number'),
  trackNum: attr('number'),
  url: attr('string'),

  duration: computed('durationMs', function() {
    const ms = this.get('durationMs');
    if (!ms) {
      return ms;
    }
    return Math.floor(ms / 1000);
  })
});
