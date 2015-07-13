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
    this.route('show', {path: ':parse-user_id'});
  });

  this.route('problems', function() {
    this.route('create');
    this.route('show', {path: ':problem_id'});
    this.route('manage', {path: ':problem_id/manage'});
    this.route('review', {path: ':problem_id/review'});
  });
});

export default Router;
