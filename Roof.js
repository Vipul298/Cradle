class Roof{
    constructor(x, y,height,angle) {
      var options = {
          isStatic : true,  
        
      }
      this.body = Bodies.rectangle(x, y, 20, height, options,{isStatic:true});
      this.width = 20;
      this.height = height;
      Matter.Body.setAngle(this.body, angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("red");
      fill("blue");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  