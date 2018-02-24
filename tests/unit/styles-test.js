import { module, test } from 'ember-qunit';
import t1Styles from "ember-export-sass-variables/utils/t1";
import t2Styles from "ember-export-sass-variables/utils/t2";
import t3Styles from "ember-export-sass-variables/utils/t3";
import t4Styles from "ember-export-sass-variables/utils/t4";

module('Unit | Styles');

// Replace this with your real tests.
test('Lists are exported (t1 in app.scss)', function(assert) {
  assert.equal(t1Styles.length, 3);
  assert.equal(t1Styles[0], '1');
  assert.equal(t1Styles[1], '2');
  assert.equal(t1Styles[2], '3');
});

test('Maps are exported (t2 in app.scss)', function(assert) {
  assert.equal(t2Styles.one, '1');
  assert.equal(t2Styles.two, '2');
  assert.equal(t2Styles.three, '3');
});

test('Combination of maps and lists are exported (t3 in app.scss)', function(assert) {
  assert.equal(t3Styles.one['one-a'], '1-a');
  assert.equal(t3Styles.two, '2');
  assert.equal(t3Styles.three['three-a'], '3-a');
});

test('Deep nested maps are exported (t4 in app.scss)', function(assert) {
  assert.equal(t4Styles.a.b.c.d.one['one-a'], '1-a');
  assert.equal(t4Styles.a.b.c.d.two, '2');
  assert.equal(t4Styles.a.b.c.d.three['three-a'], '3-a');
});
