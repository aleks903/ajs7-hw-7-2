import Bowman from '../js/Bowman.js';

test('Проверка формирования Bowman', () => {
  const received = new Bowman('Лучник', 'Bowman');
  const expected = {
    name: 'Лучник',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(received).toEqual(expected);
});

test('Проверка levelUp Bowman', () => {
  const received = new Bowman('Лучник', 'Bowman');
  received.levelUp();
  const expected = {
    name: 'Лучник',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };

  expect(received).toEqual(expected);
});

test('Проверка levelUp Bowman.health = 1', () => {
  const received = new Bowman('Лучник', 'Bowman');
  received.health = 1;
  received.levelUp();
  const expected = {
    name: 'Лучник',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };

  expect(received).toEqual(expected);
});

test('Проверка levelUp Bowman.health = 0', () => {
  const received = new Bowman('Лучник', 'Bowman');
  received.health = 0;
  expect(() => {
    received.levelUp();
  }).toThrow();
});
