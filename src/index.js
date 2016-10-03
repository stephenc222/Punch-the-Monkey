
// bring in the bouncing ball game
import {StartGame} from './game/PunchTheMonkey';
import { PunchTheMonkey } from './game/PunchTheMonkey';
//import { changeScreen} from './game/PunchTheMonkey';

function boot() {
  
  const start = new StartGame();
  
 // const win = new changeScreen('win','win');
  //window.console.log(changeScreen1.win);
 // window.console.log(changeScreen1);
 // changeScreen1();
  

  //setTimeout(mainGame(), 5000);
  
  const menu = document.getElementById('startScreen');
  menu.addEventListener('click', (event) => {
    if(event){
      ClearScreen('startScreen');
      mainGame();
     // ClearScreen('game');
      //const changeScreen1 = new changeScreen('win', 'win');
      //changeScreen1.win('startScreen', 'win');
      //setTimeout(ClearScreen('game'), 1500);
     // window.console.log(changeScreen1.win);
    }
    
    
  });
  
  
  function ClearScreen(id){
    // check out the bouncing ball game
    const test = document.getElementById(id);
    test.parentNode.removeChild(test);
  }
  function mainGame () {
    const game = new PunchTheMonkey();
   // setTimeout(ClearScreen('game'), 2000);
  }
  
    //let test = document.getElementById('myCanvas');
    //test.parentNode.removeChild(test);
 // }
}
// this starts our boot function once the page is loaded
document.addEventListener('DOMContentLoaded', boot, false);
