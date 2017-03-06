import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

moduleFor('ember-intl@adapter:default', 'Unit | Adapter | default');

test('localeFactory can instantiate custom translation models', function(assert) {
  const klass = Ember.Object.extend();
  this.register('model:locale', klass);
  this.adapter = this.subject();
  let model = this.adapter.localeFactory('en-us');
  assert.ok(klass.detectInstance(model), 'is an instance of the registered type');
  assert.ok(Ember.getOwner(model), 'has an owner assigned');
});