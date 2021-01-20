/**
 * These class is for the enemy object which ill randomly spawn on the road in random lanes.The vehicles 
 * will be random
 */
class Enemy extends Vehicles {
    constructor(imageObj, x, y) {
        super(imageObj, x, y);
    }
    update(speed) {
        this.y += speed;
    }
    detectCollision(x2, y2, w2, h2) {
        if (this.x < x2 + (w2 - 40) &&
            this.x + (this.width - 40) > x2 &&
            this.y < y2 + (h2 - 40) &&
            this.y + (this.height - 40) > y2) {
            console.log('collided');
            return true;
        }
    }
}