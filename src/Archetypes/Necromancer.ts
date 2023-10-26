import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  static _instanceCount = 0;
  private _energy : EnergyType;

  constructor(_name : string) {
    super(_name);
    Necromancer.incrementArchetypeInstances();
    this._energy = 'mana';
  }

  static incrementArchetypeInstances() {
    this._instanceCount += 1;
  }

  static createdArchetypeInstances() {
    return this._instanceCount;
  }

  get energyType() : EnergyType {
    return this._energy;
  }
}

export default Necromancer;