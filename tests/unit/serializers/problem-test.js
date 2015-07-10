import { moduleForModel, test } from 'ember-qunit';

moduleForModel('problem', 'Unit | Serializer | problem', {
  // Specify the other units that are required for this test.
  needs: ['serializer:problem']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  var record = this.subject();

  var serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
