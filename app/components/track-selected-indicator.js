import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
  tagName: 'span',

  tracksAreEqual: computed('a', 'b', function() {
    const a = this.get('a');
    const b = this.get('b');
    return parseInt(a.id) === parseInt(b.id);
  })
});
