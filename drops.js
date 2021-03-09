class Rainfall{
    constructor(x,y) {
        var options = {
            'friction':0.1,
            'density':1.0
        }
        this.rain = Bodies.circle(x, y,4,options);
        this.radius=4
        this.drop=[];
        World.add(world, this.rain);
      }
      display(){
        if(frameCount%10===0){
        var pos= this.rain.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        ellipse( 0, 0, 2*this.radius,2*this.radius);
        pop();
             var position=[pos.x,pos.y];
             this.drop.push(position);
        
        for(var i=0;i<this.drop.length;i++){
            ellipse(random(0,400),random(0,600),2*this.radius,2*this.radius);
            fill("blue");
          }
        if(this.rain.y>height){
          Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
        }
      }
    }
}