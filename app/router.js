import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('legislators', { path: '/'}, function() {
    this.resource('contact', {path: 'contact/:zip'});
  });
  this.resource('bills', function() {
    this.resource('bill', { path: 'bill/:'});
  });
  this.resource('house');
  this.resource('senate');
  // this.resource('committees', function() {
  // });
});


export default Router;
