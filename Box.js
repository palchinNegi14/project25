class Box {
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            density:1.2,
        }
        this.body1 = Bodies.rectangle(680,585,100,10);
        this.body2 = Bodies.rectangle(630,540,10,100);
        this.body3 = Bodies.rectangle(730,540,10,100);
        this.width=width;
        this.height=height;
        this.image = loadImage("dustbin.jpg");
        World.add(world, this.body1);
        World.add(world, this.body2);
        World.add(world, this.body3);
    }
    display(){
        
        rectMode(CENTER);
        fill("purple")
        rect(630,540,10,100);
        rect(730,540,10,100);
        image(this.image,620,490,120,100);

    }


}