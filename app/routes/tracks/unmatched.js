import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('collectionTrack').then((tracks) => {
      return tracks.filterBy('selectedMatchId', null);
    });
  }
});
