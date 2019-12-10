/**
 * Функция создания персонажа Magician, наследуется от Character,
 * принимает на вход имя и тип персонажа
 * @constructor Magician
 * @param name имя персонажа
 * @param type тип персонажа
 */
import Character from './Character.js';

export default class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
