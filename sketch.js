const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const attrator = new Attractor(canvas.width / 2, canvas.height / 2, 30, 50);
const mover = new Mover(250, 250, 15, 20);

setInterval(() => {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let force = attrator.attract(mover);
  mover.applyForce(force);

  mover.update();
  // mover.wrap(canvas.width, canvas.height);
  attrator.display();
  mover.display();
}, 5);
