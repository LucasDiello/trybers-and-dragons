import Race from './Race';

class Halfling extends Race {
  private _maxLife = 60;
  static _instanceCount = 0;

  constructor(
    _name: string,
    _dexterity: number,
  ) {
    super(_name, _dexterity);
    Halfling.incrementRacesInstances();
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

export default Halfling;