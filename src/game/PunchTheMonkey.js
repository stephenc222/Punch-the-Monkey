// Punch the Monkey Game

export class StartGame {
  constructor(){
    this._init();
    //this._create();
  }  
    
  _init() {
    document.title = 'Punch the Monkey';
    this.canvas = document.createElement('canvas');
    this.canvas.setAttribute('id', 'startScreen');
    // the line below changes the cursor to a fist
    //this.canvas.style.cursor = 'url(./fist.png), auto';
    this.canvas.width = 640; // 640 originally
    this.canvas.height = 480; // 480 orig
    document.body.insertBefore(this.canvas, document.body.firstChild);
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = 'lightblue';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    // writing of "Start Game" here 
    // this.ctx.save();
    this.ctx.font = 'bold 36px sans-serif';
    this.ctx.fillStyle = 'black';
    this.ctx.textBaseline = 'center';
    this.ctx.save();
    const text1 = 'Start Game';
    this.ctx.fillText(text1, this.canvas.width/2-this.ctx.measureText(text1).width/2, this.canvas.height/2);
    this.ctx.restore();
    this.ctx.font = 'bold 18px sans-serif';
    const text2 = 'click to begin';
    //this.ctx.clearRect(16, 16, this.ctx.measureText(text1), 16);
    this.ctx.fillText(text2, this.canvas.width/2-this.ctx.measureText(text2).width/2, this.canvas.height/2+30);

    this.ctx.restore();
    
    return;
  }
  
    
  
}

class changeScreen{
      // removes current canvas element
  constructor(id){
    this._init(id);
  }
  //console.log(this);
  //changeScreen(id, winOrLoseScreenOption);
  _init(id){
    //window.console.log('this id inside lose: ' + id);
    //win('game');
    if(id === 'win'){
      window.console.log('win() called here');
      //window.console.log(win());
      let winScreen = win();
    } else if(id === 'lose'){
      window.console.log('lose() called here');
      //window.console.log(lose());
      let loseScreen = lose();
    }
    
    function win () {
      
      window.console.log('this id arg inside lose: ' + id);
      
      const gameNode = document.getElementById('game');
      gameNode.parentNode.removeChild(gameNode);

      const canvas = document.createElement('canvas');
      window.console.log(canvas);
      canvas.setAttribute('id','win');
      canvas.width = 641; // 640 originally
      canvas.height = 480; // 480 orig
      document.body.insertBefore(canvas, document.body.firstChild);
      canvas.ctx = canvas.getContext('2d');
      canvas.ctx.fillStyle = 'orange';
      canvas.ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // writing of "Win Game" here 
      canvas.ctx.save();
      canvas.ctx.font = 'bold 36px sans-serif';
      canvas.ctx.fillStyle = 'black';
      canvas.ctx.textBaseline = 'center';
      canvas.ctx.save();
      const text1 = 'So you beat my Game?';
      canvas.ctx.fillText(text1, canvas.width/2-canvas.ctx.measureText(text1).width/2, canvas.height/2);
      canvas.ctx.restore();
      canvas.ctx.font = 'bold 18px sans-serif';
      const text2 = 'anyone could do it - click reload to play again';
      //this.ctx.clearRect(16, 16, this.ctx.measureText(text1), 16);
      canvas.ctx.fillText(text2, canvas.width/2-canvas.ctx.measureText(text2).width/2, canvas.height/2+30);
  
      canvas.ctx.restore();
      return canvas;
    }
    
    function lose () {

      window.console.log('this id arg inside lose: ' + id);
      
      
      const gameNode = document.getElementById('game');
      gameNode.parentNode.removeChild(gameNode);
      
      const canvas = document.createElement('canvas');
      window.console.log(canvas);
      canvas.setAttribute('id','lose');
      // the line below changes the cursor to a fist
      // this.canvas.style.cursor = 'url(./fist.png), auto';
      canvas.width = 641; // 640 originally
      canvas.height = 480; // 480 orig
      document.body.insertBefore(canvas, document.body.firstChild);
      canvas.ctx = canvas.getContext('2d');
      canvas.ctx.fillStyle = 'wheat';
      canvas.ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // writing of "lose Game" here 
      canvas.ctx.save();
      canvas.ctx.font = 'bold 36px sans-serif';
      canvas.ctx.fillStyle = 'black';
      canvas.ctx.textBaseline = 'center';
      canvas.ctx.save();
      const text1 = 'So you lost?';
      canvas.ctx.fillText(text1, canvas.width/2-canvas.ctx.measureText(text1).width/2, canvas.height/2);
      canvas.ctx.restore();
      canvas.ctx.font = 'bold 18px sans-serif';
      const text2 = 'who cares, its just a game - click reload to play again';
      //this.ctx.clearRect(16, 16, this.ctx.measureText(text1), 16);
      canvas.ctx.fillText(text2, canvas.width/2-canvas.ctx.measureText(text2).width/2, canvas.height/2+30);
  
      canvas.ctx.restore();
      return canvas;
     // window.console.log(canvas);
    }
    //changeScreen(id,winOrLoseScreenOption);
  }
  
  
}
     // const gameNode = document.getElementById(id);
     // gameNode.parentNode.removeChild(gameNode);
    
      // how my screen changes base on win or lose
      /*
      this.canvas = document.createElement('canvas');
      this.canvas.setAttribute('id',toString(WinOrLoseScreen.toString()));
      // the line below changes the cursor to a fist
      // this.canvas.style.cursor = 'url(./fist.png), auto';
      this.canvas.width = 640; // 640 originally
      this.canvas.height = 480; // 480 orig
      document.body.insertBefore(this.canvas, document.body.firstChild);
      this.ctx = this.canvas.getContext('2d');
      this.ctx.fillStyle = 'lightblue';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      
      // writing of "Start Game" here 
      // this.ctx.save();
      this.ctx.font = 'bold 36px sans-serif';
      this.ctx.fillStyle = 'black';
      this.ctx.textBaseline = 'center';
      this.ctx.save();
      const text1 = 'Start Game';
      this.ctx.fillText(text1, this.canvas.width/2-this.ctx.measureText(text1).width/2, this.canvas.height/2);
      this.ctx.restore();
      this.ctx.font = 'bold 18px sans-serif';
      const text2 = 'click to begin';
      //this.ctx.clearRect(16, 16, this.ctx.measureText(text1), 16);
      this.ctx.fillText(text2, this.canvas.width/2-this.ctx.measureText(text2).width/2, this.canvas.height/2+30);
  
      this.ctx.restore();
      */


export class PunchTheMonkey {
  constructor() {
    this._init();
    this._create();
  }
  
  _init() {
    document.title = 'Punch the Monkey';
    this.canvas = document.createElement('canvas');
    this.canvas.setAttribute('id', 'game');
    // the line below changes the cursor to a fist
    this.canvas.style.cursor = 'url(./fist.png), auto';
    this.canvas.width = 640; // 640 originally
    this.canvas.height = 480; // 480 orig
    document.body.insertBefore(this.canvas, document.body.firstChild);
    this.ctx = this.canvas.getContext('2d');
    
  }

  _create() {
    const { ctx, canvas } = this;
    const chimp_base = new Image();
    chimp_base.src = './chimp_base.png';
    
    // adding player data here
    const player_data = {
      'score': 0,
      'lives': 3
    };

    
    const chimp = {
      speed: 100, // 300
      angle: 0,
      wasHit: false,
      wasMissed: false,
      x: canvas.width * 0.5,
      y: canvas.height * 0.5,
      vx: 1,
      vy: -1,
      // TODO color prop is temporary, just to help with sprite alignment
      //color: 'yellow',
      image: chimp_base,
      radius: 45,
      TO_RADIANS: Math.PI / 180,// adjusted from 60 to better fit chimp base sprite
      
      reset() {
        // HACK added reset to chimp.angle to 0 radians
        chimp.angle = 0;
        chimp.vx = -1;// + 0.5;// + Math.random() * 1;
        chimp.vy = -1;// + 0.5;// + Math.random() * 1;
      },

      move() {
        if(!chimp.wasHit){
          if (chimp.x < chimp.radius || chimp.x + chimp.radius > canvas.width) {
            chimp.vx = -chimp.vx;
          }
          if (chimp.y < chimp.radius || chimp.y + chimp.radius > canvas.height) {
            chimp.vy = -chimp.vy;
          }
        }
      },
      
      spinOnHit() { // lose the param here too
        //TODO add 'spin' animation when player 'punches', (clicks) on monkey
        
        chimp.wasHit = true;
        window.console.log('monkey was hit so score: '+player_data.score);
        // gameLoop for win closed successfully here
        if(player_data.score === 10){  
          clearInterval(gameLoop);
          window.console.log('game loop closed for WIN here*');
          const win = new changeScreen('win');
          window.console.log('WIN is instantiated here...');
          window.console.log(win);
          return win;
        }
        //player_data.score === 10 && changeScreen('win','win');
        // right is that a local variable in *this* function? ok!
        chimp.vx = 0;
        chimp.vy = 0;
        //window.console.log(rate);
        const SPIN_TIME = 1000; // it won't change, make it const
        // if that's easier for you to understand
        // SPIN_TIME would be a var somewhere that is in milliseconds
        // so 1000 if you want to spin for a second 500 if you want to spin for half a second etc...
        // it can be, no harm in it
        setTimeout(function () { chimp.wasHit = false; }, SPIN_TIME);
      
      },
      
      jumpOnMiss() {
        // TODO add monkey jump 'anaimation' when player misses the monkey on click
        // also needs to watch for if y < radius, then different animation
        
        // just a start
        // NEED to use/better understand ctx.translate(x,y)
        // chimp.y = chimp.y - 100;
        chimp.wasMissed = true;
        window.console.log('monkey was missed so lives: '+player_data.lives);
                // gameLoop for lose closed successfully here
        if(player_data.lives === 0){ 
          clearInterval(gameLoop);
          window.console.log('game loop closed for LOSE *here*');
          const lose = new changeScreen('lose');
          // but not right now...
          window.console.log('LOST is instantiated here...');
          window.console.log(lose);
          return lose;
          
        }
        chimp.vx = 0;
        chimp.vy = 0;
        //window.console.log(rate);
        const JUMP_TIME = 2000; // it won't change, make it const
        // if that's easier for you to understand
        // SPIN_TIME would be a var somewhere that is in milliseconds
        // so 1000 if you want to spin for a second 500 if you want to spin for half a second etc...
        // it can be, no harm in it
        setTimeout(function () { chimp.wasMissed = false; chimp.reset(); }, JUMP_TIME);
      },
      
      // TODO final code to write for this event handler --> go to 'lose' when lives === 0 and go to
      // 'win' when score === 10
      punched(){
        canvas.addEventListener('click', (event) => {
            // here is logic to determine if player has scored a hit, or if missed the chimp
          if(event){
            if ((chimp.x+chimp.radius) > event.x && (chimp.x - chimp.radius) < event.x) {
              if ((chimp.y+chimp.radius) > event.y && (chimp.y - chimp.radius) < event.y) {
                player_data.score += 1;
                chimp.speed += 15;
                chimp.spinOnHit();
                //window.console.log('ouch!');
                // for testing of score change
               // window.console.log('score: ' + player_data.score);
               // return;
              }
            } else {
              //window.console.log('You lost a life, better be more careful!');
              player_data.lives -= 1;
              chimp.jumpOnMiss();
              // for testing of lives change
             // window.console.log('lives: ' + player_data.lives);
             // return;
            }
              
          }
   
        });
      }
    };
    chimp.punched();
    //chimp.reset();

    const update = deltaTime => {
      
      const SPIN_SPEED = 360-360*deltaTime/4;// timing issue here, crudely hacked
      // haha it spins around, finally!
      //window.console.log('at start angle is: ' + chimp.angle);
      if (chimp.wasHit) {
        
        let d = new Date().getMilliseconds();
        chimp.angle += SPIN_SPEED*deltaTime;// * 1.01;
       // window.console.log('angle' +chimp.angle);
       // window.console.log('time is: '+ d);
        // we store the angle of the chimp in degrees, so 0 to 360 is a full circle
        // this ensures our angle value doesn't get out of hand
        if (chimp.angle > 360) {
          chimp.angle = 0;
         // window.console.log('the chimp angle is: ' + chimp.angle);
        }
      }
      
      if (chimp.wasMissed) {
        // TODO this is where the animation needs to jump up and down when miss monkey
       // let d = new Date().getMilliseconds();
       // window.console.log('vy before change: '+chimp.vy);
     
        // TODO 'test' function needs work to look more like a jumping motion
        let test = function () {chimp.y -= 20*deltaTime;
          chimp.vy -= -0.2;};
        //window.console.log('y is ' +chimp.y);
        //window.console.log('time is: '+ d);
        setTimeout(test(),1000);
        // we store the angle of the chimp in degrees, so 0 to 360 is a full circle
        // this ensures our angle value doesn't get out of hand
      }
   
     
      if (chimp.vx === 0 && chimp.vy === 0 && !chimp.wasHit && !chimp.wasMissed) {
        // TODO need to better figure out angle rotation timing
        chimp.reset();
      }
      chimp.x += chimp.vx * deltaTime * chimp.speed;
      chimp.y += chimp.vy * deltaTime * chimp.speed;
      chimp.move();
     
      
    };

    
    const render = () => {
      ctx.fillStyle = 'lightgreen';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      
      ctx.translate(chimp.x, chimp.y);
      ctx.rotate(chimp.angle * chimp.TO_RADIANS);
      // TODO need to resize chimp -much- smaller, better align it to the center of the chimp object
      ctx.fillStyle = chimp.color;

      ctx.beginPath();
      
      ctx.arc(0, 0, chimp.radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.drawImage(chimp.image, -chimp.radius, -chimp.radius);
      ctx.restore();
      
      // added in visual for lives and score counters
      ctx.save();
      ctx.font = 'bold 16px sans-serif';
      ctx.fillStyle = 'black';
      ctx.textBaseline = 'top';
      const text = `lives: ${player_data.lives | 0} score: ${player_data.score | 0}`;
      ctx.clearRect(16, 16, ctx.measureText(text), 16);
      ctx.fillText(text, 16, 450);
      ctx.restore();
    };

    const DESIRED_FPS = 30;//51; //30;
    const rate = 1000 / DESIRED_FPS;
    const dt = rate * 0.001;
    window.console.log('rate is: '+ rate);
    let gameLoop = setInterval(() => { update(dt);

      render(); }, rate);
    
  }
}

