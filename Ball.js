class Ball {
    constructor(x,y,angle){
        var option={
            restitution:0.5,
            density:0.8,
            friction:1,
        }
        this.body=Matter.Bodies.circle(x,y,100,option)
        this.radius=100;
        this.color="blue"
        World.add(world,this.body)
     //   super(x,y,width,height);
      //  this.image=loadImage("ball.png");
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        fill(this.color);
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0,0,100);
        pop();
       // super.display()
       // imageMode(CENTER);
    }
}