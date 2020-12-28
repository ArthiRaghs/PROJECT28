class Mango{
    constructor(x,y,r){
        var options= {
            isStatic:true,
            restitution:0,
            friction:1,
            density:1
        }
        this.x=x;
        this.y=y;
        this.r=r;
        
        this.image=loadImage("images/mango.png");
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);

    }
    display()
    {
        var Pos=this.body.position;
        push();
        translate(Pos.x,Pos.y);
        fill(255,190,255);
        //strokeWeight(3);
        //stroke("black");
        ellipseMode(RADIUS);
        image(this.image,0,0,this.r*2,this.r*2);
        pop();
    }
}