import Race from './Race';

class Dwarf extends Race {
  private _maxLife = 80;
  static _instanceCount = 0;
                
  constructor(
    _name: string,
    _dexterity: number,
  ) {
    super(_name, _dexterity);
    Dwarf.incrementRacesInstances();
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

export default Dwarf;
