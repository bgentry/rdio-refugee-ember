import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['spotify-track'],

  actions: {
    selectMatch() {
      const collectionTrack = this.get('collectionTrack');
      const matchId = this.get('match.id');

      function saveSuccess() {
        console.log('selected match saved!');
      }

      function saveFailure(reason) {
        console.log('selected match save failed!', reason);
      }

      collectionTrack.set('selectedMatchId', matchId);
      collectionTrack.save().then(saveSuccess).catch(saveFailure);
    },

    unselectMatch() {
      const collectionTrack = this.get('collectionTrack');

      function saveSuccess() {
        console.log('selected match cleared!');
      }

      function saveFailure(reason) {
        console.log('selected match clear failed!', reason);
      }

      collectionTrack.set('selectedMatchId', null);
      collectionTrack.save().then(saveSuccess).catch(saveFailure);
    }
  },

  // properties:

  isSelected: computed('collectionTrack.selectedMatchId', 'match.id', function() {
    const selectedMatchId = this.get('collectionTrack.selectedMatchId');
    // hack because I couldn't figure out how to get this ID to always be an int :(
    const thisMatchId = parseInt(this.get('match.id'));
    return selectedMatchId === thisMatchId;
  })
});

