import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('video'),
  playButton = document.querySelector('#playButton'),
  muteButton = document.querySelector('#muteButton'),
  player = new MediaPlayer({
    el: video,
    plugins: [
      new AutoPlay(),
      new AutoPause()
    ]
  });

playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();
