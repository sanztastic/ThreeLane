/**
 * PLayer class which consist of the player data like car and other functionaloties that player have and the
 * additional param is the lane where the player is at the moment
 * @author Shanand Shrestha
 */
class Player extends Vehicles {
    constructor(imageObj, x, y, lane, laneArr) {
        super(imageObj, x, y);
        this.lane = lane;
        this.laneArr = laneArr;
    }
    moveLeft = function () {
        if (this.lane === 0) {
            this.x = this.laneArr[0];
        } else {
            this.lane -= 1;
            this.x = this.laneArr[this.lane];
        }
    }
    moveRight = function () {
        if (this.lane === 2) {
            this.x = this.laneArr[2];
        } else {
            this.lane += 1;
            this.x = this.laneArr[this.lane];
        }
    }
    // collisionChecker(enemyArray) {
    //     for (let i = 0; i < enemyArray.length; i++) {
    //         let enemy = enemyArray[i];
    //         return this.detectCollision(this.x, this.y, this.width, this.height, enemy.x, enemy.y, enemy.width, enemy.height);
    //     }
    // }

    // detectCollision(x1, y1, w1, h1, x2, y2, w2, h2) {
    //     if (x1 < x2 + (w2 - 40) &&
    //         x1 + (w1 - 40) > x2 &&
    //         y1 < y2 + (h2 - 40) &&
    //         y1 + (h1 - 40) > y2) {
    //         console.log('collided');
    //         return true;
    //     }
    // }
}