'use strict';
module.exports = class Player {
  tracks = ['song1.mp4', 'song2.mp4', 'song3.mp4'];
  status = 'pause';
  currentTrack = 0;

  checkPlayer(){
    if (typeof this.tracks === 'object' && this.tracks.length !== 0) {
      return true;
    }
    else {
      return false;
    }
  };
  display() {
    if (this.checkPlayer() === true) {
      return 'Track: ' + this.tracks[this.currentTrack] + ' Status: ' + this.status;
    }
    else {
      return 'Плеер пуст';
    }
  };
  play() {
    this.status = 'play';
  };
  pause() {
    this.status = 'pause';
  };
  next() {
    if (this.checkPlayer() === true) {
      if (this.currentTrack === this.tracks.length - 1) {
        this.currentTrack = 0;
      }
      else {
        this.currentTrack++;
      }
    }
  };
  prev() {
    if (this.checkPlayer() === true) {
      if (this.currentTrack <= 0) {
        this.currentTrack = this.tracks.length - 1;
      }
      else {
        this.currentTrack--;
      }
    }
  }
};

