import Ember from 'ember';
import DS from 'ember-data';
import _ from 'lodash/lodash';
const { attr } = DS;
const { computed } = Ember;

export default DS.Model.extend({
  artistId: attr('string'),
  artistName: attr('string'),
  image: attr('string'),
  name: attr('string'),
  releaseDate: attr('string'),
  spotifyId: attr('string'),
  tracks: attr(),
  upc: attr('string'),
  url: attr('string'),

  trackDurationsMs: computed.mapBy('tracks', 'durationMs'),
  durationMs: computed.sum('trackDurationsMs'),
  duration: computed('durationMs', function() {
    const ms = this.get('durationMs');
    if (!ms) {
      return ms;
    }

    return Math.floor(ms / 1000);
  }),

  explicit: computed('tracks.[]', function() {
    return _.some(this.get('tracks'), 'explicit');
  })
});
