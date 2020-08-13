class Dustbin {
constructor(x,y,width,height){
var options={
    isStatic:true
}
this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height; 
        this.image=loadImage("Images/dustbingreen.png")
        World.add(world,this.body);
}
display(){
   rectMode(CENTER);
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    imageMode(CENTER);
    strokeWeight(5)
    stroke("blue");
    fill("blue");
    image(this.image,0,0,200,300);
    pop();
}
}


