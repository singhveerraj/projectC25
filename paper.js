class Paper {
constructor(x,y,radius){
    var options = {
        restitution:0.5,
    
        friction:0.5,
        density:1.2
    }
    this.Body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    this.image = loadImage("sprites/paper.png")

   World.add(world,this.Body);




}
display(){
    var pos = this.Body.position;
    fill ("white");
    imageMode(CENTER);
   image(this.image,pos.x,pos.y,this.radius,this.radius);
}







}

