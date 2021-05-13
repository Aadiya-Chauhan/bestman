class Drop {
    constructor(x, y){
        var options = {
            isStatic:false,
            friction:0.3,
            density:0.4
        }
        this.drop = Bodies.circle(x, y, 5, options);
        this.radius = 10;
        World.add(world, this.drop);
    }
    
    display() {
        var pos = this.drop.position;
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, 10);
    }

    update() {
        if(this.rain.position.y > height) {
            Matter.Body.setPosition(this.rain, {x:random(0, 1000), y:random(0, 1000)})
        }
    }
}