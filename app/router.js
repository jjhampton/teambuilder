import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('problems', {path: '/'});
  this.route('sessions');
  this.route('users');
  this.route('landing');
});

export default Router;
