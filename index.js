/**
 * node-simple-mplayer
 * Javascript simple mplayer wrapper for Node.js
 *
 * @author Jonathan Blanchet (@jblanchefr)
 * Copyright 2012 Jonathan Blanchet @ Lab212.
 *
 * MIT License
 */

var spawn = require('child_process').spawn,
    events = require('events'),
    util = require('util');

module.exports = function Media(filename) {
    events.EventEmitter.call(this);
    this.filename = filename;
};

util.inherits(module.exports, events.EventEmitter);

module.exports.prototype.play = function (options) {
    this.stopped = false;
    var args = [this.filename];

    for(var prop in options) {
        if(options.hasOwnProperty(prop)){
            args.unshift('-'+prop, options[prop] );
        }
    }
    this.process = spawn('mplayer', args);
    this.process.on('exit', function (code, sig) {
        if (code !== null && sig === null) {
            this.emit('complete');
        }
    }.bind(this));
};

module.exports.prototype.stop = function () {
    this.stopped = true;
    if(this.process){
        this.process.kill('SIGTERM');
    }
    this.emit('stop');
};
module.exports.prototype.pause = function () {
    if (this.stopped) return;
    if(this.process){
        this.process.kill('SIGSTOP');
    }
    this.emit('pause');
};
module.exports.prototype.resume = function () {
    if (this.stopped) return this.play();
    if(this.process){
        this.process.kill('SIGCONT');
    }
    this.emit('resume');
};
