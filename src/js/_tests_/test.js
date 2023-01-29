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

test('Проверка работы метода settings', () => {
  const setting = new Settings();
  setting.userSettings.set('music', 'rock');
  const result = new Map([
    ['theme', 'dark'],
    ['music', 'rock'],
    ['difficulty', 'easy'],
  ]);
  expect(setting.settings).toEqual(result);
});
