class SlingShot{
    constructor(bodyA,pointB){
        var option ={
            bodyA:bodyA,
            pointB:pointB,
            stiffeness:0.04,
            length:15,
            density:0.8
        }
        this.pointB = pointB
        this.sling = Constraint.create(option);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
      //  image(this.sling1,200,20);
       // image(this.sling2,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke("black");
            if(pointA.x < 201) {
                strokeWeight(7);
                stroke(35,13,0)
              line(pointA.x-30 , pointA.y+10, pointB.x -30, pointB.y);
                line(pointA.x - 30, pointA.y+10, pointB.x + 30, pointB.y - 5);
             
            }
            else{
                strokeWeight(7);
                stroke(35,13,0)
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
              
            }
           
            
            pop();
        }
    }
    
}
    