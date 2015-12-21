import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login', function() {
    this.route('spotify/callback');
  });
  this.route('library', function() {
    this.route('albums', { resetNamespace: true }, function() {
      this.route('album', { path: '/:id', resetNamespace: true });
      this.route('unmatched');
    });
    this.route('tracks', { resetNamespace: true }, function() {
      this.route('track', { path: '/:id', resetNamespace: true });
      this.route('unmatched');
    });
  });
});

export default Router;
