import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('post');
  },
  actions: {
    save: function() {
      var content = this.get('controller.content');

      content.save().then(function(){
        this.transitionTo('index');
      }.bind(this));
    }
  }
});
