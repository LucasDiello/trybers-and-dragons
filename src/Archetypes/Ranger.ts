import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  static _instanceCount = 0;
  private _energy: EnergyType;

  constructor(_name: string) {
    super(_name);
    Ranger.incrementArchetypeInstances();
    this._energy = 'stamina';
  }

  static incrementArchetypeInstances() {
    this._instanceCount += 1;
  }

  static createdArchetypeInstances() {
    return this._instanceCount;
  }

  get energyType() {
    return this._energy;
  }
}

export default Ranger;