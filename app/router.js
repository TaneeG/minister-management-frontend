import EmberRouter from '@ember/routing/router';
import config from 'minister-management/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('governments', function() {
    this.route('government');
    this.route('new');
  });
  this.route('ministers');
  this.route('authorities');
});
