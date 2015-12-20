import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('collectionAlbum').then((albums) => {
      return albums.filterBy('selectedMatchId', null);
    });
  }
});
