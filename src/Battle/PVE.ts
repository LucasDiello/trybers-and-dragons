import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    private player01: Fighter,
    private monsters: SimpleFighter[],
  ) {
    super(player01);
  }

  fight(): number {
    let player01Turn = true;
    while (this.player01.lifePoints > 0 
      && this.monsters.some((monster) => monster.lifePoints > 0)) {
      if (player01Turn) {
        this.monsters.forEach((monster) => {
          this.player01.attack(monster);
        });
      } else {
        this.monsters.forEach((monster) => {
          monster.attack(this.player01);
        });
      }
      player01Turn = !player01Turn;
    }
    return super.fight();
  }
}

export default PVE;