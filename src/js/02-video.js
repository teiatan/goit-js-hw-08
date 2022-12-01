
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
 
player.on('timeupdate', throttle(saveTime, 1000));

function saveTime() {
    player.getCurrentTime().then(function (seconds) {
        localStorage.setItem('videoplayer-current-time', seconds);
    });
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
