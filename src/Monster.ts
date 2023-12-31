import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  constructor(
    public _lifePoints: number = 85,
    private _strength: number = 63,
  ) {
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }
  
  receiveDamage(attackPoints: number) : number {
    if (this._lifePoints < 0) {
      this._lifePoints = -1;
    }
    this._lifePoints -= attackPoints;
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);    
  }
}

export default Monster;     