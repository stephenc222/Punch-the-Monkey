
export class BounceDemo {
  constructor() {
    this._init();
    this._create();
  }

  _init() {
    document.title = 'Bouncing Ball Demo';
    this.canvas = document.createElement('canvas');
    this.canvas.width = 640;
    this.canvas.height = 480;
    document.body.insertBefore(this.canvas, document.body.firstChild);
    this.ctx = this.canvas.getContext('2d');
  }

  _create() {
    const { ctx, canvas } = this;

    const ball = {
      speed: 300,
      x: canvas.width * 0.5,
      y: canvas.height * 0.5,
      vx: 1,
      vy: -1,
      color: 'yellow',
      radius: 32,
      
      reset() {
        ball.vx = -1 + Math.random() * 1;
        ball.vy = -1 + Math.random() * 1;
      },

      bounce() {
        if (ball.x < ball.radius || ball.x + ball.radius > canvas.width) {
          ball.vx = -ball.vx;
        }
        if (ball.y < ball.radius || ball.y + ball.radius > canvas.height) {
          ball.vy = -ball.vy;
        }
      }
    };

    ball.reset();

    const update = deltaTime => {
      if (ball.vx === 0 && ball.vy === 0) {
        ball.reset();
      }
      ball.x += ball.vx * deltaTime * ball.speed;
      ball.y += ball.vy * deltaTime * ball.speed;
      ball.bounce();
    };

    const render = () => {
      ctx.fillStyle = 'cornflowerblue';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.translate(ball.x - ball.radius, ball.y - ball.radius);
      ctx.fillStyle = ball.color;
      ctx.beginPath();
      ctx.arc(ball.radius, ball.radius, ball.radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.restore();
    };

    const DESIRED_FPS = 30;
    const rate = 1000 / DESIRED_FPS;
    const dt = rate * 0.001;
    setInterval(() => { update(dt); render(); }, rate);
  }
}

