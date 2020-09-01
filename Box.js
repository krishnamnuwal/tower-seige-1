class Box  {
    constructor(x,y,width,height,angle){
        var option={
            restitution:0.7,
            friction:1.5,
            density:1.5
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        this.image=loadImage("smallbox.png")
        World.add(world,this.body);
    }
    display(){
       var pos=this.body.position
       var angle=this.body.angle
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       image(this.image,0,0,this.width,this.height)
       pop();

    }
}