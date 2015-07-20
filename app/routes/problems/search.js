import Ember from 'ember';
import ResetScroll from '../../mixins/reset-scroll';


export default Ember.Route.extend(ResetScroll, {

  model: function(params) {
    return this.store.findQuery('problem', {
      where: {
        $or: [
          {name: {$regex: params.query}},
          {interests: params.query},
          {city: {$regex: params.query}},
          {state: {$regex: params.query}},
          {country: {$regex: params.query}}
        ]
      },
      name: params.query
    });
  }

});
