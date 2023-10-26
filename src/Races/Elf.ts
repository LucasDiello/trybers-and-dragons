import Race from './Race';

class Elf extends Race {
  private _maxLife = 99;
  static _instanceCount = 0;

  constructor(
    nam: string,
    dexterit: number,
  ) {
    super(nam, dexterit);
    Elf.incrementRacesInstances();
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

export default Elf;