import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _player01: Fighter;
  private _player02: Fighter;
  
  constructor(player01: Fighter, player02: Fighter) {
    super(player01);
    this._player01 = player01;
    this._player02 = player02;
  }

  fight(): number {
    let player01Turn = true;
    while (this._player01.lifePoints > 0 && this._player02.lifePoints > 0) {
      if (player01Turn) {
        this._player01.attack(this._player02);
      } else {
        this._player02.attack(this._player01);
      }
      player01Turn = !player01Turn;
    }
    return super.fight();
  }
}

export default PVP;