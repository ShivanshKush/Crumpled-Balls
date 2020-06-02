class Ball {
  constructor(x,y,radiusX,radiusY) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1.0
    }
    this.body = Bodies.circle(x,y,radiusX,radiusY);
    this.radiusX = radiusX;
    this.radiusY = radiusY;
    this.image = loadImage("assets/paper.png");
    World.add(world,this.body);
  }

  display() {
    var pos = this.body.position;

    imageMode(CENTER);
    
    image(this.image,pos.x,pos.y,this.radiusX,this.radiusY);

  }
}
