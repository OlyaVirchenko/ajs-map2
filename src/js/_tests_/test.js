import Settings from '../app';

test('Проверка работы метода settings', () => {
  const setting = new Settings();
  const result = new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]);
  expect(setting.settings).toEqual(result);
});

test('Проверка работы метода settings и changeSetting(key, value)', () => {
  const setting = new Settings();
  setting.changeSetting('music', 'rock');
  const result = new Map([
    ['theme', 'dark'],
    ['music', 'rock'],
    ['difficulty', 'easy'],
  ]);
  expect(setting.settings).toEqual(result);
});
