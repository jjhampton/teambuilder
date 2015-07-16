import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel: function(params) {
    return params;
  },

  model: function(params) {
    return this.store.findQuery('parse-user', {
      where: {
        $or: [
          {name: {$regex: params.query}},
          {interests: params.query},
          {city: {$regex: params.query}},
          {state: {$regex: params.query}},
          {country: {$regex: params.query}}
        ]
      }
    });
  }
});
