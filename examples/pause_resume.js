var Media = require('../index.js');

// with ability to pause/resume/stop:
var music = new Media('./trumpet.wav');

music.pause();

music.play({loop: 0}); // send "-loop 0" to MPlayer to loop the soundtrack forever


setTimeout(function () {
    music.pause(); // pause the music after one seconds
}, 1000);

setTimeout(function () {
    music.resume(); // and resume it two seconds after pausing
}, 3000);

setTimeout(function () {
    music.stop(); // and stop definitely seven seconds after resuming
}, 10000);

