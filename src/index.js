
// bring in the bouncing ball demo
import { BounceDemo } from './bonus/BounceDemo';

function boot() {
  // kick off your own game here when you are ready
  
  // check out the bouncing ball demo
  const demo = new BounceDemo();
}

// this starts our boot function once the page is loaded
document.addEventListener('DOMContentLoaded', boot, false);
