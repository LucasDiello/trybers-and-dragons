abstract class Race {
  constructor(private nam : string, private dexterit : number) {}

  get name(): string {
    return this.nam;
  }

  get dexterity(): number {
    return this.dexterit;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}

export default Race;