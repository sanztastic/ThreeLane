function getRandomLanes(lanes) {
    return Math.floor(Math.random() * lanes.length);
}
function getRandomImage(imageData) {
    return imageData[Math.floor(Math.random() * imageData.length)];
}
function getRandomHeight(height) {
    return Math.floor(Math.random() * (5 * height));
}