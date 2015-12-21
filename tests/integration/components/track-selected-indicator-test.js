import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('track-selected-indicator', 'Integration | Component | track selected indicator', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{track-selected-indicator}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#track-selected-indicator}}
      template block text
    {{/track-selected-indicator}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
