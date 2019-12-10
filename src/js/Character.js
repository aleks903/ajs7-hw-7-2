/**
 * Функция создания персонажей, принимает на вход имя и тип персонажа
 * @constructor Character
 * @param name имя персонажа
 * @param type тип персонажа
 */
export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
  /**
  * Метод повышающий уровень персонажа
  */

  levelUp() {
    if (this.health < 1) throw new Error('Нельзя повысить левел умершего');
    this.level += 1;
    this.attack += this.attack * 0.2;
    this.defence += this.defence * 0.2;
    this.health = 100;
  }
}
