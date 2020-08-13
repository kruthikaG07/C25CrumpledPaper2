class Paper{
constructor(x,y,radius){
    this.image = loadImage("Images/paper.png");
var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
this.body = Bodies.circle(x,y,25,options);
this.image=loadImage("Images/paper.png")
this.radius = 70;
World.add(world,this.body);
}
display(){
    var angle = this.body.angle;
    var pos = this.body.position
    push();
    imageMode(CENTER);
    fill("blue");
    translate(pos.x,pos.y);
    rotate(angle);
    image(this.image,0,0,70,70)
    pop();
}
}