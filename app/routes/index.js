import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find('post');
  },
  actions: {
    remove: function(item){
      item.destroyRecord();
    }
  }
});
