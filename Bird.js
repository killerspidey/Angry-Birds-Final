class Bird extends BaseClass {
  constructor(x,y){
      super(x,y,50,50);
      this.Redimage = loadImage("sprites/Red.png");
      this.Blueimage = loadImage("sprites/Blue.png");
      this.Chuckimage = loadImage("sprites/Chuck.png");
      this.smokeImage = loadImage("sprites/smoke.png");
      this.trajectory =[];
      this.visibility = 255;
  }

  display() {
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   
    for(var i=0; i<this.trajectory.length; i++){
        push();
        this.visibility -= 0.05;
        tint(255, this.visibility);
        image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
        pop();
    }
  }
    displayRed () {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.Redimage, 0, 0, this.width, this.height);
        pop();
    }
    
    displayBlue () {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.Blueimage, 0, 0, this.width, this.height);
        pop();
    }
    
    displayChuck () {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.Chuckimage, 0, 0, this.width, this.height);
        pop();
    }
}