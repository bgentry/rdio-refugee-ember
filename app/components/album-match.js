import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['spotify-album'],

  actions: {
    selectMatch() {
      const collectionAlbum = this.get('collectionAlbum');
      const matchId = this.get('match.id');

      function saveSuccess() {
        console.log('selected match saved!');
      }

      function saveFailure(reason) {
        console.log('selected match save failed!', reason);
      }

      collectionAlbum.set('selectedMatchId', matchId);
      collectionAlbum.save().then(saveSuccess).catch(saveFailure);
    }
  },

  // properties:

  isSelected: computed('collectionAlbum.selectedMatchId', 'match.id', function() {
    const selectedMatchId = this.get('collectionAlbum.selectedMatchId');
    // hack because I couldn't figure out how to get this ID to always be an int :(
    const thisMatchId = parseInt(this.get('match.id'));
    return selectedMatchId === thisMatchId;
  })
});
