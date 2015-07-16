import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      problem: this.store.findAll('problem'),
      user: this.store.findAll('parse-user')
    });
  },

  actions: {
    getResults: function() {
      var query;
      var queryType = $('.index-search-select').val();
      console.log(queryType);

      function escapeRegExp(string) {
        return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      }
      query = escapeRegExp($('.index-search-input').val());

      if (queryType === "users") {
        this.store.findQuery('parse-user', {
          where: {
            $or: [
              {name: {$regex: query}},
              {interests: query},
              {city: {$regex: query}},
              {state: {$regex: query}},
              {country: {$regex: query}},
            ]
          }
        }).then(function(response) {
          $('.search-results-index').empty();
          if (response.content.length === 0) {
            $('.search-results-primary-heading').html("Search Results");
            $('.search-results-secondary-heading').html("Showing results for: " + query);
            $('.search-results-index').append('<p>No results found</p>');
          }
          else {
            response.content.forEach(function(element) {
              var problemName = '<p>' + '<a href="problems/' + element._data.id + '">' + element._data.name + '</p></a>';
              $('.search-results-primary-heading').html("Search Results");
              $('.search-results-secondary-heading').html("Showing results for: " + query);
              $('.search-results-index').append(problemName);
            });
          }
        });
      }
      else {
        this.store.findQuery('problem', {
          where: {
            $or: [
              {name: {$regex: query}},
              // {tags: {$regex: query}},
              {city: {$regex: query}},
              {state: {$regex: query}},
              {country: {$regex: query}},
            ]
          }
        }).then(function(response) {
          console.log(response.content.length);
          $('.search-results-index').empty();
          if (response.content.length === 0) {
            $('.search-results-primary-heading').html("Search Results");
            $('.search-results-secondary-heading').html("Showing results for: " + query);
            $('.search-results-index').append('<p>No results found</p>');
          }
          else {
            response.content.forEach(function(element) {
              var userName = '<p>' + '<a href="users/' + element._data.id + '">' + element._data.name + '</p></a>';
              $('.search-results-primary-heading').html("Search Results");
              $('.search-results-secondary-heading').html("Showing results for: " + query);
              $('.search-results-index').append(userName);
            });
          }
        });
      }
    }
  }
});
