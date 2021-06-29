class Throw{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB=pointB;
        this.throw = Constraint.create(options);
        World.add(world,this.throw);
    }

    fly(){
        this.throw.bodyA=null;
    }

    Launch(bodyA){
        this.throw.bodyA=bodyA;
    }

    display(){
        if(this.throw.bodyA){
        strokeWeight(5)
        stroke("Black");
        line(this.throw.bodyA.position.x,this.throw.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
    }
}