
export class PunchTheMonkey {
  constructor() {
    this._init();
    this._create();
  }
  

  _init() {
    document.title = 'Punch the Monkey';
    this.canvas = document.createElement('canvas');
    this.canvas.width = 640; // 640 originally
    this.canvas.height = 480; // 480 orig
    document.body.insertBefore(this.canvas, document.body.firstChild);
    this.ctx = this.canvas.getContext('2d');
    
  }

  _create() {
    const { ctx, canvas } = this;
    const chimp_base = new Image();
    chimp_base.src = './chimp_base.1.png';
    
    // adding player data here
    const player_data = {
      'score': 0,
      'lives': 3
    };


    const chimp = {
      speed: 100,
      lockMovement: false,
      x: canvas.width * 0.5,
      y: canvas.height * 0.5,
      vx: 1,
      vy: -1,
      // TODO color prop is temporary, just to help with sprite alignment
      color: 'yellow',
      image: chimp_base,
      radius: 42, // adjusted from 60 to better fit chimp base sprite
      
      reset() {
        chimp.vx = -1 + 0.5;// + Math.random() * 1;
        chimp.vy = -1 + 0.5;// + Math.random() * 1;
      },

      move() {
        if(!chimp.lockMovement){
          if (chimp.x < chimp.radius || chimp.x + chimp.radius > canvas.width) {
            chimp.vx = -chimp.vx;
          }
          if (chimp.y < chimp.radius || chimp.y + chimp.radius > canvas.height) {
            chimp.vy = -chimp.vy;
          }
        }
      },
      
      spinOnHit() {
        //TODO add 'spin' animation when player 'punches', (clicks) on monkey
        chimp.lockMovement = true;
        
        chimp.x = chimp.x;
        chimp.vx = 0;
        chimp.y = chimp.y;
        chimp.vy = 0;
        
        
        let TO_RADIANS = Math.PI/180;
        let t = 90;
        let z;
        ctx.save();
        clearInterval(car);
        
        function drawRotatedImage(image, x, y, angle) { 
          // save the current co-ordinate system 
          // before we screw with it
        //  z = setInterval( () => {
          if(angle <= 360){
            //ctx.save(); 
            // move to the middle of where we want to draw our image
            //ctx.translate(x, y);
            // rotate around that point, converting our 
            // angle from degrees to radians 
            ctx.rotate(angle * TO_RADIANS);
            
            // draw it up and to the left by half the width
            // and height of the image 
            ctx.drawImage(image, -(chimp.radius/2), -(chimp.radius/2));
             // window.console.log('angle is: ' + angle);
            // and restore the co-ords to how they were when we began
           // ctx.restore()
          } else {
              //clearInterval(this);
          }
       //   }, 1000);
          
        }
        // so this is rotating when the "t + x" x's value changes just now...
        for (t = 0; t <= 360; t+=10){
          if (t<=360){
            drawRotatedImage(chimp.image,chimp.x,chimp.y,t);
          } else {
            clearInterval(z);
          }
        }
        ctx.restore();
        
        /*
        ctx.save();
        ctx.translate(200,200);
        // here start setInterval
        ctx.rotate(90*Math.PI/180);
        ctx.drawImage(chimp.image, -(chimp.radius/2), -(chimp.radius/2));
        ctx.restore();
        // returns back to caller after 3 seconds
        */
        chimp.lockMovement = false;
        
        car = setInterval(() => { update(dt); render(); }, rate);
        return; 
        //chimp.lockMovement = false;
      },
      
      jumpOnMiss() {
        // TODO add monkey jump 'anaimation' when player misses the monkey on click
        // also needs to watch for if y < radius, then different animation
        
        // just a start
        // NEED to use/better understand ctx.translate(x,y)
        chimp.y = chimp.y - 100;
      },
      
      // TODO final code to write for this event handler --> go to 'lose' when lives === 0 and go to
      // 'win' when score === 10
      punched(){
        canvas.addEventListener('click', (event) => {
            // here is logic to determine if player has scored a hit, or if missed the chimp
          if(event){
            if ((chimp.x+chimp.radius) > event.x && (chimp.x - chimp.radius) < event.x) {
              if ((chimp.y+chimp.radius) > event.y && (chimp.y - chimp.radius) < event.y) {
                chimp.lockMovement === true;
                window.console.log('ouch!');
                player_data.score += 1;
                chimp.spinOnHit();
                // for testing of score change
                window.console.log('score: ' + player_data.score);
                return;
              }
            } else {
              window.console.log('You lost a life, better be more careful!');
              player_data.lives -= 1;
              chimp.jumpOnMiss();
              // for testing of lives change
              window.console.log('lives: ' + player_data.lives);
            }
              
          }
          
          // event ? window.window.console.log('chimp object x = '+ chimp.x + '\n' + 'chimp object y =' + chimp.y + '\n' +
          //               'event object x = '+ event.x + '\n' + 'event object y =' + event.y)
          // : null;
        });
      }
    };
    chimp.punched();
    //chimp.reset();

    const update = deltaTime => {
      if (chimp.vx === 0 && chimp.vy === 0 && chimp.lockMovement === false) {
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
      ctx.translate(chimp.x - chimp.radius, chimp.y - chimp.radius);
      // TODO need to resize chimp -much- smaller, better align it to the center of the chimp object
      ctx.fillStyle = chimp.color;
      ctx.drawImage(chimp.image, 0, 0);
      ctx.beginPath();
      ctx.arc(chimp.radius, chimp.radius, chimp.radius, 0, 2 * Math.PI);
      //ctx.fill(); //uncomment to get the yellow ball back
      ctx.restore();
    };

    const DESIRED_FPS = 30;
    const rate = 1000 / DESIRED_FPS;
    const dt = rate * 0.001;
    let car = setInterval(() => { update(dt); render(); }, rate);
  }
}

