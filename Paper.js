class Paper{
    constructor(x,y,radius){
        var options ={
            isStatic:false,
            restitution:0.3,
            density:1.2,
            friction:0.5,
        }
        this.body = Bodies.circle(x, y, 40, options);
        this.radius= radius
        this.image = loadImage("paper.png");
       
        World.add(world, this.body);
    }
    display(){
        
       
        var pos =this.body.position;
       
        image(this.image,pos.x, pos.y, 50,50);
        
    }
}