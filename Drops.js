class Drop {
    constructor(x,y) {
        var options = {
           //'isStatic' : true,
            'restitution' : 0.1,
        'friction' : 0.001
           //'density' : 0
        }
        /*this.x = x;
        this.y = y;*/
        this.r = 5;
        this.body = Bodies.circle(x,y,5,options);



        World.add(world,this.body);

        //from here update begins
       

        //from here displayin began
       


        /*push();
        translate(this.body.position.x,this.body.position.y);
        //rectMode(CENTER);*/
        
        
        

      
        //pop();

    }

    //else add parameter this.bdy.position or this.body.position.x,""".y.
  update() {
    if(this.body.position.y > height) {
        Matter.Body.setPosition(this.body,{x:random(0,1323),y:random(0,1575)});
    }
}

    display() {
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,5,5);
    }
//}
}