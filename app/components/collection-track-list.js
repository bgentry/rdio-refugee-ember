import Ember from 'ember';
const { sort } = Ember.computed;

export default Ember.Component.extend({
  sortedCollectionTracks: sort('collectionTracks', function(a, b) {
    const artistNameA = a.get('rdioTrack.artistName');
    const artistNameB = b.get('rdioTrack.artistName');
    if (artistNameA > artistNameB) {
      return 1;
    } else if (artistNameA < artistNameB) {
      return -1;
    }

    const albumNameA = a.get('rdioTrack.album.name');
    const albumNameB = b.get('rdioTrack.album.name');
    if (albumNameA > albumNameB) {
      return 1;
    } else if (albumNameA < albumNameB) {
      return -1;
    }

    const trackNumA = a.get('rdioTrack.trackNum');
    const trackNumB = b.get('rdioTrack.trackNum');
    if (trackNumA > trackNumB) {
      return 1;
    } else if (trackNumA < trackNumB) {
      return -1;
    }

    const trackNameA = a.get('rdioTrack.name');
    const trackNameB = b.get('rdioTrack.name');
    if (trackNameA > trackNameB) {
      return 1;
    } else if (trackNameA < trackNameB) {
      return -1;
    }

    return 0;
  })
});
