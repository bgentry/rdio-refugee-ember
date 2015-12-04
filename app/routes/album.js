import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('collectionAlbum', params.id, { reload: true });
  }
});
