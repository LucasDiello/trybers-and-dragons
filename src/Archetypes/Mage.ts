import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  static _instanceCount = 0;
  private _energy : EnergyType;

  constructor(_name : string) {
    super(_name);
    Mage.incrementArchetypeInstances();
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

export default Mage;