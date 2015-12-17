import Ember from 'ember';
import LazyImage from 'ember-lazy-image/components/lazy-image';

export default LazyImage.extend({
  viewportOptionsOverride: Ember.on('didInsertElement', function() {
    Ember.setProperties(this, {
      viewportUseRAF: true,
      viewportSpy: false,
      viewportRefreshRate: 500,
      viewportTolerance: {
        top: 50,
        bottom: 200,
        left: 20,
        right: 20
      }
    });
  })
});
