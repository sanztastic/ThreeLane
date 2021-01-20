/**
 * These the parent class vehicle for player car and enemy car which inherits from these class
 * @author Shanand Shrestha
 */
class Vehicles {
    /**
     * 
     * @param {Object} imageObj contains the key/value pair data of the car object consist of path and the height and width of the vehicle
     * @param {number} x x-cordinate in which the vehile need to be placed
     * @param {number} y y-cordinate in which the vehile need to be placed
     */
    constructor(imageObj, x, y) {
        this.image = new Image();
        this.image.src = imageObj.src;
        this.x = x;
        this.y = y;
        this.width = imageObj.width;
        this.height = imageObj.height;
    }
    draw = function () {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}