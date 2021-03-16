class Umbrella {
    constructor(x,y) {
       

        var options = {
            'isStatic' : true,
            'restitution' : 0,
           'friction' : 0,
           'density' : 0
        };
        this.x = x;
        this.y = y;
        this.r = 50;
        this.image = loadImage("walking_1.png");
        this.body = Bodies.circle(this.x,this.y,this.r,options);

        World.add(world,this.body);
    }

    display() {
        /*push();
        translate(this.body.position.x, this.body.position.y);*/
        //rotate(angle);
       // push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.r*10, this.r*10);
       // pop();
    }
}