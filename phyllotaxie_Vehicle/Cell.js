class Cell extends Vehicle {

    constructor(x, y, size) {
        super(x, y, size)
        this.maxSpeed = 2;
        this.maxForce = 0.5;
        this.avoidSpeed = .5;
        this.avoidForce = 0.5;
        this.arrivingZone = 0;
        this.avoidingZone = this.size * 3.3;
    }
}

Cell.prototype.showWire = function(cellArray) {
    for(let c of cellArray) {
        if(this.inZone(c, this.avoidingZone))
            Draw.line(ctx, this.location, c.location);
    }
}
