import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

Ember.Handlebars.registerBoundHelper('momentDate', function(date) {
  return moment(date).format('MM/DD/YYYY');
});

// Temporariliy turn off deprecation error warnings
Ember.deprecate = function(){};
Ember.warn = function(){};


export default App;
