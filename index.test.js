import { newFeature } from './index';

test('should pass', () => {
  expect(3).toBe(3);
});

test('new Feature text', () => {
  expect(newFeature).toBe('And this is a new feature');
});

test('extra new Feature text', () => {
  expect(typeof newFeature).toBe('string');
});
