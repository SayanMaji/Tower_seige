class Box{
  constructor(x, y, width, height) {
      var options = {
        isStatic:true,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos=this.body.position;
      push();
      translate(this.body.position.x, this.body.position.y);
      rectMode(CENTER);
      var rand=Math.round(random(1,4));
      switch(rand){
        case 1: fill("red");
        break;
        case 2:fill("blue");
        break;
        case 3: fill("yellow");
        break;
        case 4: fill("orange");
        break;
        default : fill("white");
      }
       rect(pos.x,pos.y,this.width,this.height);
      pop();
    }
}