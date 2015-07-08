import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'});

  this.route('sessions', function() {
    this.route('create');
  });

  this.route('users', function() {
    this.route('create');
    this.route('show');
  });

  this.route('problems', function() {
    this.route('create');
    this.route('show', {path: '/:problem_id'});
    this.route('edit', {path: '/:problem_id/edit'});
    this.route('manage', {path: '/:problem_id/manage'} );
  });
});

export default Router;
