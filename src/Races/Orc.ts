import Race from './Race';

class Orc extends Race {
  private _maxLife = 74;
  static _instanceCount = 0;

  constructor(
    nam: string,
    dexterit: number,
  ) {
    super(nam, dexterit);
    Orc.incrementRacesInstances();
  }

  static incrementRacesInstances() {
    this._instanceCount += 1;
  }

  static createdRacesInstances() {
    return this._instanceCount;
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }
}

export default Orc;