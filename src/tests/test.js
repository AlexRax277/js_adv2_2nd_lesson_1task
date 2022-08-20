import changeZone from '../js/app';

test('basic test', () => {
  expect(changeZone('goblin', ['zones'], 'currentZone')).toBeInstanceOf(Function);
});
