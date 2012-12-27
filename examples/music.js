var Media = require('../index.js');

var music = new Media('./trumpet.wav');
music.play({loop: 0}); // send "-loop 0" to MPlayer to loop the soundtrack forever
