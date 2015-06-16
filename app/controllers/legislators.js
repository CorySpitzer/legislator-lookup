import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit: function() {
      this.transitionToRoute('contact', this.get('zip'));
    }
    // click: function() {
    //   this.transitionToRoute('bills');
    // },
    // click2: function() {
    //   this.transitionToRoute('committees');
    // }
  }
});
