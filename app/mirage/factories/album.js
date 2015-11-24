/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage/*, {faker} */ from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  releaseDate: '1998-10-06',
  duration: 4426,
  isClean: false,
  shortUrl: 'http://rd.io/x/QVrjTiJehM8/',
  upcs: [
    '075678313967'
  ],
  icon: 'http://img00.cdn2-rdio.com/album/e/8/6/000000000001d68e/6/square-200.jpg',
  name: '...Hits',
  isExplicit: false,
  artist: 'Phil Collins',
  length: 16
});
