import { newFeature, superString } from './index';

test('should pass', () => {
  expect(3).toBe(3);
});

test('new Feature text', () => {
  expect(newFeature).toBe('sooo important new feature');
});

test('extra new Feature text', () => {
  expect(typeof newFeature).toBe('string');
});

test('super string', () => {
  expect(superString).toBe('this is a superb string');
});
