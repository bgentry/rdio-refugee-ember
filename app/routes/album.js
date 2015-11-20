import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // TODO: I think this is the wrong way to find a model
    return this.store.find('album', this.paramsFor('album').album_id);
  }
});
