const scoreDisplay = document.getElementById('score-span');
const highScore = document.getElementById('high-score');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 720;
canvas.height = window.innerHeight;
let speed = 6;//the speed of the car
let moveImage = 0;//to move the main road, the ycordinate of the road
const lanes = [20, 260, 500];//the 3 lanes on the road
let score = 0;
const enemyArray = [];
let animationFrameId;
let gameOn = false;
highScore.textContent = localStorage.getItem('score');

/**
 * initializing the road
 */
const road = {};
road.img = new Image(720, innerHeight);
road.img.src = './assets/road.png';
road.img.onload = function () {
    ctx.drawImage(road.img, 0, 0);
}
/**
 * player car data 
 */
const playerData = {
    src: './assets/New_VehiclePack/Audi.png',
    width: 200,
    height: 200
};
const player = new Player(playerData, lanes[getRandomLanes(lanes)], innerHeight - playerData.height, getRandomLanes(lanes), lanes);
/**
 * adding the event listener to move player left and right
 */
window.addEventListener('keydown', function (e) {
    switch (e.key) {
        case 'ArrowRight':
            player.moveRight();
            break;
        case 'ArrowLeft':
            player.moveLeft();
            break;
    }
});
function reset() {
    speed = 6;
    score = 0;
    animationFrameId = 0;

}

function drawEnemies(speed, playa) {
    let bool = false;
    for (let i = 0; i < enemyArray.length; i++) {
        if (enemyArray[i].detectCollision(playa.x, playa.y, playa.width, playa.height)) {
            console.log(localStorage.getItem('score'))
            if (localStorage.getItem('score') !== null) {
                if (localStorage.getItem('score') < score) {
                    localStorage.setItem('score', score);
                }
            } else {
                localStorage.setItem('score', score);

            }
            highScore.textContent = localStorage.getItem('score');
            confirm('game over, you score was ' + score);
            if (window.confirm('Really go to another page?')) {
                location.reload();
            }
            else {
                location.reload();
            }
        }
        if (enemyArray[i].y > innerHeight) {
            enemyArray.splice(i, 1);
            score++;
            scoreDisplay.textContent = score;
            continue;
        }
        enemyArray[i].draw();
        enemyArray[i].update(speed);
    }
}
function randomizeEnemy() {
    if (enemyArray.length < 2) {
        for (let i = 0; i < 3; i++) {
            let height = getRandomHeight(innerHeight);
            const enemy = new Enemy(getRandomImage(imageData), lanes[getRandomLanes(lanes)], 0 - height);
            enemyArray.push(enemy);
        }
    }

}

function mainLoop() {
    randomizeEnemy();
    // if (player.collisionChecker(enemyArray)) {
    //     cancelAnimationFrame(animationFrameId);
    //     return;
    // }
    if (moveImage >= 0) {
        moveImage = -innerHeight;
    }
    ctx.drawImage(road.img, 0, moveImage);
    ctx.drawImage(road.img, 0, moveImage + innerHeight);
    player.draw();
    drawEnemies(speed, player);
    moveImage += speed;
    speed += 0.01;
    animationFrameId = requestAnimationFrame(mainLoop);
}
window.addEventListener('keyup', function (e) {
    if (e.code === 'Space') {
        mainLoop();
    }
})

