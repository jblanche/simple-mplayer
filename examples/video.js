var Media = require('../index.js');

//Video
var video = new Media('./sample.mov');
video.play({fs: true}); // send "-fs true" to start FullScreen
