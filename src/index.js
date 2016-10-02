
// bring in the bouncing ball game
import {StartGame} from './game/PunchTheMonkey';
import { PunchTheMonkey } from './game/PunchTheMonkey';

function boot() {
  
  const start = new StartGame();

  //setTimeout(mainGame(), 5000);
  
  const menu = document.getElementById('startScreen');
  menu.addEventListener('click', (event) => {
    if(event){
      ClearScreen('startScreen');
      mainGame();
    }
  });
  
  
  function ClearScreen(id){
    // check out the bouncing ball game
    const test = document.getElementById(id);
    test.parentNode.removeChild(test);
  }
  function mainGame () {
    const game = new PunchTheMonkey();
  }
  
    //let test = document.getElementById('myCanvas');
    //test.parentNode.removeChild(test);
 // }
}
// this starts our boot function once the page is loaded
document.addEventListener('DOMContentLoaded', boot, false);
