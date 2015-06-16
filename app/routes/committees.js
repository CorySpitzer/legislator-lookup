import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var houseUrl = "http://congress.api.sunlightfoundation.com/committees?chamber=house&apikey=0613f3c5dde44d699a1a8c7adb2e6ed7";
    return Ember.$.getJSON(houseUrl).then(function(responseJSON) {
      var committees = [];
      responseJSON.results.forEach(function(committee) {
        committees.push(committee);
      });
      return committees;
    });
  },
  senateModel: function() {
    var SenateUrl = "http://congress.api.sunlightfoundation.com/committees?chamber=senate&apikey=0613f3c5dde44d699a1a8c7adb2e6ed7";
    return Ember.$.getJSON(SenateUrl).then(function(responseJSON) {
      var committees = [];
      responseJSON.results.forEach(function(committee) {
        committees.push(committee);
      });
      return committees;
    });
  }
});
