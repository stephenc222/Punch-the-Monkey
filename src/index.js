
// bring in the bouncing ball game
import { PunchTheMonkey } from './game/PunchTheMonkey';

function boot() {
  // kick off your own game here when you are ready
  
  // check out the bouncing ball game
  const game = new PunchTheMonkey();
}

// this starts our boot function once the page is loaded
document.addEventListener('DOMContentLoaded', boot, false);
