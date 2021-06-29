class Bob{


    constructor(x,y){
        var options = {
            isState: false,
            restitution: 1,
            friction: 0,
            density: 7.8,

        }
        this.body = Bodies.circle(x,y,25,options);
        this.image=loadImage('images 2/Superhero-01.png');
        World.add(world,this.body);

        console.log(this.body);

    }

    display(){
        push();
        imageMode(CENTER);
        fill(254,0,255);
        image(this.image,this.body.position.x,this.body.position.y,150,100);
        pop();
    }
}