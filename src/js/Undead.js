/**
 * Функция создания персонажа Undead, наследуется от Character,
 * принимает на вход имя и тип персонажа
 * @constructor Undead
 * @param name имя персонажа
 * @param type тип персонажа
 */
import Character from './Character.js';

export default class Undead extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
