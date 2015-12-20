import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
  isSelected: computed('collectionAlbum', 'match', function() {
    const selectedMatchId = this.get('collectionAlbum.selectedMatchId');
    const thisMatchId = this.get('match.id');
    return selectedMatchId === thisMatchId;
  })
});
