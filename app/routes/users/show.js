import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      firstName: 'David',
      lastName: 'Jones',
      thinker: 45,
      enabler: 12,
      connector: 76,
      email: 'david.jones@email.com',
      latitude: 33.87041555094183,
      longitude: -81.30569458007812,
      city: 'Columbia',
      state: 'South Carolina',
      country: 'United States',
      age: 34,
      occupation: 'architect',
      tags: ['coach', 'mentor', 'aware', 'resilient'],
      interests: ['soccer', 'sci-fi', 'design'],
      contributions: ['Home Construction Project', 'Greenville Traffic Analysis', 'Live Jazz Improv Set']
    }
  }
});
