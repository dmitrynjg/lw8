'use strict';
module.exports = {
  tracks: ['song1.mp4','song2.mp4','song3.mp4'],
  status: 'pause',
  currentTrack: 0,
  checkPlayer: function() {
    if(typeof this.tracks === 'object' && this.tracks.length !== 0){
       return true;
    }
    else{
      return false;
    }
  },
  display: function () {
    if(this.checkPlayer() === true){
    return 'Track: ' + this.tracks[this.currentTrack] + ' Status: ' + this.status;
    }
    else{
    return 'Плеер пуст';
    }
  },
  play: function () {
    this.status = 'play';
  },
  pause: function () {
    this.status = 'pause';
  },
  next: function () {
    if(this.checkPlayer() === true){
    if (this.currentTrack === this.tracks.length - 1) {
      this.currentTrack = 0;
    }
    else {
      this.currentTrack++;
    }
    }
  },
  prev: function () {
  if(this.checkPlayer() === true){
  if(this.currentTrack <= 0){
    this.currentTrack = this.tracks.length - 1;
  }
  else{
    this.currentTrack--;
  }
  }
 }
};
