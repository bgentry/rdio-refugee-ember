import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('library', function() {
    this.route('albums', { resetNamespace: true }, function() {
      this.route('album', { path: '/:id', resetNamespace: true });
    });
  });
});

export default Router;
