import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  
  constructor(name: string) {
    this._race = new Elf(name, getRandomInt(1, 10));
    this._archetype = new Mage(name);
    this._maxLifePoints = (this._race.maxLifePoints / 2);
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race() : Race {
    return this._race;
  }

  get archetype() : Archetype {
    return this._archetype;
  }

  get lifePoints() : number {
    return this._lifePoints;
  }

  get strength() : number {
    return this._strength;
  }

  get defense() : number {
    return this._defense;
  }

  get dexterity() : number {
    return this._dexterity;
  }

  get energy() : Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (damage === 0) {
      this._lifePoints -= 1;
    }
    if (this._lifePoints < 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  private _addMaxLifePoints(value: number) : void {
    if (this._maxLifePoints + value < this.race.maxLifePoints) {
      this._maxLifePoints += value;
      return;
    }
    this._maxLifePoints = this._race.maxLifePoints;
  }

  private _addLifePoints(value: number) : void {
    if (this._lifePoints + value < this._maxLifePoints) {
      this._lifePoints += value;
      return;
    }
    this._lifePoints = this._maxLifePoints;
  }

  levelUp(): void {
    this._addMaxLifePoints(getRandomInt(1, 10));
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._addLifePoints(getRandomInt(1, 10));
  }

  special(enemy: Fighter): void {
    const enemySpecial = { ...enemy };
    enemySpecial.defense = 0;
    enemySpecial.receiveDamage(this._strength);
  }
}

export default Character;
