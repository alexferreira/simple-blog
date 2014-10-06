import Ember from 'ember';

export default Ember.View.extend({
  templateName: 'post/row',
  didInsertElement: function(){
    this.$().hide().fadeIn('slow');
  },
  willDestroyElement: function(){
    var clone = this.$().clone();
    this.$().parent().append(clone);
    clone.fadeOut();
  }
});
