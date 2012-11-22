var Sound = require('../index.js');

// fire and forget:
//new Sound('./trumpet.wav').play();

// with ability to pause/resume:
var music = new Sound('./trumpet.wav');
music.play({loop: 0});

setTimeout(function () {
    music.pause(); // pause the music after five seconds
}, 1000);

setTimeout(function () {
    music.resume(); // and resume it two seconds after pausing
}, 3000);

setTimeout(function () {
    music.stop(); // and resume it two seconds after pausing
}, 6000);
